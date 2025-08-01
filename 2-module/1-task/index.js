function sumSalary(salaries) {
  let total = 0;
  for (let key in salaries) {
    const value = salaries[key];
    if (typeof value === 'number' && !isNaN(value) && isFinite(value)) {
      total += value;  
    }
  }
  return total;
}
