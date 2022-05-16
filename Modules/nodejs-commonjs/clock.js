// function (exports, require) {
  'use strict';

  class Clock {
    #render() {
      const now = new Date();
      console.log(now.toLocaleTimeString());
    }
    start() {
      setInterval(() => this.#render(), 1000);
    }
  }

  exports.Clock = Clock;
// }
