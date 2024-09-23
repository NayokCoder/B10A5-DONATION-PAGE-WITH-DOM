function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInputText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document
  .getElementById("nowakhali-btn")
  .addEventListener("click", function (even) {
    even.preventDefault();

    const nowaKhali_Input = getInputValue("nowakhali-input");
    const nowaKhalDonation_Amount = getInputText("noakhali-total-donation");
    const myAmount = getInputText("my-amount");
    const totalDonation = nowaKhalDonation_Amount + nowaKhali_Input;
    const myRemainAmount = myAmount - nowaKhali_Input;
    document.getElementById("noakhali-total-donation").innerText =
      totalDonation;

    document.getElementById("my-amount").innerText = myRemainAmount;
  });

document.getElementById("feni-btn").addEventListener("click", function (even) {
  even.preventDefault();

  const feni_Input = getInputValue("feni-input");
  const feniDonation_Amount = getInputText("feni-total-donation");
  const myAmount = getInputText("my-amount");
  const totalDonation = feniDonation_Amount + feni_Input;
  const myRemainAmount = myAmount - feni_Input;
  document.getElementById("feni-total-donation").innerText = totalDonation;

  document.getElementById("my-amount").innerText = myRemainAmount;
});
