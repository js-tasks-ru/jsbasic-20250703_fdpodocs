function ucFirst(str) {
  let str0 = str.trim().replace(/\s/g, '').toLowerCase();
  let str1 = str0.slice(0, 1).toUpperCase();
  let str2 = str0.slice(1);
  let str3 = str1 + str2;
return str3;
}