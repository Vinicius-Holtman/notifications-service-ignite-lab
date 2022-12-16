import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/NotificationRepository';
import { NotificationNotFound } from './notification-not-found';

interface UnreadNotificationProps {
  notificationId: string
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: UnreadNotificationProps,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.unread()

    await this.notificationsRepository.save(notification)
  }
}
