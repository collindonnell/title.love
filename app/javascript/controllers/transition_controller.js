import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { delay: Number }
  static classes = ["appear", "vanish"]

  connect() {
    this.element.addEventListener("transistioned", () => {
      console.log("transition complete")
    })

    this.element.classList.add(...this.vanishClasses)
    this.element.classList.add(...this.appearClasses)

    setTimeout(() => {
      this.element.classList.remove(...this.appearClasses)
    }, this.delayValue)
  }
}
