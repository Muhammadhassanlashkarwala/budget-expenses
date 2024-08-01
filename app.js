const budgetInput = document.getElementById('budgetInput')
const productInput = document.getElementById('productTitleInput')
const productCostInput = document.getElementById('productCostInput')
let totalBudget = document.querySelector('.totalBudget')
let Expanses = document.querySelector('.Expanses')
let Balance = document.querySelector('.Balance')
let orderList = document.getElementById('orderList')

// let cost = document.getElementById('cost')
const numberRegex = /\d/;

// let ol = document.getElementById('save')
let minus = 0 ;
let sum = 0 ;
const setBudget = document.getElementById('button1')
const checkAmount = document.getElementById('button2')

setBudget.addEventListener("click" , () =>{
    let budget = parseInt(budgetInput.value) ;
  if (isNaN(budget) || budget <= 0 ) {
    alert("Please enter a number")
    Swal.fire("Please enter a number");
    budgetInput.value = "" ;
  }
  else{

    minus = budget
    totalBudget.innerHTML = budget ;
    budgetInput.value = "" ;
  }
})
checkAmount.addEventListener("click" , ()=>{
    let productTitle = productInput.value ;
    let productCost = parseInt(productCostInput.value) ;
    if (isNaN(productCost) || productCost <= 0 ) {
        alert("please enter a positive number")
        productCostInput.value = "" ;
    }
    else if (productTitle == "" || numberRegex.test(productTitle)){
        alert("Please enter a valid product name")
        productTitle.value = "" ;
        
    }
    else{

        sum += productCost ;
        let currentBalance = minus - sum ;
        Expanses.innerHTML = sum ;
        Balance.innerHTML = currentBalance ;
        productInput.value = "" ;
        productCostInput.value = "" ;
         orderList.innerHTML += `
         <li>
         <p id="para">${productTitle}</p>
         <p id="cost">${productCost}</p>
         <button class="button3" id="button3"><i class="fa-solid fa-trash"></i></button>
          </li>
         `
let button3 = document.querySelectorAll("#button3");
button3.forEach(e => {
  e.addEventListener("click",()=>{
   console.log(e.parentNode);
   e.parentNode.remove();
  })
});
    }

});