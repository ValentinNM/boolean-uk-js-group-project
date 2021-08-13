console.log("working line 1");


let state = {
    expense: [], 
    category: [],
    price: [] 
}

const mainEl = document.querySelector(".container");

function renderMainContainer () {

    // START of the search by name section
const centeringSectionEl = document.createElement("section");
centeringSectionEl.className = "centering-section";
mainEl.append(centeringSectionEl);

const topSearchBarFormEl = document.createElement("form");
topSearchBarFormEl.id = "filter-by-name";
    
const searchFieldInputEl = document.createElement("input");
searchFieldInputEl.className = "search-area";
searchFieldInputEl.placeholder = "Please search by the item name: ";
searchFieldInputEl.id = "user-item-input";
searchFieldInputEl.name = "user-item-input";
searchFieldInputEl.type = "text";
searchFieldInputEl.value = "";
topSearchBarFormEl.append(searchFieldInputEl);

const searchButtonEl = document.createElement("button");
searchButtonEl.className = "search-button";
searchButtonEl.type = "submit";
searchButtonEl.innerText = "Quick look up";
topSearchBarFormEl.append(searchButtonEl);

centeringSectionEl.append(topSearchBarFormEl);
// END of the search by name section


// Start - Text only
const h3UlEl = document.createElement("h3");
h3UlEl.innerText = "List of expenses"; 
centeringSectionEl.append(h3UlEl);
// END - text only


// START of the LIST Section 
const sectionListEl = document.createElement ("section");
sectionListEl.className = "list-section"
mainEl.append(sectionListEl);

function userAddNewExpense () { 
// console.log(" inside userAddNewExpense: ", userAddNewExpense)
    
const expensesListUlEl = document.createElement("ul");
expensesListUlEl.className = "expenses-list";
sectionListEl.append(expensesListUlEl); 
    
    fetch("http://localhost:3000/expenses")
    .then((res) => res.json())
    .then((allExpenses) => {
        // console.log("inside all expenses data: ", allExpenses);        
        // console.log("this has to display last after the post methos")
         
        state.expense = [...allExpenses]; 

        for (let i = 0; i < allExpenses.length; i++) {
            const userExpense = allExpenses[i];
            // console.log("UserExpenses element: ",userExpense.item);

            const addedItemNameLiEl = document.createElement("li");
            addedItemNameLiEl.className = "expense-item";
            addedItemNameLiEl.innerText = userExpense.item;

            const addedItemCategoryLiEl = document.createElement("li");
            addedItemCategoryLiEl.className = "expense-category";
            addedItemCategoryLiEl.innerText = userExpense.category;

            const addedItemPriceLiEl = document.createElement("li");
            addedItemPriceLiEl.className = "expense-price";
            addedItemPriceLiEl.innerText = userExpense.price;

            expensesListUlEl.append (
                addedItemNameLiEl,
                addedItemCategoryLiEl,
                addedItemPriceLiEl );
        }
        return expensesListUlEl;

    });
    // sectionListEl.append(expensesListUlEl);   
}
userAddNewExpense ()

const addNewFormContainerEl = document.createElement("section");
addNewFormContainerEl.className = "add-new-item-container";

    // * START of the counter section 
const totalSectionEl = document.createElement("div")
totalSectionEl.className = "frame-list"

sectionListEl.append(totalSectionEl)
centeringSectionEl.append(sectionListEl);

const totalPriceDivEl = document.createElement("div")
totalPriceDivEl.innerText = "Total";
const totalPriceDisplayed = document.createElement("h3");
totalPriceDisplayed.className = "priceAmount";
// totalPriceDisplayed.innerText = "£267.22";

totalPriceDivEl.append(totalPriceDisplayed);
totalSectionEl.append(totalPriceDivEl)  

const totalNoCounterEl = document.createElement("div");
totalNoCounterEl.innerText = "Counter";

totalNoCounterDigitEl = document.createElement("h3");
totalNoCounterDigitEl.className = "counter-quantity";
// totalNoCounterDigitEl.innerText = "122";
totalNoCounterEl.append(totalNoCounterDigitEl);

totalSectionEl.append(totalNoCounterEl)
// END counter section 


// START of the text only
const formDesciptionH3El = document.createElement("h3");
formDesciptionH3El.innerText = "Add your new expense below:";
// END of the text only


// START of the ADD NEW ITEM from 
const addNewExpenseFormEl = document.createElement("form");
addNewExpenseFormEl.className = "expense-form"
addNewExpenseFormEl.id = "add-new-item";
addNewExpenseFormEl.autocomplete = "off";

addNewExpenseFormEl.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Add me! button");
    
    const addedItem = addItemInputEl.value; 
    const addedCategory = addCategoryInputEl.value;
    const addedPrice = parseInt(addPriceInputEl.value);
    
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
        console.log("new product Inside POST Fetch: ", newProduct);
        

        // const testing = userAddNewExpense ()

        addNewExpenseFormEl.reset()
    });
    // return testing;
    // return userAddNewExpense();
})


