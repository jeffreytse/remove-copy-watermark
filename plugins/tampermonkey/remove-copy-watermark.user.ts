import rcw from '../../src';
import pkg from '../../package.json';

(function () {
  'use strict';
  console.log(
    `=== Tamper Monkey Plugin ===
    Name: ${pkg.name}
    Version: ${pkg.version}
    Homepage: ${pkg.homepage}`.replace(/^\s+/gm, '')
  );
  rcw.hijack();
})();
