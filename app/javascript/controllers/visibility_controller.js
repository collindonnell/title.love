import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]
  static values = {
    visible: Boolean,
    class: { type: String, default: "hidden" }
  }

  connect() {
    this.update()
  }

  visibleValueChanged(newValue, oldValue) {
    this.update()
  }

  update() {
    this.itemTargets.forEach((el) => {
      el.classList.toggle(this.classValue, !this.visibleValue)
    })
  }

  show() {
    this.visibleValue = true
  }

  hide() {
    this.visibleValue = false
  }

  toggle() {
    this.visibleValue = !this.visibleValue
  }
}
