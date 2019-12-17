// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
export default class ComputeInput extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      computeMode: { type: Boolean },
      computedValue: { type: Number }
    };
  }

  constructor() {
    super();
    this.text = "";
    this.computeMode = false;
    this.computedValue = 0;
  }

  static get styles() {
    return css`
      input {
        background-color: #fff;
      }
    `;
  }
  computeValue(e) {
    var pattern = /^[\d.]+['+'|'\-'|'\*'|'\^'][\d.]+$/;
    var input = e.target.value;
    var isComputable = pattern.test(input);
    // compute if true
    if (isComputable) {
      this.computeMode = true;
      this.computedValue = eval(input);
    } else {
      this.computeMode = false;
      // if not, just use the input as is
      this.text = input;
    }
  }
  setValue() {
    if (this.computeMode) {
      this.text = this.computedValue;
    }
  }

  render() {
    return html`
      <input
        type="text"
        .onchange=${() => this.setValue()}
        .value=${this.text}
        .onkeyup=${e => this.computeValue(e)}
      />
    `;
  }
}
if (!window.customElements.get("compute-input")) {
  window.customElements.define("compute-input", ComputeInput);
}
