class StringBuilder{
  #vales=""
  constructor(initialValue){
    this.#vales = initialValue
  }
  getValue(){
    return this.#vales
  }
  padEnd(str){
    this.#vales = this.#vales + str
  }
  padStart(str){
    this.#vales = str + this.#vales
  }
  padBoth(str){
    this.#vales = str + this.#vales + str

  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="