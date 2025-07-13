import { applicationController } from "./application_controller"

export default class extends ApplicationController {
  static values = { targetId: String }

  inputChanged(event) {
    const hasText = event.target.value.trim().length > 0
    const controller = this.application.getControllerForElementAndIdentifier(
      document.getElementById(this.targetIdValue),
      "visibility"
    )
    controller.visibleValue = hasText
  }
}
