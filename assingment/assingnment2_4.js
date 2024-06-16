function sumOfProducts(n1, n2) {
    
    let str1 = n1.toString();
    let str2 = n2.toString();
 
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
  
    let minLength = Math.min(str1.length, str2.length);
    let sum = 0;
  
    for (let i = 0; i < minLength; i++) {
      sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
  
    return sum;
  }