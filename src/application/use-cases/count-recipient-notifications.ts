import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/NotificationRepository';

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
