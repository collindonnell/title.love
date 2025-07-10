import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="save"
export default class SaveController extends Controller {
  static targets = ["input", "button"]

  connect() {
    this.updateButtonState()
  }

  updateButtonState() {
    const isEmpty = this.inputTarget.value.trim() === ""
    this.buttonTarget.style.display = isEmpty ? "none" : ""
  }
}
