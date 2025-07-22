import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["template"]
  static values = { delay: { Number, default: 800 } }
  static classes = ["appear", "vanish"]

  connect() {
    console.log("Toasts controller connected")
  }

  displayToast(event) {
    if (!this.hasTemplateTarget) { return }

    let toastElement = this.templateTarget.content.cloneNode(true).firstElementChild;
    if (!toastElement) {
      return
    }

    this.element.appendChild(toastElement)
    toastElement.querySelector(".toast-content").textContent = event.detail.content
    toastElement.classList.add(...this.defaultVanish())
    toastElement.classList.add(...this.defaultAppear())

    toastElement.addEventListener("transitionend", () => {
      toastElement.remove()
    })

    setTimeout(() => {
      toastElement.classList.remove(...this.defaultAppear())
    }, this.delayValue)
  }

  defaultVanish() {
    return ["toast", "toast-top", "toast-center", "invisible", "opacity-0", "scale-50", "transition", "delay-150", "duration-500", "ease-in-out"]
  }

  defaultAppear() {
    return ["visible", "opacity-100", "scale-100"]
  }
}
