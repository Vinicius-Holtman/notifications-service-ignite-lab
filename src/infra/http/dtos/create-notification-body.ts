import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CraeteNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 256)
  content: string;

  @IsNotEmpty()
  category: string;
}