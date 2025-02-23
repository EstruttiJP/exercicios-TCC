# Exercicios TCC
Exercicios feitos para ter propriedade para se desenvolver o TCC 
<br>
<p> <strong>IDEAL:</strong> cada integrante criar uma Branch com seu nome e ir treinando para não ficar perdido no trabalho </p>

### **Exercício 1: Envio de Mensagem Simples**

- **Objetivo:** Enviar uma mensagem estática para um número específico usando o Baileys.
- **Tarefas:**
  - Criar um script que se conecte ao WhatsApp exibindo o QR Code.
  - Configurar a autenticação (usando `useMultiFileAuthState` ou similar).
  - Após a conexão, enviar uma mensagem de teste para um número pré-definido.
- **Resultado Esperado:** Ao executar o script, o QR Code é exibido, a conexão é estabelecida e a mensagem é enviada para o número informado.

---

### **Exercício 2: Entrada de Dados via Terminal**

- **Objetivo:** Permitir que o usuário informe o número e o conteúdo da mensagem pelo terminal.
- **Tarefas:**
  - Utilizar o módulo `readline` do Node.js para capturar inputs do usuário.
  - Modificar o script para perguntar, primeiro, o número de telefone e, depois, a mensagem.
- **Resultado Esperado:** O script solicita e lê as entradas do usuário e, com esses dados, envia a mensagem.

---

### **Exercício 3: Resposta Automática a Mensagens Recebidas**

- **Objetivo:** Fazer com que o bot responda automaticamente a mensagens recebidas.
- **Tarefas:**
  - Configurar o evento de recepção de mensagens usando os listeners do Baileys.
  - Implementar uma resposta simples (por exemplo, responder “Olá, como posso ajudar?” sempre que uma mensagem for recebida).
- **Resultado Esperado:** O bot lê as mensagens dos contatos e envia automaticamente uma resposta predefinida.

---

### **Exercício 4: Fluxo Básico de Atendimento**

- **Objetivo:** Criar um fluxo de atendimento simples que faça perguntas e registre respostas.
- **Tarefas:**
  - Desenvolver um fluxo de diálogo: por exemplo, perguntar o nome do usuário, depois o problema e, com base nisso, enviar uma resposta.
  - Utilizar estruturas condicionais para alterar o fluxo de acordo com as respostas.
- **Resultado Esperado:** O bot conduz uma breve conversa, solicitando informações e respondendo de forma lógica conforme o input do usuário.

---

### **Exercício 5: Integração com uma API de Processamento de Linguagem Natural (NLP)**

- **Objetivo:** Integrar o bot com uma API de NLP (como Dialogflow, Wit.ai ou OpenAI) para interpretar a intenção do usuário.
- **Tarefas:**
  - Selecionar e configurar uma API de NLP.
  - Enviar o texto recebido para a API e processar a resposta.
  - Adaptar a resposta do bot conforme a análise da API.
- **Resultado Esperado:** O bot consegue identificar intenções e responder de forma mais personalizada com base na interpretação do texto.

---

### **Exercício 6: Gerenciamento de Sessões e Múltiplos Usuários**

- **Objetivo:** Desenvolver uma lógica para gerenciar conversas simultâneas com vários usuários.
- **Tarefas:**
  - Implementar uma forma de identificar e armazenar o estado de cada conversa (por exemplo, usando uma estrutura em memória ou banco de dados simples).
  - Garantir que cada sessão mantenha seu fluxo de atendimento individual.
- **Resultado Esperado:** O bot gerencia corretamente diferentes sessões, respondendo de forma apropriada a cada usuário sem misturar os contextos.

---

### **Exercício 7: Registro e Exportação do Histórico de Conversas**

- **Objetivo:** Integrar funcionalidades para armazenar e, possivelmente, exportar o histórico de conversas.
- **Tarefas:**
  - Explorar o repositório `whatsapp-history-exporter` para entender como exportar o histórico.
  - Implementar a gravação do histórico das conversas em um arquivo ou banco de dados.
- **Resultado Esperado:** Toda conversa é registrada e pode ser exportada para análise ou backup.

---

### **Exercício 8: Implementação de Comandos Específicos e Automação**

- **Objetivo:** Adicionar comandos específicos para automatizar ações (como “/help”, “/status”, etc.).
- **Tarefas:**
  - Definir uma lista de comandos e suas respectivas ações.
  - Implementar a detecção e execução desses comandos no fluxo de mensagens.
- **Resultado Esperado:** O bot identifica comandos especiais e executa ações pré-definidas, aumentando a interatividade e utilidade do sistema.

---

### **Exercício 9: Projeto Final – IA de Atendimento Completo**

- **Objetivo:** Integrar todos os conhecimentos para criar uma IA de atendimento automático completa.
- **Tarefas:**
  - Consolidar a autenticação, o fluxo de atendimento, a integração com API de NLP, o gerenciamento de sessões e o registro do histórico.
  - Implementar um fluxo de atendimento robusto que possa lidar com diferentes tipos de interações (suporte, dúvidas frequentes, agendamentos etc.).
  - Realizar testes abrangentes e, se possível, incluir logs e monitoramento.
- **Resultado Esperado:** Um sistema completo de atendimento automático no WhatsApp, capaz de interagir com os usuários de forma inteligente, registrar histórico e responder a comandos e dúvidas com base em NLP.
