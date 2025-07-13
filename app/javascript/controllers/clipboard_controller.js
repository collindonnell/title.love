import ApplicationController from "controllers/application_controller"

export default class extends ApplicationController {
  static targets = ["source"]

  copy() {
    const source = this.sourceTarget
    let text = ""

    // Determine the text to copy based on the source element type
    if (["INPUT", "TEXTAREA"].includes(source.tagName)) {
      text = source.value
    } else if (source.dataset.clipboardText) {
      // Use the clipboard-text data attribute if available
      text = source.dataset.clipboardText
    } else {
      text = source.innerText
    }
    navigator.clipboard.writeText(text.trim()).then(() => {
      this.dispatch("copied", {
        detail: { text },
        bubbles: true,
      })
    }).catch((error) => {
      console.error("Failed to write to clipboard: ", error)
      this.dispatch("copy-error", {
        detail: { error },
        bubbles: true,
      })
    })
  }
}
