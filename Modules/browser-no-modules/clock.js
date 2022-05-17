class Clock {
  #render() {
    const now = new Date();
    document.body.innerText = now.toLocaleTimeString();
  }
  start() {
    this.#render();
    setInterval(() => this.#render(), 1000);
  }
}
