export class Clock {
  #render() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }
  start() {
    this.#render()
    setInterval(() => this.#render(), 1000);
  }
}
