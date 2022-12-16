import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller"
import { CancelNotification } from "src/application/use-cases/cancel-notification";
import { CountRecipientNotification } from "src/application/use-cases/count-recipient-notifications";
import { GetRecipientNotification } from "src/application/use-cases/get-recipient-notifications";
import { ReadNotification } from "src/application/use-cases/read-notification";
import { UnreadNotification } from "src/application/use-cases/unread-notification";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification
  ]
})
export class HttpModule {}