console.log("working");


let state = {
    expense: [], 
    category: [],
    price: [] 
}

const mainEl = document.querySelector(".container");

function renderMainContainer () {

const centeringSectionEl = document.createElement("section");
centeringSectionEl.className = "centering-section";
mainEl.append(centeringSectionEl);

const topSearchBarFormEl = document.createElement("form");
    

// const searchFieldLabelEl = document.createElement("label");
const searchFieldInputEl = document.createElement("input");
searchFieldInputEl.placeholder = "Please enter the item name: ";
searchFieldInputEl.innerText = "working";
searchFieldInputEl.id = "user-item-input";
searchFieldInputEl.name = "user-item-input";
searchFieldInputEl.type = "text";
searchFieldInputEl.className = "search-area";
topSearchBarFormEl.append(searchFieldInputEl);


const searchButtonEl = document.createElement("button");
searchButtonEl.className = "search-button";
searchButtonEl.innerText = "Look up";
topSearchBarFormEl.append(searchButtonEl);


// mainEl.append(topSearchBarFormEl)
centeringSectionEl.append(topSearchBarFormEl);

function renderMainContainer() { 

    const topSearchBarFormEl = document.createElement("form");
    

    // const searchFieldLabelEl = document.createElement("label");
    const searchFieldInputEl = document.createElement("input");
    searchFieldInputEl.placeholder = "Please enter the item name: ";
    searchFieldInputEl.innerText = "working";
    searchFieldInputEl.id = "user-item-input";
    searchFieldInputEl.name = "user-item-input";
    searchFieldInputEl.type = "text";
    searchFieldInputEl.className = "search-area";
    topSearchBarFormEl.append(searchFieldInputEl);
// blue

// const h3UlEl = document.createElement("h3");
// h3UlEl.innerText = "List of expenses"; 
// // mainEl.append(h3UlEl);
// centeringSectionEl.append(h3UlEl);

// const sectionListEl = document.createElement ("section");
// sectionListEl.className = "list-section"
// mainEl.append(sectionListEl);

// const expensesListUlEl = document.createElement("ul");
// expensesListUlEl.className = "expenses-list";
// sectionListEl.append(expensesListUlEl);  
}
// provisionary - > to be removed and created through
// the function that will render the list of items on the browser

function displayUserNewAddition () { 

    // ul as brige

    // blue

    const h3UlEl = document.createElement("h3");
    h3UlEl.innerText = "List of expenses"; 
    mainEl.append(h3UlEl);

    const sectionListEl = document.createElement ("section");
    sectionListEl.className = "list-section"
    mainEl.append(sectionListEl);

    const expensesListUlEl = document.createElement("ul");
    expensesListUlEl.className = "expenses-list";
    sectionListEl.append(expensesListUlEl);  
    
    // provisionary - > to be removed and created through
    // the function that will render the list of items on the browser
    const expenseItemLiEl = document.createElement("li");
    expenseItemLiEl.className = "expense-item";
    expenseItemLiEl.innerText = " working too"; 
    expensesListUlEl.append(expenseItemLiEl);

    const expenseSecondItemLiEl = document.createElement("li");
    expenseSecondItemLiEl.className = "expense-item";
    expenseSecondItemLiEl.innerText = " working too"; 
    expensesListUlEl.append(expenseSecondItemLiEl);

    const expenseThirdItemLiEl = document.createElement("li");
    expenseThirdItemLiEl.className = "expense-item";
    expenseThirdItemLiEl.innerText = " working too"; 
    expensesListUlEl.append(expenseThirdItemLiEl);

    const frameEl = document.createElement("div")
    frameEl.className = "frame-list"
    sectionListEl.append(frameEl)

    const headingEl = document.createElement("h2")
    headingEl.innerText = "Hi"
    frameEl.append(headingEl)    
    
    const formDesciptionH3El = document.createElement("h3");
    formDesciptionH3El.innerText = "Add your new expenses below:";
    mainEl.append(formDesciptionH3El);
    
    fetch("http://localhost:3000/expenses")
    .then((res) => res.json())
    .then((allExpenses) => {
        console.log("all expenses: ", allExpenses);
    })


}

// displayUserNewAddition()

const expenseItemLiEl = document.createElement("li");
expenseItemLiEl.className = "expense-item";
expenseItemLiEl.innerText = " working too"; 
expensesListUlEl.append(expenseItemLiEl);

const expenseSecondItemLiEl = document.createElement("li");
expenseSecondItemLiEl.className = "expense-item";
expenseSecondItemLiEl.innerText = " working too"; 
expensesListUlEl.append(expenseSecondItemLiEl);

const expenseThirdItemLiEl = document.createElement("li");
expenseThirdItemLiEl.className = "expense-item";
expenseThirdItemLiEl.innerText = " working too"; 
expensesListUlEl.append(expenseThirdItemLiEl);

const addNewFormContainerEl = document.createElement("section");
addNewFormContainerEl.className = "add-new-item-container";

const addNewExpenseFormEl = document.createElement("form");
addNewExpenseFormEl.className = "expense-form"
   
const addItemInputEl = document.createElement("input");
addItemInputEl.className = "input"
addItemInputEl.type = "text"; 
addItemInputEl.name = ""; // same as belwo
addItemInputEl.value = ""; // what we get from the user and store  
    
const addCategoryInputEl = document.createElement ("input");
addCategoryInputEl.className = "input"
addCategoryInputEl.type = "text";
addCategoryInputEl.name = " "; // name ov our var we are going to take from the object KEY
addCategoryInputEl.value = " "; // sw store this

const addPriceInputEl = document.createElement("input");
addPriceInputEl.className = "input"
addPriceInputEl.type = "text";
addPriceInputEl.name = " " // our price Key name
addPriceInputEl.value = " "// this is the number we want to store

addNewExpenseFormEl.append(addItemInputEl,addCategoryInputEl,addPriceInputEl);
// * ths is the counter section START
const totalSectionEl = document.createElement("div")
totalSectionEl.className = "frame-list"
totalSectionEl.style = "text-align: center;"

sectionListEl.append(totalSectionEl)
centeringSectionEl.append(sectionListEl);

const totalPriceDivEl = document.createElement("div")
totalPriceDivEl.innerText = "Total";
const totalPriceDisplayed = document.createElement("h3");
totalPriceDisplayed.innerText = "£267.22";
totalPriceDivEl.append(totalPriceDisplayed);
totalSectionEl.append(totalPriceDivEl)  

const totalNoCounterEl = document.createElement("div");
totalNoCounterEl.innerText = "Counter";

totalNoCounterDigitEl = document.createElement("h3");
totalNoCounterDigitEl.innerText = "122";
totalNoCounterEl.append(totalNoCounterDigitEl);

totalSectionEl.append(totalNoCounterEl)

// centeringSectionEl.append(h3UlEl);

// counter section END



const formDesciptionH3El = document.createElement("h3");
formDesciptionH3El.innerText = "Add your new expenses below:";



const addNewFormContainerEl = document.createElement("section");
addNewFormContainerEl.className = "add-new-item-container";

const addNewExpenseFormEl = document.createElement("form");
addNewExpenseFormEl.className = "expense-form"
addNewExpenseFormEl.id = "add-new-item";
addNewExpenseFormEl.autocomplete = "off";


addNewExpenseFormEl.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("button");

    const addedItem = addItemInputEl.value; 
    const addedCategory = addCategoryInputEl.value;
    const addedPrice = parseInt(addPriceInputEl.value);

    console.log("new user added expense :", addedItem, addedCategory, addedPrice);


    const productToCreate = {
        item: addedItem,
        category: addedCategory,
        price: addedPrice
      };
      
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(productToCreate)
      };

    fetch("http://localhost:3000/expenses", fetchOptions)
        .then((res) => res.json())
        .then((newProduct) => {
    console.log("Inside POST Fetch: ", newProduct);
    
    // function renderUser


  });
  // formEl.reset()
  displayUserNewAddition()
})



