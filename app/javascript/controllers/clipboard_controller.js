import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class ClipboardController extends Controller {
  static targets = [ "input" ]

  copy() {
    navigator.clipboard.writeText(this.inputTarget.value)
  }
}
