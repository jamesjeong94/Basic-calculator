var numArray = [];
var result;
var parser = [];
var operation;
var currentDisplayBar = []
var displayPortal = document.getElementById("display")

function currentDisplay(){
  currentDisplayBar = parser.join("")
  displayPortal.innerHTML = currentDisplayBar
}

function clickBtn(clickedId){
  let userInput = checkInput(clickedId);
  if (userInput === "number"){
    parser.push(clickedId)
    currentDisplay()
  }
  if (userInput === "operation"){
    parser = Number(parser.join(""))
    numArray.push(parser)
    parser = []
    operation = clickedId
    calculation(operation)
  }
  if (userInput === "clearOne"){
    parser.pop()
    currentDisplay()
  }
  if (userInput === "clearAll"){
    parser = [];
    numArray = []
    operation = ""
    result = 0
    currentDisplay()
    showDisplay("clear")
  }
  if (userInput === "enter"){
    parser = Number(parser.join(""))
    numArray.push(parser)
    parser = []
    calculation(operation)
  }
}


function checkInput(clickedId){
  if (/[0-9.]/g.test(clickedId) === true){
    return "number"
  }
  if (clickedId === "add"
  ||clickedId === "subtract"
  ||clickedId === "multiply"
  ||clickedId === "divide"){
    return "operation"
  }
  if (clickedId === "clearOne"){
    return "clearOne"
  }
  if (clickedId === "clearAll"){
    return "clearAll"
  }
  if (clickedId === "enter"){
    return "enter"
  }
}

function showDisplay(input){
  displayPortal.innerHTML = input
}

function validityCheck(){
  numArray.forEach(num =>{
    console.log(num)
    if (isNaN(num) === true){
      alert(`Please enter a valid number. ${num} is not valid!`)
      numArray = [];
    }
  })
}

function calculation(operation){
  validityCheck()
  if (operation === "add"){
    result = numArray.reduce((a,b)=>{
      return a+b
    })
  }
  if (operation === "subtract"){
    result = numArray.reduce((a,b)=>{
      return a-b
    })
  }
  if (operation === "multiply"){
    result = numArray.reduce((a,b)=>{
      return a*b
    })
  }
  if (operation === "divide"){
    result = numArray.reduce((a,b)=>{
      return a/b
    })
  }
  console.log(result)
  showDisplay(result)
}