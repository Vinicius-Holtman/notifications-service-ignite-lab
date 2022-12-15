import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';

interface SendNotificationsProps {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotifications {
  async execute(
    request: SendNotificationsProps,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    };
  }
}
