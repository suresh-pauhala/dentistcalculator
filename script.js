const basePrices = {
  basic: {
    1: 980,
    2: 1960,
    3: 2260,
    4: 2560,
    5: 2860,
    6: 3697,
    7: 3697,
    8: 7294,
  },
};
const optimalPremiumPrices = {
  classic: {
    1: 980,
    2: 1960,
    3: 2260,
    4: 2560,
    5: 2860,
    6: 3697,
    7: 3697,
    8: 7294,
  },
  eko: {
    6: 2440,
    7: 2440,
    8: 4880,
  },
  premium: {
    6: 4697,
    7: 4697,
    8: 9394,
  },
  exclusive: {
    6: 9720,
    7: 9720,
    8: 19440,
  },
  teethPosition: {
    front: 160,
    rear: 0,
  },
  teethExtraction: {
    option1: 50, // One tooth to extract
    option2: 100, // Two teeth to extract
    option3: 150, // Three teeth to extract
    option4: 180, // Four teeth to extract
    option5: 0, // "Unclear"
  },
};
const slides = document.querySelectorAll(".slide");
let selectedValues = {};

const optionButtons = document.querySelectorAll(".options button");
optionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    selectTeeth(button);
  });
});

function selectTeeth(button) {
  handleProgressBar();

  // Get the index of the current slide
  const currentSlideIndex = getCurrentSlideIndex();

  // if (slides[currentSlideIndex].className == "slide visibleBasedOnFullArch") {
  //   if (selectedValues.missingTeeth > 5) {
  //     slides[currentSlideIndex].style.display = "none";
  //     handleProgressBarMini();
  //   }
  // } else {
  //   handleProgressBar();
  // }

  // Check if the current slide index is within the valid range (0 to 4)
  if (currentSlideIndex >= 0 && currentSlideIndex <= 4) {
    // Find the parent options container of the current button
    const optionsContainer = button.closest(".options");

    // Remove highlighting from all buttons in the current slide
    const currentSlideButtons = optionsContainer.querySelectorAll("button");
    currentSlideButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Hide all selectImg elements
    const allSelectImg = optionsContainer.querySelectorAll(".selectImg");
    allSelectImg.forEach((img) => {
      img.style.display = "none";
    });

    // Highlight the selected button
    button.classList.add("selected");

    // Show the selectImg for the selected button
    const selectImg = button.querySelector(".selectImg");
    selectImg.style.display = "block";

    // Store the value of the selected option for the current slide
    switch (currentSlideIndex) {
      case 0:
        selectedValues["missingTeeth"] = button.dataset.value;
        break;
      case 1:
        selectedValues["teethPosition"] = button.dataset.value;
        break;
      case 2:
        selectedValues["totalTeethRemove"] = button.dataset.value;
        break;
      case 3:
        selectedValues["systemLevel"] = button.dataset.value;
        break;
      default:
        break;
    }
    // Output selected values (for testing)
    console.log("Selected values:", selectedValues);

    // Enable the next button and add the 'button-style' class
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  } else {
    console.log("Invalid slide index:", currentSlideIndex);
  }
}

// function showNextSlide() {
//   // Check if an option is selected on the current slide
//   const currentSlideButtons =
//     slides[currentSlideIndex].querySelectorAll("button");
//   let optionSelected = false;
//   currentSlideButtons.forEach((button) => {
//     if (button.classList.contains("selected")) {
//       optionSelected = true;
//     }
//   });

//   // If an option is not selected, prevent proceeding to the next slide
//   if (!optionSelected) {
//     alert("Please select an option before proceeding.");
//     return;
//   }

//   // Hide the current slide
//   slides[currentSlideIndex].style.display = "none";

//   // Increment the slide index
//   currentSlideIndex++;

//   // Check if the index is out of bounds
//   if (currentSlideIndex >= slides.length) {
//     currentSlideIndex = 0; // Reset to the first slide
//   }

