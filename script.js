// Resizing circle
let circle = document.getElementById("circle");
let root = document.documentElement;

const keepCircleACircle = () => {
  window.innerWidth < window.innerHeight
    ? root.style.setProperty("--circleDiameter", "100vw")
    : root.style.setProperty("--circleDiameter", "100vh");
};

window.addEventListener("load", keepCircleACircle);

window.addEventListener("resize", keepCircleACircle);

// ./Resizing Circle

// Adjusting Gradient

window.addEventListener("mousemove", () => {
  let squareDegree = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--squareDegree");

  let circleDegree = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--circleDegree");

  updateDegreeValue(squareDegree, false, "--squareDegree");
  updateDegreeValue(circleDegree, true, "--circleDegree");
});

const updateDegreeValue = (currentDegree, clockwiseBool, varName) => {
  let currentValue = parseInt(currentDegree.split("deg")[0]);
  // This is pretty janky ^^
  let newValue = clockwiseBool ? ++currentValue : --currentValue;
  root.style.setProperty(varName, newValue + "deg");
};

// ./Adjusting Gradient

/* 

http://almostcalm.com/

What's going on here?

Adjusting the gradient angle/degree based on the position of the mouse

Event to listen for mouse movement
Dynamiclly change degree of linear-gradient 

1. Just set up page
2. Create background div and circle div
3. Create gradient
4. Listen to the mouse
5. Updating styles based on position
6. Invert the circle


  **Big note**

  Position of the mouse/movement of the mouse doesn't matter, simply moving clockwise/counter clockwise when the mouse is moved. 
  
  JS is about done coolio

  Moving on to making the it responsive

  Main thing is keeping the circle a circle [i.e not an oval (duh)]

  When does it break?
    When the width becomes smaller than the height
    Make sure you check on load as well as resizing the window]

    Listen to the inner width and inner height
    when the width comes smaller than the height, make width & height = 100vw
  

    Post Notes:

      The gradient could be closer
      Gradient could rotate faster [factor in the speed of mouse movement, increment/decrement by more then one]

      Use one variable for the degrees, one negative one positive




  */
