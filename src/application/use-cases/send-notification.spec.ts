import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification): Promise<void> {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Nova solicitação de amizade',
      category: 'social',
      recipientId: 'example-user-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
