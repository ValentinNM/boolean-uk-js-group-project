console.log("working");


let state = {
    expense: [], 
    category: [],
    price: [] 
}

// fetch("http://localhost:3000/expense")
// .then((res) => res.json())
// .then((data) => {
    
//     console.log("inside fetch data req:", data);

   
// });



const mainEl = document.querySelector(".container");


function renderMainContainer() { 
    const topSearchBarFormEl = document.createElement("form");
    

    // const searchFieldLabelEl = document.createElement("label");
    const searchFieldInputEl = document.createElement("input");
    searchFieldInputEl.placeholder = "Please enter the item name: ";
    searchFieldInputEl.innerText = "working";
    searchFieldInputEl.id = "user-item-input";
    searchFieldInputEl.name = "user-item-input";
    searchFieldInputEl.type = "text";

    topSearchBarFormEl.append(searchFieldInputEl);


    const searchButtonEl = document.createElement("button");
    searchButtonEl.className = "search-button";
    searchButtonEl.innerText = "Look up";
    topSearchBarFormEl.append(searchButtonEl);


    mainEl.append(topSearchBarFormEl)

    // blue
    const sectionListEl = document.createElement ("section");

    const expensesListUlEl = document.createElement("ul");
    expensesListUlEl.className = "expenses-list";
    const h3UlEl = document.createElement("h3");
    h3UlEl.innerText = "List of expenses"; 
    expensesListUlEl.append(h3UlEl);
    sectionListEl.append(expensesListUlEl);


    // provisionary - > to be removed and created through
    // the function that will render the list of items on the browser
    const expenseItemLiEl = document.createElement("li");
    expenseItemLiEl.className = "expense-item";
    expenseItemLiEl.innerText = " working too"; 
    expensesListUlEl.append(expenseItemLiEl);
    
    mainEl.append(sectionListEl);

    const addNewFormContainerEl = document.createElement("section");
    addNewFormContainerEl.className = "add-new-item-container";


    const addNewExpenseFormEl = document.createElement("form");
    const formDesciptionH3El = document.createElement("h3");
    formDesciptionH3El.innerText = "Add your new expenses below:";


    // const testH2El = document.createElement("div");
    // testH2El.innerHTML = `
    // <p>working as well </p>
    
    // `;
    // addNewExpenseFormEl.append(testH2El);

    const addItemInputEl = document.createElement("input");
    addItemInputEl.type = "text"; 
    addItemInputEl.name = ""; // same as belwo
    addItemInputEl.value = ""; // what we get from the user and store  
    
    const addCategoryInputEl = document.createElement ("input");
    addCategoryInputEl.type = "text";
    addCategoryInputEl.name = " "; // name ov our var we are going to take from the object KEY
    addCategoryInputEl.value = " "; // sw store this

    const addPriceInputEl = document.createElement("input");
    addPriceInputEl.type = "text";
    addPriceInputEl.name = " " // our price Key name
    addPriceInputEl.value = " "// this is the number we want to store

    addNewExpenseFormEl.append(formDesciptionH3El,addItemInputEl,addCategoryInputEl,addPriceInputEl);

    addNewFormContainerEl.append(addNewExpenseFormEl);

    addNewItemButtonEl = document.createElement("button");
    addNewItemButtonEl.innerText = "Add me!";
    addNewItemButtonEl.className = "add-new-item-button";

    addNewFormContainerEl.append(addNewItemButtonEl);

    

    mainEl.append(addNewFormContainerEl);

}

renderMainContainer()



// do not look at the inside of the below
// just the main container

const filtersSectionAsideEl = document.querySelector(".filters-section");

function renderFilteredResults () { 

    const filtersDivEl = document.createElement("div");
    filtersDivEl.className = "div-forms-container";
    filtersSectionAsideEl.append(filtersDivEl);

    const formFilteringEl = document.createElement ("form");

    const dropdownLabelEl = document.createElement("select");
    dropdownLabelEl.innerText = "Category of expenses"
    
    
    const dropdownselectEl = document.createElement("select");
    dropdownselectEl.name = "filter-by-category";
    dropdownselectEl.id = "filter-by-category";
    formFilteringEl.append(dropdownLabelEl, dropdownselectEl);

    const dropdowndefaultOptionEl = document.createElement("option");
    const dropdownOptionEl = document.createElement("option");
    dropdowndefaultOptionEl.value = ""; // to be replaced with the category 
    dropdowndefaultOptionEl.innerText = "Select from the below";
    dropdownOptionEl.value = "category"; // to be replaced with the category 
    dropdownOptionEl.innerText = "name of category 1"; // name of the category 

    dropdownselectEl.append(dropdowndefaultOptionEl,dropdownOptionEl);

    filtersDivEl.append(formFilteringEl);

    filtersSectionAsideEl.append(filtersDivEl);



}

renderFilteredResults ()