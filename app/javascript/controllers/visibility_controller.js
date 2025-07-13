import ApplicationController from "controllers/application_controller"

export default class extends ApplicationController {
  static targets = ["element"]
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
    this.elementTargets.forEach((el) => {
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
