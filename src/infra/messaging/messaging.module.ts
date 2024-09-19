import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { NotificationController } from './kafka/controllers/notification.controller';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationController],
})
export class MessagingModule {}
