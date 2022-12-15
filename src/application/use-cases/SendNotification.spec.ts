import { Notification } from "../entities/Notification";
import { SendNotification } from "./SendNotification"

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  }
}

describe("Send Notification", () => {
  it("should be able to send a notification", async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: "This is a notification",
      category: "social",
      recipientId: "example-recipientId"
    })

    expect(notifications).toHaveLength(1)
  })
})