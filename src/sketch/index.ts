window.setup = function () {
  const seed = int(fxrand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);

  const size = Math.min(windowHeight, windowWidth);
  createCanvas(size, size);
  colorMode(HSL);
  noLoop();

  background(color(0, 0, 10));
};