//   // Show the next slide
//   slides[currentSlideIndex].style.display = "block";

//   // Check if this is the last slide
//   if (currentSlideIndex === slides.length - 1) {
//     // Hide the Next button
//     document.querySelector(".next-button").style.display = "none";
//     // Show the Submit button
//     document.querySelector(".submit-button").style.display = "block";
//   } else {
//     // Show the Next button
//     document.querySelector(".next-button").style.display = "block";
//     // Hide the Submit button
//     document.querySelector(".submit-button").style.display = "none";
//   }

//   storeSelectedButtonState();
//   updateProgressBar();
// }

// Function to get the index of the current slide
function getCurrentSlideIndex() {
  // Find the index of the visible slide
  console.log(slides);
  console.log(slides[1].className);

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") {
      console.log(i);
      return i;
    }
  }
}

// Get all the slides

// Index of the current slide
let currentSlideIndex = 0;
// Function to update the active step and line based on the current slide
// Function to update the active step and lines based on the current slide
function updateProgressBar() {
  const steps = document.querySelectorAll(".step");
  // const lines = document.querySelectorAll(".line");
  console.log("index=>", currentSlideIndex);
  switch (currentSlideIndex) {
    case 1:
      document.querySelector(".line1").style.display = "block";
      document.querySelector(".line1").classList.add("active");
      document.querySelector(".half-line1").style.display = "none";
      break;

    case 2:
      document.querySelector(".line1").style.display = "block";
      document.querySelector(".line1").classList.add("active");
      document.querySelector(".half-line1").style.display = "none";
      document.querySelector(".line2").style.display = "block";
      document.querySelector(".line2").classList.add("active");
      document.querySelector(".half-line2").style.display = "none";
      break;

    case 3:
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".line3").classList.add("active");
      document.querySelector(".half-line3").style.display = "none";
      break;
    // case 4:
    //   document.querySelector(".line4").style.display = "block";
    //   document.querySelector(".line4").classList.add("active");
    //   document.querySelector(".half-line4").style.display = "none";
    //   break;
    default:
      break;
  }
  steps.forEach((step, index) => {
    if (index <= currentSlideIndex) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
    // if (index < currentSlideIndex) {
    //   lines[index].classList.add("active");
    // } else {
    //   // lines[index].classList.remove("active");
    // }
  });
}

function updateProgressBarMini() {
  const steps = document.querySelectorAll(".step");
  // const lines = document.querySelectorAll(".line");
  console.log("index=>", currentSlideIndex);
  switch (currentSlideIndex) {
    case 1:
      document.querySelector(".line1").style.display = "block";
      document.querySelector(".line1").classList.add("active");
      document.querySelector(".half-line1").style.display = "none";
      break;

    case 2:
      document.querySelector(".line2").style.display = "block";
      document.querySelector(".line2").classList.add("active");
      document.querySelector(".half-line2").style.display = "none";
      break;

    case 3:
      document.querySelector(".line3").style.display = "block";
      document.querySelector(".line3").classList.add("active");
      document.querySelector(".half-line3").style.display = "none";
      break;
    // case 4:
    //   document.querySelector(".line4").style.display = "block";
    //   document.querySelector(".line4").classList.add("active");
    //   document.querySelector(".half-line4").style.display = "none";
    //   break;
    default:
      break;
  }
  steps.forEach((step, index) => {
    if (index <= currentSlideIndex) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
    // if (index < currentSlideIndex) {
    //   lines[index].classList.add("active");
    // } else {
    //   // lines[index].classList.remove("active");
    // }
  });
}

function handleProgressBar() {
  console.log("current=>", currentSlideIndex);
  switch (currentSlideIndex) {
    case 0:
      document.querySelector(".line1").style.display = "none";
      document.querySelector(".half-line1").style.display = "flex";
      break;

    case 1:
      document.querySelector(".line2").style.display = "none";
      document.querySelector(".half-line2").style.display = "flex";
      break;

    case 2:
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".half-line3").style.display = "flex";
      break;

    default:
      break;
  }
}

