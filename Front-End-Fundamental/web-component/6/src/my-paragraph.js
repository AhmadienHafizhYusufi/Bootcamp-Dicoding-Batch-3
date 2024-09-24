class MyParagraph extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();

    this._color = this.getAttribute("color");
    this._size = this.getAttribute("size");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        Aku adalah custom element paragraf dengan atribut 
        color \`${this._color}\` dan 
        size \`${this._size}\`.
      `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Atribut ${name} diubah.`);
    console.log(`Nilai lama adalah ${oldValue}`);
    console.log(`Nilai baru adalah ${newValue}`);

    // Ubah nilai atribut yang telah disimpan
    this[`_${name}`] = newValue;

    // Render konten ulang
    this.render();
  }
}

customElements.define("my-paragraph", MyParagraph);
