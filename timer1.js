const array = process.argv.slice(2);
const beep = function(delay) {
  setTimeout(() => { // our time out
    process.stdout.write('beep\n')   // types the output in a single line
  }, delay * 1000)
}

for (element of array) {
  if(!isNaN(element) && element > 0 && element !== "" ) {      
      beep(element)    
  }  

}




