function getMinMax(str) {
  const parts = str.split(' ');
  const numbers = parts
    .map(item => parseFloat(item))   
    .filter(num => !isNaN(num));   
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
