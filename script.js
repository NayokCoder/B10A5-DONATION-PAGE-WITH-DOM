// Function
function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}
function getInputText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

//? NOWAKHALI CLICK EVENT
document
  .getElementById("nowakhali-btn")
  .addEventListener("click", function (even) {
    even.preventDefault();

    const nowaKhali_Input = getInputValue("nowakhali-input");
    // VALIDATION
    if (!isNaN(nowaKhali_Input) && nowaKhali_Input >= 0) {
      const nowaKhalDonation_Amount = getInputText("noakhali-total-donation");
      const myAmount = getInputText("my-amount");
      const totalDonation = nowaKhalDonation_Amount + nowaKhali_Input;
      const myRemainAmount = myAmount - nowaKhali_Input;
      document.getElementById("noakhali-total-donation").innerText =
        totalDonation;

      if (myRemainAmount < 0) {
        alert("INSUFFICIENT BALANCE! You don't have enough funds.");
      } else {
        // Update  new values
        document.getElementById("noakhali-total-donation").innerText =
          totalDonation;
        document.getElementById("my-amount").innerText = myRemainAmount;
        // Show the modal if balance is sufficient
        document.getElementById("my_modal_4").showModal();
      }
    } else {
      alert("INVALID NUMBER");
    }
    // creat Element part
    const donateHeading = document.getElementById("nh2").innerText;
    const history = document.getElementById("history");
    const creatDiv = document.createElement("div");
    const createHeading = document.createElement("h1");
    const createPara = document.createElement("p");

    createHeading.innerText = `${nowaKhali_Input} TK is ${donateHeading} `;

    // CSS Property
    creatDiv.classList.add(
      "p-8",
      "bg-base-100",
      "rounded-lg",
      "border-solid",
      "border-2",
      "border-gray-100",
      "mt-4"
    );
    createHeading.classList.add("font-bold", "text-xl");

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    createPara.innerText = `Donation made on: ${date} at ${time}`;

    creatDiv.appendChild(createHeading);
    creatDiv.appendChild(createPara);
    history.appendChild(creatDiv);
  });

//? feni CLICK EVENT
document.getElementById("feni-btn").addEventListener("click", function (even) {
  even.preventDefault();

  const feni_Input = getInputValue("feni-input");
  // VALIDATION
  if (!isNaN(feni_Input) && feni_Input >= 0) {
    const feniDonation_Amount = getInputText("feni-total-donation");
    const myAmount = getInputText("my-amount");
    const totalDonation = feniDonation_Amount + feni_Input;
    const myRemainAmount = myAmount - feni_Input;
    document.getElementById("feni-total-donation").innerText = totalDonation;

    if (myRemainAmount < 0) {
      alert("INSUFFICIENT BALANCE! You don't have enough funds.");
    } else {
      // Update  new values
      document.getElementById("feni-total-donation").innerText = totalDonation;
      document.getElementById("my-amount").innerText = myRemainAmount;
      // Show the modal if balance is sufficient
      document.getElementById("my_modal_4").showModal();
    }
  } else {
    alert("INVALID NUMBER");
  }
  // creat Element part
  const donateHeading = document.getElementById("fh2").innerText;
  const history = document.getElementById("history");
  const creatDiv = document.createElement("div");
  const createHeading = document.createElement("h1");
  const createPara = document.createElement("p");

  createHeading.innerText = `${feni_Input} TK is ${donateHeading} `;

  // CSS Property
  creatDiv.classList.add(
    "p-8",
    "bg-base-100",
    "rounded-lg",
    "border-solid",
    "border-2",
    "border-gray-100",
    "mt-4"
  );

  createHeading.classList.add("font-bold", "text-xl");

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
  createPara.innerText = `Donation made on: ${date} at ${time}`;

  creatDiv.appendChild(createHeading);
  creatDiv.appendChild(createPara);
  history.appendChild(creatDiv);
});

//? quota CLICK EVENT
document.getElementById("quota-btn").addEventListener("click", function (even) {
  even.preventDefault();

  const Quota_Input = getInputValue("quota-input");

  // VALIDATION
  if (!isNaN(Quota_Input) && Quota_Input >= 0) {
    const QuotaDonation_Amount = getInputText("quota-total-donation");
    const myAmount = getInputText("my-amount");

    const totalDonation = QuotaDonation_Amount + Quota_Input;
    const myRemainAmount = myAmount - Quota_Input;
    document.getElementById("quota-total-donation").innerText = totalDonation;

    if (myRemainAmount < 0) {
      alert("INSUFFICIENT BALANCE! You don't have enough funds.");
    } else {
      // Update  new values
      document.getElementById("quota-total-donation").innerText = totalDonation;
      document.getElementById("my-amount").innerText = myRemainAmount;
      // Show the modal if balance is sufficient
      document.getElementById("my_modal_4").showModal();
    }
  } else {
    alert("INVALID NUMBER");
  }

  // creat Element part
  const donateHeading = document.getElementById("qh2").innerText;
  const history = document.getElementById("history");
  const creatDiv = document.createElement("div");
  const createHeading = document.createElement("h1");
  const createPara = document.createElement("p");

  createHeading.innerText = `${Quota_Input} TK is ${donateHeading} `;

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const time = currentDate.toLocaleTimeString();
  createPara.innerText = `Donation made on: ${date} at ${time}`;

  // CSS Property
  creatDiv.classList.add(
    "p-8",
    "bg-base-100",
    "rounded-lg",
    "border-solid",
    "border-2",
    "border-gray-100",
    "mt-4"
  );
  createHeading.classList.add("font-bold", "text-xl");
  creatDiv.appendChild(createHeading);
  creatDiv.appendChild(createPara);
  history.appendChild(creatDiv);
});

document.getElementById("donation").addEventListener("click", function (even) {
  even.preventDefault();
  document.getElementById("history").classList.add("hidden");
  document
    .getElementById("history-home")
    .classList.remove("button-3", "text-white");
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("donation").classList.add("button-3", "text-white");
});
document
  .getElementById("history-home")
  .addEventListener("click", function (even) {
    even.preventDefault();
    document.getElementById("donation-section").classList.add("hidden");
    document
      .getElementById("donation")
      .classList.remove("button-3", "text-white");

    document.getElementById("history").classList.remove("hidden");
    document
      .getElementById("history-home")
      .classList.add("button-3", "text-white");
  });

// link to Blog
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
