import { Injectable } from '@nestjs/common';
import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';
import { NotificationRepository } from '../repositories/NotificationRepository';

interface SendNotificationProps {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: SendNotificationProps,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification)

    return {
      notification,
    };
  }
}
