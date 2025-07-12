import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { targetId: String }

  inputChanged(event) {
    const hasText = event.target.value.trim().length > 0
    const controller = this.application.getControllerForElementAndIdentifier(
      document.getElementById(this.targetIdValue),
      "visibility"
    )
    console.log("Setting visibleValue to:", hasText, "Previous:", controller.visibleValue)
    controller.visibleValue = hasText
  }
}
