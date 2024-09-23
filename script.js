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
    const totalDonation = nowaKhalDonation_Amount + nowaKhali_Input;
    console.log(totalDonation);
    console.log(nowaKhalDonation_Amount);
  });
