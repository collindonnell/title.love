import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static outlets = ["visibility"]

  inputChanged(event) {
    const hasText = event.target.value.trim().length > 0
    this.visibilityOutlets.forEach((outlet) => {
      outlet.visibleValue = hasText
    })
  }
}
