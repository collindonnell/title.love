import { Controller } from "@hotwired/stimulus"
import { titleCase } from "title-case"

// Connects to data-controller="title-case"
export default class TitleCaseController extends Controller {
  static targets = ["input", "output"]

  updateOutput() {
    const inputValue = this.inputTarget.value
    this.outputTarget.textContent = titleCase(inputValue)
  }
}
