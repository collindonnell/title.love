import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["element"]
  static values = {
    visible: Boolean,
    class: { type: String, default: "hidden" }
  }

  connect() {
    this.update()
  }

  visibleValueChanged(newValue, oldValue) {
    console.log("visibility changed")
    this.update()
  }

  update() {
    this.elementTargets.forEach((el) => {
      el.classList.toggle(this.classValue, !this.visibleValue)
      console.log("Update visibility ", el.id)
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
