import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/Notification";
import { NotificationRepository } from "../../../../application/repositories/NotificationRepository"
import { PrismaService } from "../prisma.service"

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }
} 