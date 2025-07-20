import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { delay: { Number, default: 800 } }
  static classes = ["appear", "vanish"]

  connect() {
    this.element.addEventListener("transitionend", () => {
      console.log("transition complete")
    })

    this.element.classList.add(...this.defaultVanish())
    this.element.classList.add(...this.defaultAppear())

    setTimeout(() => {
      this.element.classList.remove(...this.defaultAppear())
    }, this.delayValue)
  }

  defaultVanish() {
    return ["invisible", "opacity-0", "transition", "delay-150", "duration-500", "ease-in-out"] 
  }

  defaultAppear() {
    return ["visible", "opacity-100"]
  }
}
