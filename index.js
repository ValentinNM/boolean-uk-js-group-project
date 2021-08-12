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
    searchFieldInputEl.className = "search-area";
    topSearchBarFormEl.append(searchFieldInputEl);


    const searchButtonEl = document.createElement("button");
    searchButtonEl.className = "search-button";
    searchButtonEl.innerText = "Look up";
    topSearchBarFormEl.append(searchButtonEl);


    mainEl.append(topSearchBarFormEl)

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

    const addNewFormContainerEl = document.createElement("section");
    addNewFormContainerEl.className = "add-new-item-container";

    const addNewExpenseFormEl = document.createElement("form");
    addNewExpenseFormEl.className = "expense-form"
    // const testH2El = document.createElement("div");
    // testH2El.innerHTML = `
    // <p>working as well </p>
    
    // `;
    // addNewExpenseFormEl.append(testH2El);   

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

    addNewFormContainerEl.append(addNewExpenseFormEl);

    addNewItemButtonEl = document.createElement("button");
    addNewItemButtonEl.innerText = "Add me!";
    addNewItemButtonEl.className = "add-new-item-button";

    addNewFormContainerEl.append(addNewItemButtonEl);

    

    mainEl.append(addNewFormContainerEl);

}

renderMainContainer()


const filtersSectionAsideEl = document.querySelector(".filters-section");


function renderFilteredResults () { 

    const titleEl = document.createElement(h2);
    titleEl.innerText = "Hi"
    filtersSectionAsideEl.append(titleEl)

    // const formFilteringEl = document.createElement ("form");
    // const dropdownLabelEl = document.createElement("select");

    // const dropdownselectEl = document.createElement("select");
    // dropdownselectEl.name = "filter-by-category";
    // dropdownselectEl.id = "filter-by-category";

    // const dropdownOptionEl = document.createElement("option");
    // dropdownOptionEl.value = "category"; // to be replaced with the category 


}

renderFilteredResults ()