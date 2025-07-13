import { ApplicationController } from "./application_controller"
import { titleCase } from "title-case"

export default class TitleCaseController extends ApplicationController {
  static targets = ["input", "output", "hidden"]

  updateOutput() {
    const inputValue = this.inputTarget.value
    this.outputTarget.textContent = titleCase(inputValue)
    if (this.hasHiddenTarget) {
      this.hiddenTarget.value = titleCase(inputValue)
    }
  }
}
