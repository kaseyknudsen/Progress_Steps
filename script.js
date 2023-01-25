const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//this brings all circles in as a node list (similar to an Array)
const circles = document.querySelectorAll(".circle");

//represents whatever circle is active
let currentActive = 1;

next.addEventListener("click", () => {
    
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    console.log(idx)
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  })

  const actives = document.querySelectorAll('.active')
  //this gives us the percentage of the active circles. You need to add the % because it needs a unit
  //need to subtract 1 otherwise the percentages will be too high
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
  console.log(progress.style.width)

  if(currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length ) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
