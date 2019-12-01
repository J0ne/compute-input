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
    var patt = /\d*['+'|'\-'|'\*'|'\^']\d+$/;
    var str = e.target.value;
    var res = patt.test(str);
    if (res) {
      this.computeMode = true;
      this.computedValue = eval(str);
    } else {
      this.computeMode = false;
      this.text = e.target.value;
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
