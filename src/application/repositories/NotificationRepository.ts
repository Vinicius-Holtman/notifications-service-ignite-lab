import { Notification } from "../entities/Notification";

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notifiaction: Notification): Promise<void>;
}