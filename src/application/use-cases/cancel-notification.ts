import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/NotificationRepository';
import { NotificationNotFound } from './notification-not-found';

interface CancelNotificationProps {
  notificationId: string
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: CancelNotificationProps,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.cancel()

    await this.notificationsRepository.save(notification)
  }
}
