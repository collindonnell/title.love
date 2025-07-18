import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    class: String,
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 300 },
  }

  connect() {
    // Apply animation class after delay
    setTimeout(() => {
      if (this.hasClassValue) {
        this.element.classList.add(this.classValue)
      }
      setTimeout(() => this.element.remove(), this.durationValue)
    }, this.delayValue)
  }
}
