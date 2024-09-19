import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  @EventPattern('notifications.send-notification')
  async handleSendNotification() {
    // every time a message is received, this method will be called
    console.log('teste KAFKA');
  }
}