function handleProgressBarMini() {
  console.log("current=>", currentSlideIndex);
  switch (currentSlideIndex) {
    case 0:
      document.querySelector(".line1").style.display = "none";
      document.querySelector(".half-line1").style.display = "flex";
      break;

    case 1:
      document.querySelector(".line2").style.display = "none";
      document.querySelector(".half-line2").style.display = "flex";
      break;

    case 2:
      document.querySelector(".line3").style.display = "none";
      document.querySelector(".half-line3").style.display = "flex";
      break;

    default:
      break;
  }
}

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
  const prevButton = document.querySelector(".prev-button");
  prevButton.style.display = "block";
  prevButton.style.visibility = "unset";
  slides[currentSlideIndex].style.display = "none";

  prevButton.disabled = false;
  // console.log(currentSlideIndex);

  if (currentSlideIndex === 3 || currentSlideIndex === 4) {
    console.log(currentSlideIndex);

    const progressBar = document.querySelector(".progress-bar");
    console.log(progressBar);
    progressBar.style.display = "none";
  }

  if (currentSlideIndex === 3) {
    let systemselection = 0;

    // const experience =
    //   optimalPremiumPrices[selectedValues.systemLevel][
    //     selectedValues.experienceLevel
    //   ];

    // if (selectedValues.teethPosition == "front") {
    //   if (selectedValues.missingTeeth <= 5) {
    //     complexity = selectedValues.missingTeeth * teethPositionPrice;
    //   } else {
    //     complexity = 0;
    //   }
    // } else {
    //   complexity = 0;
    // }

    // if (selectedValues.missingTeeth <= 5) {
    //   if (selectedValues.systemLevel == "optimal") {

    //       systemselection = selectedValues.missingTeeth * 120;

    //   } else if (selectedValues.systemLevel == "premium") {

    //       systemselection = selectedValues.missingTeeth * 210;

    //   }
    // }

    let finalPrice = 0;

    console.log(finalPrice);

    let oneTeetMissing1 = 510;
    let oneTeetMissing2 = 470;

    let twoTeetMissing1 = 1020;
    let twoTeetMissing2 = 940;

    let threeTeetMissing1 = 1020;
    let threeTeetMissing2 = 1240;

    let fourTeetMissing1 = 1020;
    let fourTeetMissing2 = 1540;

    let fiveTeetMissing1 = 1320;
    let fiveTeetMissing2 = 1840;

    let withNeValue = 197;
    let withoutNeValue = 0;

    let addedFullArch = 0;

    const teethPositionPrice =
      optimalPremiumPrices.teethPosition[selectedValues.teethPosition];

    const teethExtractionPrice =
      optimalPremiumPrices.teethExtraction[selectedValues.totalTeethRemove];

    let complexity = 0;

    if (selectedValues.teethPosition == "front") {
      if (selectedValues.missingTeeth <= 5) {
        complexity = selectedValues.missingTeeth * teethPositionPrice;
      } else {
        complexity = 0;
      }
    } else {
      complexity = 0;
    }

    if (selectedValues.missingTeeth <= 5) {
      document.getElementById("secondSlide").innerHTML =
        "Sudėtingumas: <b>€" + complexity + "</b>";
      document.getElementById("teethExtraction").innerHTML =
        "Papildomas dantų šalinimas: <b> " + teethExtractionPrice + " € </b>";

      var switching = parseInt(selectedValues.missingTeeth);

      switch (switching) {
        case 1:
          console.log("inside", selectedValues.missingTeeth);

          document.getElementById(
            "firstSlide"
          ).innerHTML = `Dantų implantas: <b> ${oneTeetMissing1} € </b><br/> Cirkonio keramikos vainikėlis: <b> ${oneTeetMissing2} € </b>`;
          addedFullArch = oneTeetMissing1 + oneTeetMissing2;
          if (selectedValues.systemLevel == "optimal") {
            systemselection = 120;
          } else if (selectedValues.systemLevel == "premium") {
            systemselection = 210;
          }

          break;

        case 2:
          document.getElementById(
            "firstSlide"
          ).innerHTML = `2 Dantų implantas: <b> ${twoTeetMissing1} € </b><br/> Cirkonio keramikos vainikėlis: <b>${twoTeetMissing2} € </b>`;
          addedFullArch = twoTeetMissing1 + twoTeetMissing2;
          if (selectedValues.systemLevel == "optimal") {
            systemselection = 2 * 120;
          } else if (selectedValues.systemLevel == "premium") {
            systemselection = 2 * 210;
          }

          break;

        case 3:
          console.log("inside", selectedValues.missingTeeth);
          document.getElementById(
            "firstSlide"
          ).innerHTML = `2 Dantų implantas: <b> ${threeTeetMissing1} € </b><br/> Cirkonio keramikos vainikėlis: <b>${threeTeetMissing2} € </b>`;
          addedFullArch = threeTeetMissing1 + threeTeetMissing2;
          if (selectedValues.systemLevel == "optimal") {
            systemselection = 2 * 120;
          } else if (selectedValues.systemLevel == "premium") {
            systemselection = 2 * 210;
          }

          break;

        case 4:
          document.getElementById(
            "firstSlide"
          ).innerHTML = `2 Dantų implantas:<b> ${fourTeetMissing1} € </b><br/> Cirkonio keramikos vainikėlis: <b>${fourTeetMissing2} € </b>`;
          addedFullArch = fourTeetMissing1 + fourTeetMissing2;
          if (selectedValues.systemLevel == "optimal") {
            systemselection = 2 * 120;
          } else if (selectedValues.systemLevel == "premium") {
            systemselection = 2 * 210;
          }

          break;

        case 5:
          console.log("inside", selectedValues.missingTeeth);

          document.getElementById(
            "firstSlide"
          ).innerHTML = `3 Dantų implantas:<b> ${fiveTeetMissing1} €</b><br/> Cirkonio keramikos vainikėlis:<b> ${fiveTeetMissing2} € </b>`;

          addedFullArch = fiveTeetMissing1 + fiveTeetMissing2;
          if (selectedValues.systemLevel == "optimal") {
            systemselection = 3 * 120;
          } else if (selectedValues.systemLevel == "premium") {
            systemselection = 3 * 210;
          }

          break;
        default:
          "";
      }
      console.log("in less than 5");
      document.getElementById("lastSlide").innerHTML =
        "Implantų sistemos lygis: <b>" + systemselection + " € </b>";
      finalPrice =
        parseInt(addedFullArch) +
        parseInt(systemselection) +
        parseInt(complexity) +
        parseInt(teethExtractionPrice);
      document.getElementById("total").innerHTML =
        "VISO: <b>" + finalPrice + " € </b>";
    } else {
      const systemSelectionFullArch =
        optimalPremiumPrices[selectedValues.systemLevel][
          selectedValues.missingTeeth
        ];
      console.log(
        "systemSelectionFullArch value is: ",
        systemSelectionFullArch
      );
      document.getElementById(
        "firstSlide"
      ).innerHTML = `Viso žandikaulio protezavimas:<b> ${systemSelectionFullArch} €</b>`;
      if (selectedValues.totalTeethRemove === "ne") {
        document.getElementById("teethExtraction").innerHTML =
          "Papildomas dantų šalinimas: <b> -" + withNeValue + " € </b>";

        finalPrice = systemSelectionFullArch - withNeValue;
        document.getElementById("total").innerHTML =
          "VISO: <b> €" + finalPrice + "</b>";
      } else {
        document.getElementById("teethExtraction").innerHTML =
          "Papildomas dantų šalinimas: <b> " + withoutNeValue + " € </b>";

        finalPrice = systemSelectionFullArch + withoutNeValue;
        document.getElementById("total").innerHTML =
          "VISO: <b> €" + finalPrice + "</b>";
      }
    }
    // document.getElementById("total").innerHTML =
    //   "VISO: <b> €" + finalPrice + "</b>";
    document.getElementById("text").innerHTML =
      "Pateikiama kaina preliminari ir gali keistis priklausomai nuo Jūsų individualios situacijos.";
  }

  // Increment the slide index
  currentSlideIndex++;

  // Check if the index is out of bounds
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Reset to the first slide
  }

  // Show the next slide
  // slides[currentSlideIndex].style.display = "block";

  if (slides[currentSlideIndex].className == "slide visibleBasedOnFullArch") {
    if (selectedValues.missingTeeth > 5) {
      console.log("inside if");
      slides[currentSlideIndex].style.display = "none";

      currentSlideIndex++;

      slides[currentSlideIndex].style.display = "block";
    } else {
      console.log("in else");
      slides[currentSlideIndex].style.display = "block";
    }
  } else {
    console.log("in outer else");
    slides[currentSlideIndex].style.display = "block";
  }

  // Check if this is the last slide
  if (currentSlideIndex === slides.length - 2) {
    // Hide the Next button
    document.querySelector(".next-button").style.display = "none";
    document.querySelector(".prev-button").style.display = "none";
    // document.querySelector(".buttton-style").style.width = "50%";

    // Show the Submit button
    document.getElementById("submit").style.display = "block";
    document.getElementById("prevlast").style.display = "block";
  } else {
    // Show the Next button
    // document.querySelector(".next-button").style.display = "block";
    // Enable the next button and add the 'button-style' class
    const nextButton = document.querySelector(".next-button");
    nextButton.display = "block";
    nextButton.disabled = true;
    nextButton.classList.remove("button-style");
    document.querySelector(".prev-button").style.display = "block";
    // Hide the Submit button
    document.getElementById("submit").style.display = "none";
    document.getElementById("prevlast").style.display = "none";
  }
  if (currentSlideIndex === slides.length - 1) {
    // Hide the Next button
    console.log(slides.length);
    document.querySelector(".next-button").style.display = "none";
    document.querySelector(".prev-button").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("prevlast").style.display = "none";
  }

  if (currentSlideIndex === 2) {
    console.log("inside third: ", currentSlideIndex);

    if (selectedValues.missingTeeth > 5) {
      document.querySelector(".visibleThirdSlideTwo").style.display = "none";
      document.querySelector(".visibleThirdSlideOne").style.display = "block";
    }
    if (selectedValues.missingTeeth <= 5) {
      document.querySelector(".visibleThirdSlideOne").style.display = "none";
      document.querySelector(".visibleThirdSlideTwo").style.display = "block";
    }
  }
  if (currentSlideIndex === 3) {
    console.log("inside fourth: ", currentSlideIndex);

    if (selectedValues.missingTeeth > 5) {
      document.querySelector(".visibleFourthSlideTwo").style.display = "none";
      document.querySelector(".visibleFourthSlideOne").style.display = "block";
    }
    if (selectedValues.missingTeeth <= 5) {
      document.querySelector(".visibleFourthSlideOne").style.display = "none";
      document.querySelector(".visibleFourthSlideTwo").style.display = "block";
    }
  }

  storeSelectedButtonState();

  let selectedValuesLength = selectedValues.length;

  if (selectedValues.systemLevel) {
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  }

  updateProgressBar();
}

