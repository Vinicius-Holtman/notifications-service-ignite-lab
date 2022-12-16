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
} 