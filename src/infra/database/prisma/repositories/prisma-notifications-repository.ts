import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entities/Notification";
import { NotificationRepository } from "../../../../application/repositories/NotificationRepository"
import { PrismaService } from "../prisma.service"
import { PrismaNotificationMapper } from "../mappers/prisma-notifications-mapper"

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notifications.create({
      data: raw,
    })
  }

  async findById(notificationId: string): Promise<Notification> {
    const notification = await this.prismaService.notifications.findUnique({
      where: {
        id: notificationId
      }
    })

    if (!notification) {
      return null
    }

    return PrismaNotificationMapper.toDomain(notification)
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notifications.update({
      where: {
        id: raw.id
      },
      data: raw
    })
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notifications.count({
      where: {
        recipientId
      }
    })

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notifications.findMany({
      where: {
        recipientId
      }
    })

    return notifications.map(PrismaNotificationMapper.toDomain)
  }
} 