import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState
} from '@whiskeysockets/baileys';
import * as qrcode from 'qrcode-terminal';
import { Boom } from '@hapi/boom';

async function connectToWhatsApp() {
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
            const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexão encerrada devido a', lastDisconnect?.error, 'Reconectando...', shouldReconnect);

            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('✅ Conectado ao WhatsApp!');
            sendMessage(sock);
        }
    });

    sock.ev.on('creds.update', saveCreds);
}

async function sendMessage(sock: ReturnType<typeof makeWASocket>) {
    const numeroDestino = '5511999999999@s.whatsapp.net'; // Substitua pelo número desejado
    const mensagem = 'Olá! Esta é uma mensagem de teste enviada via Baileys com TypeScript. 🚀';

    await sock.sendMessage(numeroDestino, { text: mensagem });
    console.log('📤 Mensagem enviada com sucesso!');
}

connectToWhatsApp();