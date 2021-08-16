
  for (let i = 2; i < process.argv.length; i++) {
    if(!process.argv === Number || process.argv <+ 0 || process.argv === "" ) {
      return;
    }
    let delay = i * process.argv.length
    setTimeout(() => { // our time out
  console.log('c')   // types the output in a single line
  }, delay) 

  }





// // let input = process.argv;

// // for (let i = 0; i < input.length; i++) {
// //  console.log('\x07')
  
// // }

// //   for (let i = 0; i < process.argv.length; i++) {
// //     let delay = i * process.argv
// //     setTimeout(() => { // our time out
// //    process.stdout.write('\x07')    // types the output in a single line
// //   }, delay) 
// // }


// setTimeout(() => {
//   console.log('hello')
// }, process.argv)