const addItemInputEl = document.createElement("input");
addItemInputEl.className = "input"
addItemInputEl.type = "text"; 
addItemInputEl.name = ""; // same as belwo
addItemInputEl.value = ""; // what we get from the user and store in a variable

const newItemDivEL = document.createElement("div");
newItemDivEL.innerHTML = "<h3>Name</h3>";

newItemDivEL.className = "sectioned-label";
newItemDivEL.append( addItemInputEl);


const addCategoryInputEl = document.createElement ("input");
addCategoryInputEl.className = "input"
addCategoryInputEl.type = "text";
addCategoryInputEl.name = " "; // name ov our var we are going to take from the object KEY
addCategoryInputEl.value = " "; // sw store this


const newCategoryDivEl = document.createElement("div");
newCategoryDivEl.innerHTML = "<h3>Category</h3>";

newCategoryDivEl.className = "sectioned-label";

newCategoryDivEl.append(addCategoryInputEl)


const addPriceInputEl = document.createElement("input");
addPriceInputEl.className = "input"
addPriceInputEl.type = "text";
addPriceInputEl.name = " " // our price Key name
addPriceInputEl.value = " "// this is the number we want to store

const newPriceDivEl = document.createElement("div");
newPriceDivEl.className = "sectioned-label";
newPriceDivEl.innerHTML = "<h3>Price</h3>";
newPriceDivEl.append(addPriceInputEl);


