class AwesomeComponent extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();

    console.log("Constructor.");
  }

  connectedCallback() {
    console.log("Custom element ditambahkan ke halaman.");
    this.innerHTML = "Aku adalah konten yang akan tampil.";
  }

  disconnectedCallback() {
    console.log("Custom element disingkirkan dari halaman.");
  }

  adoptedCallback() {
    console.log("Custom element dipindahkan ke halaman.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} telah diubah.`);
  }
}

customElements.define("awesome-component", AwesomeComponent);
