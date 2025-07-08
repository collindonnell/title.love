import { Controller } from "@hotwired/stimulus"

export default class ClipboardController extends Controller {
  static targets = ["input", "source", "button"]

  connect() {
    this.updateButtonState()
  }

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.innerText.trim())
  }

  updateButtonState() {
    const isEmpty = this.inputTarget.value.trim() === ""
    this.buttonTarget.style.display = isEmpty ? "none" : ""
  }
}
