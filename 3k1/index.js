//1
function factorial(n){
    if(n === 0 , n === 1){
        return 1
    } else{
        return n * factorial(n - 1);
    }
}
const number = 7
const answer = factorial(number)
console.log(answer);

//2
const text = 'My name is 457 Alex'
const fond = text.match(/\D/g)
console.log(fond);

//3
const text2 = "Hello\tWorld\nTest"
const fond2 = text2.match (/\s/g)
console.log(fond2);


//доп
function countChar(simbol, fond3) {
    let count = 0;
  
    for (let i = 0; i < simbol.length; i++) {
      if (simbol[i] === fond3) {
        count++;
      }
    }
  
    return count;
  }
  
  const text3 = 'loremipsumdolor';
  const fond4 = 'o';
  
  const result = countChar(text3, fond4);
  console.log(result);


  