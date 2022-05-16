class Clock {
  #render() {
    const now = new Date();
    document.body.innerText = now.toLocaleTimeString();
  }
  start() {
    setInterval(() => this.#render(), 1000);
  }
}
