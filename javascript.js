var registerForm = document.querySelector(".registerForm");
var amount;
var currency;
registerForm.onsubmit = function(event){
  event.preventDefault();


  var selectElement =document.getElementsByName('exchange')[0];
  currency = selectElement.options[selectElement.selectedIndex].value;
  
  amount = document.getElementsByName('amount')[0].value;
  console.log(amount);
  
  
  if (currency == 'dollar'){
    amount = amount * 3.48;
  }else if (currency == 'dinar'){
    amount = amount * 5;
  }else{
    amount = amount;
  }

  document.querySelector(".result").innerHTML = amount;
}