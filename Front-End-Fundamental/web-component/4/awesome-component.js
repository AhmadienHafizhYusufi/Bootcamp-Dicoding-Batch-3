class AwesomeComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = "Aku adalah konten yang akan tampil.";
  }
}

customElements.define("awesome-component", AwesomeComponent);
