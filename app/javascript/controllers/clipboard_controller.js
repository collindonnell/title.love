import { Controller } from "@hotwired/stimulus"
import { useSendToasts } from "mixins/use_send_toasts"

export default class extends Controller {
  static targets = ["source"]

  connect() {
    useSendToasts(this)
  }

  copy(event) {
    event.preventDefault()
    const text = (this.sourceTarget.value || this.sourceTarget.innerHTML).trim()

    navigator.clipboard.writeText(text).then(() => {
      this.dispatch("copy", { detail: { text } })
      this.sendToast("Copied!")
    }).catch((error) => {
      console.error("Failed to write to clipboard: ", error)
    })
  }
}
