// function(exports, require) {
  'use strict';

  const exportsFromClock = require('./clock');

  const myClock = new exportsFromClock.Clock();
  myClock.start();

// }
