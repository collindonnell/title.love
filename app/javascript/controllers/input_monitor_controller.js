import ApplicationController from "controllers/application_controller"

export default class extends ApplicationController {
  static outlets = ["visibility"]

  inputChanged(event) {
    console.log("Input changed:", event.target.value)
    const hasText = event.target.value.trim().length > 0
    console.log(`visibilityOutlets: ${this.visibilityOutlets.length}`)
    this.visibilityOutlets.forEach((outlet) => {
      outlet.visibleValue = hasText
      console.log(`Visibility outlet updated: ${outlet.identifier} to ${hasText}`)
    })
  }
}
