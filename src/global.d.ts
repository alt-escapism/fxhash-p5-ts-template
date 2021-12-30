import * as _p5Global from "p5/global";
import module = require("p5");
export = module;
export as namespace p5;

declare global {
  function fxrand(): number;
  function fxpreview(): void;

  interface Window {
    setup(): void;
    draw(): void;
  }
}
