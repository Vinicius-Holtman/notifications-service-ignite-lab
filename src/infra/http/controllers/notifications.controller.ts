import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/SendNotification';
import { CraeteNotificationBody } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CraeteNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return { notification }
  }
}
