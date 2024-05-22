const basePrices = {
  base: {
    experienced: {
      1: 1060, // One tooth missing
      2: 2120, // Two teeth missing
      3: 2500, // Three teeth missing
      4: 2800, // Four teeth missing
      5: 3100, // Five and more teeth missing
      6: 4500, // "lower arch teeth missing"
      7: 4500, // "upper arch teeth missing"
      8: 9000, // "both arch teeth missing"
    },
    inexperienced: {
      1: 980,
      2: 1960,
      3: 2260,
      4: 2560,
      5: 2860,
      6: 3597,
      7: 3597,
      8: 7294,
    },
  },
};

const optimalPremiumPrices = {
  base: basePrices,
  optimal: {
    experienced: {
      1: basePrices.base.experienced[1] + 120,
      2: basePrices.base.experienced[2] + 120,
      3: basePrices.base.experienced[3] + 120,
      4: basePrices.base.experienced[4] + 120,
      5: basePrices.base.experienced[5] + 120,
      6: basePrices.base.experienced[6] + 120,
      7: basePrices.base.experienced[7],
      8: basePrices.base.experienced[8],
    },
    inexperienced: {
      1: basePrices.base.inexperienced[1] + 120,
      2: basePrices.base.inexperienced[2] + 120,
      3: basePrices.base.inexperienced[3] + 120,
      4: basePrices.base.inexperienced[4] + 120,
      5: basePrices.base.inexperienced[5] + 120,
      6: basePrices.base.inexperienced[6],
      7: basePrices.base.inexperienced[7],
      8: basePrices.base.inexperienced[8],
    },
  },
  premium: {
    experienced: {
      1: basePrices.base.experienced[1] + 220,
      2: basePrices.base.experienced[2] + 220,
      3: basePrices.base.experienced[3] + 220,
      4: basePrices.base.experienced[4] + 220,
      5: basePrices.base.experienced[5] + 220,
      6: basePrices.base.experienced[6] + 220,
      7: basePrices.base.experienced[7],
      8: basePrices.base.experienced[8],
    },
    inexperienced: {
      1: basePrices.base.inexperienced[1] + 220,
      2: basePrices.base.inexperienced[2] + 220,
      3: basePrices.base.inexperienced[3] + 220,
      4: basePrices.base.inexperienced[4] + 220,
      5: basePrices.base.inexperienced[5] + 220,
      6: basePrices.base.inexperienced[6],
      7: basePrices.base.inexperienced[7],
      8: basePrices.base.inexperienced[8],
    },
  },
  teethPosition: {
    front: 150,
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

let selectedValues = new Array(slides.length).fill("");

const optionButtons = document.querySelectorAll(".options button");
optionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    selectTeeth(button);
  });
});

function selectTeeth(button) {
  // Get the index of the current slide
  const currentSlideIndex = getCurrentSlideIndex();

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
    selectedValues[currentSlideIndex] = button.dataset.value;

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

function showNextSlide() {
  // Check if an option is selected on the current slide
  const currentSlideButtons =
    slides[currentSlideIndex].querySelectorAll("button");
  let optionSelected = false;
  currentSlideButtons.forEach((button) => {
    if (button.classList.contains("selected")) {
      optionSelected = true;
    }
  });

  // If an option is not selected, prevent proceeding to the next slide
  if (!optionSelected) {
    alert("Please select an option before proceeding.");
    return;
  }

  // Hide the current slide
  slides[currentSlideIndex].style.display = "none";

  // Increment the slide index
  currentSlideIndex++;

  // Check if the index is out of bounds
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Reset to the first slide
  }

  // Show the next slide
  slides[currentSlideIndex].style.display = "block";

  // Check if this is the last slide
  if (currentSlideIndex === slides.length - 1) {
    // Hide the Next button
    document.querySelector(".next-button").style.display = "none";
    // Show the Submit button
    document.querySelector(".submit-button").style.display = "block";
  } else {
    // Show the Next button
    document.querySelector(".next-button").style.display = "block";
    // Hide the Submit button
    document.querySelector(".submit-button").style.display = "none";
  }

  storeSelectedButtonState();
  updateProgressBar();
}

// Function to get the index of the current slide
function getCurrentSlideIndex() {
  // Find the index of the visible slide
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
  const lines = document.querySelectorAll(".line");
  steps.forEach((step, index) => {
    if (index <= currentSlideIndex) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
    if (index < currentSlideIndex) {
      lines[index].classList.add("active");
    } else {
      // lines[index].classList.remove("active");
    }
  });
}

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
  const prevButton = document.querySelector(".prev-button");
  prevButton.style.display = "block";
  slides[currentSlideIndex].style.display = "none";
  // console.log(currentSlideIndex);

  if (currentSlideIndex === 4 || currentSlideIndex === 5) {
    console.log(currentSlideIndex);

    const progressBar = document.querySelector(".progress-bar");
    console.log(progressBar);
    progressBar.style.display = "none";
  }

  // Increment the slide index
  currentSlideIndex++;

  // Check if the index is out of bounds
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Reset to the first slide
  }

  // Show the next slide
  slides[currentSlideIndex].style.display = "block";

  // Check if this is the last slide
  if (currentSlideIndex === slides.length - 1) {
    // Hide the Next button
    document.querySelector(".next-button").style.display = "none";
    // Show the Submit button
    document.querySelector(".submit-button").style.display = "block";
  } else {
    // Show the Next button
    document.querySelector(".next-button").style.display = "block";
    // Hide the Submit button
    document.querySelector(".submit-button").style.display = "none";
  }
  storeSelectedButtonState();

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
    currentSlideIndex = slides.length - 1; // Set to the last slide
  }

  // Show the previous slide
  slides[currentSlideIndex].style.display = "block";
  storeSelectedButtonState();

  updateProgressBar();
}

// Attach click event listener to the Next button
document.querySelector(".next-button").addEventListener("click", showNextSlide);

// Attach click event listener to the Previous button
document.querySelector(".prev-button").addEventListener("click", showPrevSlide);

// Function to handle form submission
function submitForm() {
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
  // link.click();

  // // Remove the link from the body
  // document.body.removeChild(link);

  console.log("Data saved to data.csv");
}

storeSelectedButtonState();
