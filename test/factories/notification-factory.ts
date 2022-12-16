import { Content } from "../../src/application/entities/Content";
import { Notification, NotificationProps } from "../../src/application/entities/Notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: "social",
    content: new Content("Nova solicitacao de amizade!"),
    recipientId: "recipient-id-1",
    ...override
  })
}