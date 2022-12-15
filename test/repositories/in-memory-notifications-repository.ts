import { NotificationRepository } from "../../src/application/repositories/NotificationRepository";
import { Notification } from "../../src/application/entities/Notification";

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification)
  }
}