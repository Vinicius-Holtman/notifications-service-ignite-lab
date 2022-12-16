import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/NotificationRepository';
import { NotificationNotFound } from './notification-not-found';

interface ReadNotificationProps {
  notificationId: string
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: ReadNotificationProps,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.read()

    await this.notificationsRepository.save(notification)
  }
}