addNewExpenseFormEl.append(
    newItemDivEL,
    newCategoryDivEl,
    newPriceDivEl
    );

addNewFormContainerEl.append(addNewExpenseFormEl);

addNewItemButtonEl = document.createElement("button");
addNewItemButtonEl.innerText = "Add me!";
addNewItemButtonEl.className = "add-new-item-button";


addNewExpenseFormEl.append(addNewItemButtonEl);

centeringSectionEl.append(formDesciptionH3El);

centeringSectionEl.append(addNewFormContainerEl);

}

renderMainContainer()


const filtersSectionAsideEl = document.querySelector(".filters-section");


function renderFilteredResults () { 
    
const filtersDivEl = document.createElement("div");
filtersDivEl.className = "div-forms-container";
filtersSectionAsideEl.append(filtersDivEl);

const formFilteringEl = document.createElement("form");

const multipleFiltersEl = document.createElement("h3");
multipleFiltersEl.innerText = "Multiple";

    // const dropdownLabelEl = document.createElement("select");
    // dropdownLabelEl.innerText = "Category of expenses"
    
    
    const dropdownselectEl = document.createElement("select");
    dropdownselectEl.name = "filter-by-category";
    dropdownselectEl.id = "filter-by-category";
    formFilteringEl.append( multipleFiltersEl ,dropdownselectEl);

    const dropdowndefaultOptionEl = document.createElement("option");
    const dropdownAZOptionEl = document.createElement("option");
    dropdowndefaultOptionEl.value = ""; // to be replaced with the category 
    dropdowndefaultOptionEl.innerText = "Select from the below";
    dropdownAZOptionEl.value = "category"; // to be replaced with the category 
    dropdownAZOptionEl.innerText = "A - Z"; // name of the category 

    const dropdownZAOptionEl = document.createElement("option");
    dropdownZAOptionEl.value = " "; // 
    dropdownZAOptionEl.innerText = "Z - A";

    const dropdownAscendingPrice = document.createElement ("option");
    dropdownAscendingPrice.value = " "; // 
    dropdownAscendingPrice.innerText = "Ascending";

    const dropdownDescendingPrice = document.createElement("option");
    dropdownDescendingPrice.value = " ";// 
    dropdownDescendingPrice.innerText = "Descending";

    dropdownselectEl.append(
        dropdowndefaultOptionEl,
        dropdownAZOptionEl,
        dropdownZAOptionEl,
        dropdownAscendingPrice,
        dropdownDescendingPrice
        );

    filtersDivEl.append(formFilteringEl);

    filtersSectionAsideEl.append(filtersDivEl);

    
    const clearAllDivEl = document.createElement("div");
    clearAllDivEl.className = "clear-all-section";
    const clearAllTextEl = document.createElement("h3");
    clearAllTextEl.innerText = "Categories";
    const clearAllButtonEl = document.createElement("button");
    clearAllButtonEl.innerText = "clear all";
    clearAllButtonEl.className = "clear-all-button";
    clearAllDivEl.append(clearAllTextEl, clearAllButtonEl);
    filtersSectionAsideEl.append(clearAllDivEl);

    const checkboxFormEL = document.createElement("form");
    checkboxFormEL.className = "checkbox-filter-form";


    // below is just an example for what to use in the renderCategoryCheckbox function 
    const checkboxInputEl = document.createElement("input");
    checkboxInputEl.type = "checkbox";
    checkboxInputEl.name = " "; // name of the var
    checkboxInputEl.value = " "; // name of the var
    
    const checkboxLabelEL = document.createElement("label");
    checkboxLabelEL.for = " "; // name of the var
    checkboxLabelEL.innerText = "test is working "; // const data name value of the category

    checkboxFormEL.append(checkboxInputEl, checkboxLabelEL); 
    

    filtersSectionAsideEl.append(checkboxFormEL);

}

renderFilteredResults ()





function userAddNewExpense (addNewExpenseFormEl) { 

    // console.log(" inside addNewExpenseFormEl: ", addNewExpenseFormEl)
// form name
// addNewExpenseFormEl
    

    fetch("http://localhost:3000/expenses")
    .then((res) => res.json())
    .then((data) => {
        
        console.log("inside fetch data req:", data);
        
    
    
    });

}

userAddNewExpense()


// function main () { 
    // TO ADD THE LAYOUT AT A LATER POINT 
    // FOR
    // <main class="container center">

// }

// main ()
