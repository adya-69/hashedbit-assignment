function calculate(num1, num2, operator) {
    let result;
  
    switch (operator) {
    
      case '+':
        result = num1 + num2;
        break;
      case '-':

      
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 'Error: Invalid operator';
    }
  
    return result;
  }