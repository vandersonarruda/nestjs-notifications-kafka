import { Kafka } from "kafkajs"; 
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  try {
    const kafka = new Kafka({
      clientId: 'kafka-producer',
      brokers: ['localhost:9092'],
    });

    const producer = kafka.producer()

    await producer.connect()

    await producer.send({
      topic: 'notifications.send-notification',
      messages: [
        { 
          value: JSON.stringify({
            content: 'Nova solicitação de amizade!',
            category: 'social',
            recipientId: randomUUID()
          })
        },
      ],
    })

    await producer.disconnect()
    console.log('Mensagem enviada com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }
}

bootstrap()