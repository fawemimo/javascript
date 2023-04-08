const formCalc = document.querySelector('#loan-form')

// Add Listener to form
formCalc.addEventListener('submit', loaderResults, false);

// Loading 
function loaderResults(e){
    e.preventDefault();

    // Hide the Result
    const results = document.querySelector('#results');
    results.style.display = 'none';

    // Show the Result
    const loading = document.querySelector('#loading');
    loading.style.display = 'block';

    setTimeout(calculateResults, 2000)
}

function calculateResults(){
    // GET THE VARIABLES
    const $amountInput = document.querySelector('#amount');
    const $interestInput = document.querySelector('#interest');
    const $yearsInput = document.querySelector('#years');
    const $monthlyPaymentInput = document.querySelector('#monthly-payment');
    const $totalPaymentInput = document.querySelector('#total-payment');
    const $totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat($amountInput.value);
    const calculatedInterest = parseFloat($interestInput.value) / 100 / 12;
    const calculatedPayments = parseFloat($yearsInput.value) * 12;

    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1)
    
    if(isFinite(monthly)){
        $monthlyPaymentInput.value = monthly.toFixed(2)
        $totalPaymentInput.value = (monthly * calculatedPayments).toFixed(2);
        $totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

         // show the Result
        const results = document.querySelector('#results');
        results.style.display = 'block';

        // Hide the Result
        const loading = document.querySelector('#loading');
        loading.style.display = 'none';


    } else{
        showError("Please check well")
    }

    console.log('Calculating....');
}

// Show error
function showError(error){
     // show the Result
     const results = document.querySelector('#results');
     results.style.display = 'none';

     // Hide the Result
     const loading = document.querySelector('#loading');
     loading.style.display = 'none';

    const errorDiv = document.createElement('div');

    // Gt element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger'

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);
    
    // clear error
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}