// Todo List

const appendingNodeChild = (childElement, parentElement) => { // Function for appending child to its parent element node
    childElement.forEach(eachChild => {
        parentElement.appendChild(eachChild);
    });
}


const todoHeading = document.createElement("h3"); // todo heading 
todoHeading.className = "todo-heading";
todoHeading.textContent = "To-Do Lists";


const todoInput = document.createElement("input"); // todo input
todoInput.className = "todo-input";

const todoBtn = document.createElement("button"); // todo button
todoBtn.className =  "todo-btn";
todoBtn.id = "submit-btn";
todoBtn.textContent = "Add List";
todoBtn.type = "submit";


const todoHeadingContainer = document.createElement("div"); // container for heading, input, button
todoHeadingContainer.classList.add("todo-headingContainer");

appendingNodeChild([todoHeading, todoInput, todoBtn], todoHeadingContainer); // append child into its todoheadingcontainer parent node element

const todoContainer = document.createElement("div"); // todo container to wrap the input container & enter list container
todoContainer.className = "todo-container";

const enterlistsWrapper = document.createElement("div"); // todo enter lists container/wrapper
enterlistsWrapper.className = "enterlist-wrapper";

appendingNodeChild([todoHeadingContainer, enterlistsWrapper], todoContainer); // append child into its todoContainer parent node element


const btnClick = () => {  // function for event listener to enter list
    
    const textContainer = document.createElement("div"); // todo each list wrapper
    textContainer.classList.add("text-container");

    const inputValue = todoInput.value; //assingning input value in variable

    if (inputValue.trim() == "") { // checking for blank/null input
        todoInput.placeholder = "Enter something !!!";
    }else{
        const texts = document.createElement("p"); // todo list creater
        texts.classList.add("texts");
        texts.textContent = inputValue;

        todoInput.value = ""; // empty the input after inserting text
        
        const deleteBtn = document.createElement("button"); // todo list delete button
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`; // insert fontawesome icon
    
        appendingNodeChild([texts, deleteBtn], textContainer); // append child into its textContainer parent node element
    
        appendingNodeChild([textContainer], enterlistsWrapper);  // append child into its enterlistsWrapper parent node element

        // textContainer.addEventListener("click",(e) => { // event for underlining completed task & delete list
        //     if (e.target === texts) {
        //         texts.style.textDecoration = "line-through";
        //         texts.style.color = "black";
        //     }
        //     if (e.target === deleteBtn){
        //         e.target.parentElement.remove();
        //     }
        // })

        //// OR

        texts.addEventListener("click", () => {  // event for underlining text that completed
            texts.style.textDecoration = "line-through";
            texts.style.color = "black";
        })

        deleteBtn.addEventListener("click", () => {  // event for deleting lists
            textContainer.remove();
        })
        // saveData();   // function call to store enter data
    }

    

}

todoBtn.addEventListener("click", btnClick); // event listerner to enter lists

const body = document.querySelector("body");
body.prepend(todoContainer);

// function saveData () {    // function to store enter data
//     localStorage.setItem("data", enterlistsWrapper.innerHTML);
// }
// function showTask (){    // function to retrieve store data 
//     enterlistsWrapper.innerHTML = localStorage.getItem("data");
// }
// showTask(); // function call to retrieve store data 
