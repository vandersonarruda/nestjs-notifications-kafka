import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['localhost:9092'],
        clientId: 'notifications',
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
