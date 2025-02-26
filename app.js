const mortgageAmount = document.getElementById("mortgageAmount");
const interestRate = document.getElementById("interestRate");
const loanTerm = document.getElementById("loanTerm");
const submit = document.getElementById("submit");

const secondSection = document.querySelector(".secondSection");

const convertAnnualrateToMonthlyRate = () => {
  const convertToNumbers = Number(interestRate.value.trim());
  const divideby100 = convertToNumbers / 100;
  const divideby12 = (divideby100 / 12).toFixed(6);
  return divideby12;
};

const totalNumberofPayements = () => {
  const takeLoanTerm = Number(loanTerm.value.trim());
  const findNumberofPayements = takeLoanTerm * 12;
  return findNumberofPayements;
};

const useRate = () => {
  const takeMonthlyRate = Number(convertAnnualrateToMonthlyRate());
  const addOneToMonthlyRate = takeMonthlyRate + 1;
  return addOneToMonthlyRate;
};

const finalMortgagePayment = () => {
  const takeMonthlyAmount = Number(mortgageAmount.value.trim());
  const powMonthlyAmount = Math.pow(
    Number(useRate()),
    Number(totalNumberofPayements())
  );
  const numerator = Number(convertAnnualrateToMonthlyRate()) * powMonthlyAmount;
  const denominator = powMonthlyAmount - 1;
  const divideNumeratorDenominator = numerator / denominator;
  const multiplyByMortgageAmount =
    takeMonthlyAmount * divideNumeratorDenominator;
  return multiplyByMortgageAmount.toFixed(4);
};

/*
document.addEventListener("keypress", (e) => {
  if ((e.key = "Enter")) {
    const myFormLoanTerm = document.forms["myForm"]["loanTerm"].value.trim();
    const myFormInterestRate =
      document.forms["myForm"]["interestRate"].value.trim();
    const myFormMortgageAmount =
      document.forms["myForm"]["mortgageAmount"].value.trim();

    if (
      myFormLoanTerm == "" ||
      myFormInterestRate == "" ||
      myFormMortgageAmount == ""
    ) {
      alert("Enter a number 😡");
      return;
    } else if (
      isNaN(Number(myFormLoanTerm)) ||
      isNaN(Number(myFormInterestRate)) ||
      isNaN(Number(myFormMortgageAmount))
    ) {
      alert("Not a number! 🪲");
      return;
    } else {
      alternativeA();
    }
  } else {
    return;
  }
});
*/


submit.onclick = function (event) {
  event.preventDefault();
  const myFormLoanTerm = document.forms["myForm"]["loanTerm"].value.trim();
  const myFormInterestRate =
    document.forms["myForm"]["interestRate"].value.trim();
  const myFormMortgageAmount =
    document.forms["myForm"]["mortgageAmount"].value.trim();

  if (
    myFormLoanTerm == "" ||
    myFormInterestRate == "" ||
    myFormMortgageAmount == ""
  ) {
    alert("Enter a number 😡");
    return;
  } else if (
    isNaN(Number(myFormLoanTerm)) ||
    isNaN(Number(myFormInterestRate)) ||
    isNaN(Number(myFormMortgageAmount))
  ) {
    alert("Not a number! 🪲");
    return;
  } else {
    alternativeA();
  }
};

function alternativeA() {
  secondSection.innerHTML = ``;
  secondSection.classList.add("loadPage");
  document.querySelector(".loadPage").innerHTML = `<div class="load"></div>`;

  setTimeout(() => {
    secondSection.classList.remove("loadPage");
    secondSection.classList.add("leftSecond");
    secondSection.innerHTML = `
    <h1 class="resultsShowhere">Your results</h1>
    <p class="new">
                Your results are shown below based on the information you provided.To adjust the results, edit the form and click "calculate repayments" again.
    </p>
    <div class = 'finalresult'>
    <div className="boxOne">
    <p className="texted">Your monthly repayments</p>
        <p class="monthlyRepaymentsText">
        £${finalMortgagePayment()}
        </p>
        </div>
        <hr />
        <div className="boxTwo">
        <p class="texted">Total you'll repay over the term</p>
        <p>£539,322.94</p>
        </div>
    </div>
`;
  }, 6000);
}
