// Data
let myname = document.getElementById("name")
let submit = document.getElementById("submit")
let thanks = document.getElementById("thanks")
let email = document.getElementById("Email")
let myp = document.getElementById("myp")
// Data
let array = []

function nam(){
    array.push(myname.value)


    if(email.value != '') {
        thanks.innerHTML = `Thanks, ${array[0]} We Will Call You .`
    }else{
        thanks.innerHTML = `Please Enter Your Email .`
    }
}