function storeSelectedButtonState() {
  const buttons = document.querySelectorAll(".options button");
  slides.forEach((slide, index) => {
    const slideValues = selectedValues[index];
    const slideButtons = slide.querySelectorAll("button");
    slideButtons.forEach((button) => {
      if (button.dataset.value === slideValues) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  });
}

// Function to show the previous slide
function showPrevSlide() {
  // Hide the current slide
  slides[currentSlideIndex].style.display = "none";
  // if (slides[currentSlideIndex] <= 0) {
  //   const prevButton = document.querySelector(".prev-button");
  //   prevButton.style.display = "none";
  // }
  // Decrement the slide index
  currentSlideIndex--;

  // Check if the index is out of bounds
  if (currentSlideIndex < 0) {
    currentSlideIndex = 0; // keep to the first slide itself
    console.log("test ", currentSlideIndex);
  }

  // Show the previous slide
  // slides[currentSlideIndex].style.display = "block";

  if (slides[currentSlideIndex].className == "slide visibleBasedOnFullArch") {
    if (selectedValues.missingTeeth > 5) {
      console.log("inside if");
      slides[currentSlideIndex].style.display = "none";

      currentSlideIndex--;

      slides[currentSlideIndex].style.display = "block";
    } else {
      console.log("in else");
      slides[currentSlideIndex].style.display = "block";
    }
  } else {
    console.log("in outer else");
    slides[currentSlideIndex].style.display = "block";
  }

  storeSelectedButtonState();

  if (currentSlideIndex === slides.length - 2) {
    // Hide the Next button
    document.querySelector(".next-button").style.display = "none";
    document.querySelector(".prev-button").style.display = "none";
    // document.querySelector(".buttton-style").style.width = "50%";

    // Show the Submit button
    document.getElementById("submit").style.display = "block";
    document.getElementById("prevlast").style.display = "block";
  } else {
    // Show the Next button
    // document.querySelector(".next-button").style.display = "block";
    // Enable the next button and add the 'button-style' class

    const nextButton = document.querySelector(".next-button");
    nextButton.style.display = "block";
    nextButton.disabled = true;
    nextButton.classList.remove("button-style");
    document.querySelector(".prev-button").style.display = "block";
    // Hide the Submit button
    document.getElementById("submit").style.display = "none";
    document.getElementById("prevlast").style.display = "none";
    console.log(nextButton.display);
    console.log(nextButton.style);
  }
  if (currentSlideIndex === slides.length - 1) {
    // Hide the Next button
    //console.log(slides.length);
    document.querySelector(".next-button").style.display = "none";
    document.querySelector(".prev-button").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("prevlast").style.display = "none";
  }

  let selectedValuesLength = selectedValues.length;
  if (selectedValues.missingTeeth) {
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  }
  if (selectedValues.systemLevel) {
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  }

  if (selectedValues.teethPosition) {
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  }
  if (selectedValues.totalTeethRemove) {
    const nextButton = document.querySelector(".next-button");
    nextButton.disabled = false;
    nextButton.classList.add("button-style");
  }

  updateProgressBar();
}

// Attach click event listener to the Next button
document.querySelector(".next-button").addEventListener("click", showNextSlide);

// Attach click event listener to the Previous button
document.querySelector(".prev-button").addEventListener("click", showPrevSlide);

// Function to handle form submission
function submitForm() {
  // go to next slide

  event.preventDefault();

  // Get the input elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("errorMsg");

  // Clear previous error messages
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");

  // Validate the inputs
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    isValid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("error");
    isValid = false;
  }

  // If all inputs are valid, proceed with form submission or further processing
  if (isValid) {
    errorMsg.textContent = "";
    showNextSlide();
    // You can add your form submission logic here
  } else {
    nameInput.placeholder = "Šis laukas būtinas";
    emailInput.placeholder = "Neteisingas el. pašto formatas";
    errorMsg.textContent = "Formoje aptikta klaidų";
  }

  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Construct CSV content from selected values
  const csvContent = selectedValues.join(",") + "\n";

  // Create a Blob object with the CSV content
  const blob = new Blob([csvContent], { type: "text/csv" });

  // Create a link element
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);

  // Set the file name
  // link.download = "data.csv";

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger a click event on the link to start the download
  link.click();

  // // Remove the link from the body
  document.body.removeChild(link);

  console.log("Data saved to data.csv");
}

storeSelectedButtonState();
