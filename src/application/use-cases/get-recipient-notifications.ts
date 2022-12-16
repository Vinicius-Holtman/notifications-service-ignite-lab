import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/Notification';
import { NotificationRepository } from '../repositories/NotificationRepository';

interface GetRecipientNotificationProps {
  recipientId: string
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: GetRecipientNotificationProps,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyBtRecipientId(recipientId)

    return {
      notifications
    }
  }
}
