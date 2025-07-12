import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animation"
export default class extends Controller {
  static values = {
    class: String,
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 300 },
    timingFunction: { type: String, default: "ease" }
  }

  connect() {
    if (this.hasDurationValue || this.hasTimingFunctionValue) {
      this.element.style.transition = `${this.durationValue}ms ${this.timingFunctionValue}`
    }
    
    // Apply animation class after delay
    setTimeout(() => {
      if (this.hasClassValue) {
        this.element.classList.add(this.classValue)
        console.log(`Animation class "${this.classValue}" added to element.`)
      }
      setTimeout(() => this.element.remove(), this.durationValue)
    }, this.delayValue)
  }
}
