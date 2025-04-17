document.addEventListener('DOMContentLoaded', function(){
    const errorMessage3 = document.getElementById('errorMessage3');
    const errorMessage2 = document.getElementById('errorMessage2');
    const errorMessage1 = document.getElementById('errorMessage1');
    const resetButton = document.getElementById('reset-button');
    const tipAmountMoney = document.getElementById('tip-amount-money');
    let pillAmount = parseFloat(document.getElementById('bill-amount').value);


   
    // Make a loop to get all the tip buttons and add event listeners to them
    // const tipButtons = document.querySelectorAll('.tip-button');    const tip10 = document.getElementById('tip-10');   
    

    // Validate the bill amount input field.
    let billForm = document.getElementById('bill-form');
    billForm.addEventListener('submit', function(event){
        event.preventDefault();


      const pillAmount = document.getElementById('bill-amount');
      let pillValue = pillAmount.value;
        if(isNaN(pillValue)){
           errorMessage3.style.display = 'block';
           pillAmount.style.outline = '2px solid #ce7f69';
        }else if(!isNaN(pillValue)){
            errorMessage3.style.display = 'none';
            pillAmount.style.outline  = '2px solid #26c0ab'; 
        }
        if(pillValue === "" || pillValue <= 0){
            errorMessage2.style.display = 'block';
            pillAmount.style.outline = '2px solid #ce7f69';
        }else {
            errorMessage2.style.display = 'none';
            pillAmount.style.outline  = '2px solid #26c0ab'
        }

        return billForm = "";
       
    })

     
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            const tipButtons = parseFloat(button.getAttribute('data-tip'));
            calculateTip(tipButtons);
            
        })
    })



    // custom Bill Form

   const  customBillForm = document.querySelector('.customBillForm');
    customBillForm.addEventListener('submit', function(event){

        event.preventDefault();
        const customBillInput = document.getElementById('customTip');
        const customBill = customBillInput.value;

        if(isNaN(customBill)){
            errorMessage3.style.display = 'block';
            customBillInput.style.outline = '2px solid #ce7f69';
        }else{
            errorMessage3.style.display = 'none';
            customBillInput.style.outline = '2px solid #26c0ab';
        }

        calculateCustomTip(customBill);   
    })

    

    const numOfPeopleForm  = document.getElementById('numOfPeopleForm');
    numOfPeopleForm.addEventListener('submit', function(e){
        e.preventDefault();

    const numbrOfPeople = document.getElementById('NumOfpeople');
    const numbrOfPeopleValue = numbrOfPeople.value;

    if(isNaN(numbrOfPeopleValue)){
        errorMessage3.style.display = 'block';
        numbrOfPeople.style.outline = '2px solid #ce7f69';
        return;
    }else{
        errorMessage3.style.display = 'none';
        numbrOfPeople.style.outline = '2px solid #26c0ab';
    }

    if(numbrOfPeopleValue === '' || numbrOfPeopleValue < 0){
        errorMessage2.style.display = 'block';
        numbrOfPeople.style.outline = '2px solid #ce7f69';
        
    }else{
        errorMessage2.style.display = 'none';
        numbrOfPeople.style.outline = '2px solid #26c0ab';
    }

    // numOfPeople(numbrOfPeople);

    })

     
})


function calculateTip(tipButtons){
    const pillAmount = parseFloat(document.getElementById('bill-amount').value);
    const tip = (tipButtons / 100) * pillAmount;
    const tipAmountMoney = document.getElementById('tip-amount-money');
    tipAmountMoney.textContent = '$' + tip.toFixed(2);
}

//This function takes a placeholder parameter that is used the value user enters the input, and makes some sort of calculation.
function calculateCustomTip(custom){   
    const pillAmount = parseFloat(document.getElementById('bill-amount').value);
    const customTip = (custom / 100) * pillAmount;
    const tipAmountMoney = document.getElementById('tip-amount-money');
    tipAmountMoney.textContent = '$' + customTip.toFixed(2);
}  



// function numOfPeople(pillAmountInput, tipPercent){
//     let pillAmount = parseFloat(document.getElementById('bill-amount').value);
//     const totalMoney = document.querySelector('.total-money');
//     const numbrOfPeople = parseFloat(document.getElementById('NumOfpeople').value);


//         totalMoney.textContent = '$' + (pillAmount + pillAmountInput || tipPercent) / numbrOfPeople.toFixed(2);
// }




function reset(){
    const tipAmountMoney = document.getElementById('tip-amount-money');
    tipAmountMoney.textContent = '$0.00';

    const totalMoney = document.querySelector('.total-money');
    totalMoney.textContent = '$0.00';
}