// { add name
const newItemDivEL = document.createElement("div");
newItemDivEL.innerHTML = "<h3>Name</h3>";

const addItemInputEl = document.createElement("input");
addItemInputEl.className = "input"
addItemInputEl.type = "text"; 
addItemInputEl.name = ""; // same as belwo
addItemInputEl.value = ""; // what we get from the user and store in a variable

newItemDivEL.className = "sectioned-label";
newItemDivEL.append( addItemInputEl);
// add name }

// { add category
const newCategoryDivEl = document.createElement("div");
newCategoryDivEl.innerHTML = "<h3>Category</h3>";

const addCategoryInputEl = document.createElement ("input");
addCategoryInputEl.className = "input"
addCategoryInputEl.type = "text";
addCategoryInputEl.name = " "; // name ov our var we are going to take from the object KEY
addCategoryInputEl.value = " "; // sw store this
newCategoryDivEl.className = "sectioned-label";

newCategoryDivEl.append(addCategoryInputEl)
// add category }

// { add price 
const newPriceDivEl = document.createElement("div");
newPriceDivEl.className = "sectioned-label";
newPriceDivEl.innerHTML = "<h3>Price</h3>";

const addPriceInputEl = document.createElement("input");
addPriceInputEl.className = "input"
addPriceInputEl.type = "text";
addPriceInputEl.name = " " // our price Key name
addPriceInputEl.value = " "// this is the number we want to store

newPriceDivEl.append(addPriceInputEl);
// add price }

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

// END of the ADD NEW ITEM from 
}

renderMainContainer()

// TO DO LATER // GETS AN UNDEFINED VALUE AS RESPONSE
function renderSearchedByName () {

    
    // console.log("inside renderSearchedByName");

    const searchByNameFormElTargeted = document.querySelector("#filter-by-name");
    
    const expensesList = document.querySelector(".expenses-list");        
    
    searchByNameFormElTargeted.addEventListener("submit", (event) => {
        event.preventDefault();
        // console.log("event BUTTON: ", state.expense[0]);
        const itemSearchInput = document.querySelector("#user-item-input");
        console.log("itemSearchInput: ", itemSearchInput.value);
        const test = itemSearchInput.value;
        
        const filteredExpenses = state.expense.filter(
            (expense) => expense.item === itemSearchInput.value
            );        
            console.log("filteredExpenses: ", filteredExpenses)
            
            expensesList.innerHTML ="";
        for (let i = 0; i < filteredExpenses.length; i++) { 
            const selectedExpenseByName = filteredExpenses[i]
            console.log("inside FOR LOOP");
            console.log("itemSearchInput.value: ", itemSearchInput.value)
            console.log( "selectedExpenseByName.item:", selectedExpenseByName.item)

        
            // only gives the value for one ITEM Name
            if (test === selectedExpenseByName.item) {
                console.log('selectedExpenseByName :',selectedExpenseByName)
                

            const addedItemNameLiEl = document.createElement("li");
            addedItemNameLiEl.className = "expense-item";
            addedItemNameLiEl.innerText = selectedExpenseByName.item;

            const addedItemCategoryLiEl = document.createElement("li");
            addedItemCategoryLiEl.className = "expense-category";
            addedItemCategoryLiEl.innerText = selectedExpenseByName.category;

            const addedItemPriceLiEl = document.createElement("li");
            addedItemPriceLiEl.className = "expense-price";
            addedItemPriceLiEl.innerText = selectedExpenseByName.price;
            
            expensesList.append (
                addedItemNameLiEl,
                addedItemCategoryLiEl,
                addedItemPriceLiEl );
        }

    }
    return expensesList;

    });
}

renderSearchedByName()


// function renderTotalPriceAndQuantity () { 

//     const addedItemPriceLiEl = document.querySelector(".expense-price");
//     const totalPriceDisplayed = document.querySelector(".priceAmount");
    
//     let listTotalAmount = 0;

//     for (let i = 0; i < state.expense.length; i++ ){ 
//         const individualPrice = state.expense[i].price;
//          listTotalAmount += individualPrice;
//          console.log("listTotalAmount:", listTotalAmount);
        
//          state.price = listTotalAmount;

//          totalPriceDisplayed.innerText = `$ {listTotalAmount}`;

//     }

// }
// renderTotalPriceAndQuantity ()


// function main () { 
    // TO ADD THE LAYOUT AT A LATER POINT 
    // FOR
    // <main class="container center">

// }

// main ()


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

    dropdownselectEl.addEventListener("change", () => { 
        const expensesList = document.querySelector(".expenses-list");        
        console.log("expensesList:" ,expensesList)

        console.log("state: ", state); 
        expensesList.innerHTML =""; 

    });

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
    dropdownAscendingPrice.innerText = "Lower Price";



    const dropdownDescendingPrice = document.createElement("option");
    dropdownDescendingPrice.value = " ";// 
    dropdownDescendingPrice.innerText = "Higher Price";

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