const width = 100;
const height = 100;

setDocDimensions(width, height);

const finalLines = [];

const simpleStar = () => {
  return [
    [[40, 50], [60, 50]],
    [[50, 40], [50, 60]]
  ]
}

const crossStar = () => {
  return bt.rotate(
    simpleStar(),
    45
  )
}

bt.join(finalLines, simpleStar())
bt.join(finalLines, crossStar())

drawLines(finalLines);
