const a = 1
const b = 8
const c = 5

a === b && b===c && a===c ? console.log("les trois sont idantiques") : console.log("faux")

a === b || b===c || a===c || c===b ? console.log("deux sont identiques") : console.log("les trois sont pas identiques")


// avec des if


const a = 1
const b = 8
const c = 5

if (a === b && b===c && a===c){
  console.log("les trois pareil")
}
else if (a === b || b===c || a===c || c===b ) {
  console.log("les deix pareil")
}
else{
  console.log("les trois sont différent")
}
