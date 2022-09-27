export default function calculateCircleArea(radius) {
  const circleArea = Math.PI * Math.pow(radius, 2);

  return circleArea.toFixed(2);
}
