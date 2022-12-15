import { Content } from "./Content"

describe("Notification content", () => {
  it("should be able to create a notification content", () => {
    const content = new Content("Voce recebeu uma nova solicitacao")
  
    expect(content).toBeTruthy()
  })
  
  it("should not be able to create a notification content with less than 5 characters", () => {
    expect(() => new Content("aaa")).toThrow()
  })
  
  it("should not be able to create a notification content with more than 240 characters", () => {
    expect(() => new Content("a".repeat(241))).toThrow()
  })
})
