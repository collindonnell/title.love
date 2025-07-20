import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["source"]

  copy(event) {
    event.preventDefault()
    const text = (this.sourceTarget.value || this.sourceTarget.innerHTML).trim()

    navigator.clipboard.writeText(text).then(() => {
      this.dispatch("copy", { detail: { text } })
    }).catch((error) => {
      console.error("Failed to write to clipboard: ", error)
    })
  }
}
