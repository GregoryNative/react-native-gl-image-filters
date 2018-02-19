const mixArrays = (arr1, arr2, m) =>
  arr1.map((v, i) => (1-m) * v + m * arr2[i]);

export default mixArrays;
