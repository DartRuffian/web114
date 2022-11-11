// Name: William Grate
// Date: 11/8/22

// JavaScript Requirements
// document.getElementsByTagName("something3")
// document.getElementById("something5").classList
// document.querySelectorAll(".something6")
// while
// use JavaScript to modify imagesf
//     ==   +=
//     ===   !=   !==
//     ++    --   
//     >   <   >=   <=
//     &&   ||  DONE

// Uses: "use strict";
"use strict";

window.onload = function()
    {
        // console.log("Loaded JavaScript file")
        // // When the page loads, get the user's name and save it
        // window.user_name = window.prompt("Hi there, what's your name?", "");
        // // Assign userName to a property of the window object so that it can be accessed anywhere
        // window.alert(`Welcome, ${window.user_name}!`);
        // console.log(`User Name: ${window.user_name}`)

        // Set event listeners
        // Uses: .textContent, Concatenating using +
        // Math Events
        document.getElementById("addButton").addEventListener("click", function() {addNumResult.textContent="Your result is: " + add("addNumOne", "addNumTwo")});  // Add Form
        document.getElementById("subButton").addEventListener("click", function() {subNumResult.textContent="Your result is: " + subtract("subNumOne", "subNumTwo")});  // Subtract Form
        document.getElementById("otherButton").addEventListener("click", function() {otherNumResult.textContent="Your result is: " + otherOp("otherNumOne", "otherNumTwo", "operatorList")});  // Other Operations Form
        console.log("Math events created");

        // Image Question Events
        document.getElementById("quest_boat").addEventListener("change", check_boat_answer);  // Boat Question
        document.getElementById("quest_bird_0").addEventListener("keyup", check_bird_answer); // Both inputs for the bird question
        document.getElementById("quest_bird_1").addEventListener("keyup", check_bird_answer);
        console.log("Image events created");

        // Final check for all questions
        document.getElementById("ans_check_button").addEventListener("click", check_all_answers);
        console.log("Question event created");
    }


// Math Functions
function add(elOne, elTwo)
    {
        // Takes the ids of two HTML elements, adds their values, and returns the result
        // Uses: .value, const
        const numOne = parseInt(document.getElementById(elOne).value);
        const numTwo = parseInt(document.getElementById(elTwo).value);
        return numOne + numTwo; // Adding using +
    }

function subtract(elOne, elTwo)
    {
        // Takes the ids of two HTML elements, subtracts the second value from the first, and returns the result
        const numOne = parseInt(document.getElementById(elOne).value);
        const numTwo = parseInt(document.getElementById(elTwo).value);
        return numOne - numTwo;
    }

function getTotal(numOne, numTwo, op)
    {
        // Given two numbers and an operation, determine the result
        // Uses: Switch/Case statement
        let result;
        switch (op)
            {
                case "*":
                    result = numOne * numTwo;
                    break;
                case "/":
                    result = numOne / numTwo;
                    break;
                case "%":
                    result = numOne % numTwo;
                    break;
                case "^":
                    result = numOne ** numTwo;
                    break;
                default: break;
            }
        
        return result
    }

function getEnabledRadioButton(operatorList)
    {
        // Loop over a list of Radio Buttons, and return the value of the first enabled Radio Button
        // Define the operation variable, but don't assign a value yet
        let operation;

        // Use a for loop over the list of radio buttons
        // Uses: for loop
        for (const currButton of operatorList)
            {
                // If statement to check if the button checked
                if (currButton.checked)
                    {
                        // If the button is checked, assign the operation to the value of the current button and exit the loop
                        operation = currButton.value;
                        break;
                    }
            }
        // Return the value of the selected radio button
        // If no button is selected, this function will return undefined
        return operation;
    }

function otherOp(elOne, elTwo, operatorList)
    {
        // Takes two given numbers, a div containing radiobuttons
        // One of the radiobuttons has a value corresponding to a given operation

        // First convert the values of the two given element names to numbers
        let numOne = parseInt(document.getElementById(elOne).value);
        let numTwo = parseInt(document.getElementById(elTwo).value);

        // Get the list of RadioButtons by getting the element by the id, and then getting the .children property
        operatorList = document.getElementById(operatorList).children;
        console.log(operatorList); // HTMLCollection { 0: input, 1: input, 2: input, 3: input, length: 4, ...}

        // Call the getEnabledRadioButton function to find the first enabled one
        let operation = getEnabledRadioButton(operatorList);
        
        if (operation == undefined)
            {
                // If no button is selected
                return "Make sure to select one of the options above before clicking the button!";
            }

        // Finally, determine the result of the two numbers and the operation
        else return getTotal(numOne, numTwo, operation);
    }


// Image Question Functions
function check_boat_answer()
    {
        let answer_box = document.getElementById("quest_boat");
        let feedback_label = document.getElementById("ans_boat");

        // Check the value of the input box
        // Uses: ==,  ===, if / else if / else, .className
        if (parseInt(answer_box.value) === 4)
            {
                // Convert the user's input to an integer, and check if it is equal to three and of type int
                feedback_label.textContent = `Nice work ${window.user_name}!`;
                feedback_label.className = "q_correct";
            }

        else if (answer_box.value == undefined)
            {
                // User has not entered anything in the box
            }

        else
            {
                // User has entered a value, but not the correct value
                feedback_label.textContent = "Not quite, maybe you missed one?";
                feedback_label.className = "q_wrong";
            }
    }

function check_bird_answer()
    {
        let quest_0 = document.getElementById("quest_bird_0").value.toLowerCase();
        let quest_1 = document.getElementById("quest_bird_1").value.toLowerCase();
        let ans = document.getElementById("ans_bird");

        // Check the entered values
        // Uses: &&, !=
        if (quest_0 == "yellow" && quest_1 == "pink")
            {
                ans.textContent = `You got it ${window.user_name}!`
                ans.className = "q_correct";
            }
        else if ( (quest_0 == "yellow" || quest_1 == "pink") && (quest_0 != "yellow" || quest_1 != "pink"))
            {
                ans.textContent = "So close! One of your answers is correct but the other could use some work."
                ans.className = "q_wrong";
            }
        else if (quest_0 != undefined && quest_1 != undefined)
            {
                ans.textContent = "Double check your answers, it seems like they could both do with another look."
                ans.className = "q_wrong";
            }
    }


function check_all_answers()
    {
        const answers = document.querySelectorAll(".q_empty", ".q_wrong");
        if (answers.length >= 1)
            {
                ans_check_result.textContent = "It looks like you still have some unanswered or incorrect questions, try giving them another look.(Hint: Make sure that you use the calculator examples as well)"
            }
    }