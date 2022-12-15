import { Content } from "./Content"

it("should be able to create a notification content", () => {
  const content = new Content("Voce recebeu uma nova solicitacao")

  expect(content).toBeTruthy()
})