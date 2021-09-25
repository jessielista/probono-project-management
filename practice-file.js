// console.log('hello world')


// reviewing how to print items in an array
// let contactArr = [ "Jessica", 'jessica@gmail.com' ]

// for (let i = 0; i < contactArr.length; i++) {
//    console.log(contactArr[i])
// }

// so to print the


let contactObj = [{'name':'Jessica'}, {'email': 'jessica@gmail.com'}]

for (let i = 0; i < contactObj.length; i++) {
  // console.log(contactObj[i].name + " : " + contactObj[i].value)
  console.log(Object.keys(contactObj[i]) + ' : ' + Object.values(contactObj[i]))
}

// console.log(Object.values(contactObj[0]))
// console.log(Object.keys(contactObj[1]))
// console.log(Object.values(contactObj[1]))


