import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState
} from '@whiskeysockets/baileys';
import * as qrcode from 'qrcode-terminal';
import { Boom } from '@hapi/boom';
import readline from 'readline';
async function conectarAoWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr) {
            qrcode.generate(qr, { small: true });
        }
        if (connection === 'close') {
            const deveReconectar = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexão encerrada devido a', lastDisconnect?.error, 'Reconectando...', deveReconectar);

            if (deveReconectar) {
                conectarAoWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('✅ Conectado ao WhatsApp!');
            solicitarEntradaDoUsuario(sock);
        }
    });
    sock.ev.on('creds.update', saveCreds);
}
function solicitarEntradaDoUsuario(sock: ReturnType<typeof makeWASocket>) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Digite o número de telefone (com DDI e DDD, ex: 5511999999999): ', (numero) => {
        const numeroDestino = `${numero}@s.whatsapp.net`;
        rl.question('Digite a mensagem para enviar: ', async (mensagem) => {
            try {
                await sock.sendMessage(numeroDestino, { text: mensagem });
                console.log('📤 Mensagem enviada com sucesso!');
            } catch (error) {
                console.error('❌ Erro ao enviar a mensagem:', error);
            } finally {
                rl.close();
            }
        });
    });
}
conectarAoWhatsApp();