import { Controller } from "@hotwired/stimulus"
import { titleCase } from "title-case"

export default class TitleCaseController extends Controller {
  static targets = ["input", "output", "hidden"]

  updateOutput() {
    const inputValue = this.inputTarget.value
    this.outputTarget.textContent = titleCase(inputValue)
    if (this.hasHiddenTarget) {
      this.hiddenTarget.value = titleCase(inputValue)
    }
  }
}
