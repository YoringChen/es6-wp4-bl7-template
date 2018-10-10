class HelloWorld {
  constructor (msg) {
    this.msg = msg || 'hello world'
  }

  sayHelloWorld () {
    return this.msg
  }
}

export default HelloWorld
