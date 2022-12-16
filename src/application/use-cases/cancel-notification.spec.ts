import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { Content } from "../entities/Content";
import { Notification } from "../entities/Notification";
import { CancelNotification } from "./cancel-notification";

describe("Cancel Notification", () => {
  it("should be able to cancel a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: "social",
      content: new Content("Nova solicitacao de amizade!"),
      recipientId: "exemple-recipient-id"
    })

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id
    })

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
  })
})