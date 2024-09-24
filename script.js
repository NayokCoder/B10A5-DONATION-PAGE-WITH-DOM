<<<<<<< HEAD
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
    const donateHeading = document.getElementById("nh2");
    const history = document.getElementById("history");
    const creatDiv = document.createElement("div");
    const createHeading = document.createElement("h1");
    const createPara = document.createElement("p");

    createHeading.innerText = `${nowaKhalDonation_Amount} TK is ${donateHeading} `;
    console.log(createHeading);
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    createPara.innerText = `Donation made on: ${date} at ${time}`;
    creatDiv.appendChild(createHeading);
    creatDiv.appendChild(createPara);
    history.appendChild(creatDiv);
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

document.getElementById("quota-btn").addEventListener("click", function (even) {
  even.preventDefault();

  const Quota_Input = getInputValue("quota-input");
  console.log(Quota_Input);
  const QuotaDonation_Amount = getInputText("quota-total-donation");
  console.log(QuotaDonation_Amount);
  const myAmount = getInputText("my-amount");
  const totalDonation = QuotaDonation_Amount + Quota_Input;
  const myRemainAmount = myAmount - Quota_Input;
  document.getElementById("quota-total-donation").innerText = totalDonation;

  document.getElementById("my-amount").innerText = myRemainAmount;
});
=======
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
>>>>>>> bdcbe7f45ac063dd3f206218552b0e3a7163b01b
