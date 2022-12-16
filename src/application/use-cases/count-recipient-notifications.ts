import { Injectable } from '@nestjs/common';
import { Content } from '../entities/Content';
import { Notification } from '../entities/Notification';
import { NotificationRepository } from '../repositories/NotificationRepository';
import { NotificationNotFound } from './notification-not-found';

interface CountRecipientNotificationProps {
  recipientId: string
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: CountRecipientNotificationProps,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

    return {
      count
    }
  }
}
