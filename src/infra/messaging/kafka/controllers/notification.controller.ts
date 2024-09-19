import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationBody {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  // every time a message is received, this method will be called
  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationBody,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
