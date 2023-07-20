it('should calculate the monthly rate', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }
});

it("handle high interest rate", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
});


describe("Loan Calculator", function () {
  it("should display error message for invalid input", function() {
    // Arrange
    const form = document.getElementById('calc-form');
    const amountInput = document.getElementById('loan-amount');
    const yearsInput = document.getElementById('loan-years');
    const rateInput = document.getElementById('loan-rate');
    const monthlyPaymentSpan = document.getElementById('monthly-payment');

    // Invalid input (negative amount)
    amountInput.value = -10000;
    yearsInput.value = 5;
    rateInput.value = 4.5;
    form.dispatchEvent(new Event('submit')); 

    // Check monthly payment is not calculated
    expect(monthlyPaymentSpan.textContent).toEqual('Invalid Input');
  });
});
