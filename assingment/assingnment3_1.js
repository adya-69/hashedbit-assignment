// Array of Indian states
let states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  
  // Function to check if a string starts with a vowel
  function Vowel(str) {
    // List of vowels
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    // Check if the first character is a vowel (case-insensitive)
    return vowels.includes(str.charAt(0).toUpperCase());
  }
  
  // Use filter to remove states starting with vowels
  let filteredStates = states.filter(state => !Vowel(state));
  
  console.log(filteredStates);
  