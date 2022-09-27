export function calculateSquareArea(sideLength) {
  const squareArea = sideLength ** 2;
  return squareArea.toFixed(2);
}

export function calculateSquarePerimeter(sideLength) {
  const squarePerimeter = sideLength * 4;
  return squarePerimeter.toFixed(2);
}
