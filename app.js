const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('categories');

// console.log(category.value);
// console.log(amount.value);
// console.log(description.value);
const All = document.getElementById('allExpenses')
const LogBtn = document.getElementById('logExpense');
const AllBtn = document.getElementById('AllExpenses');

//Event Listener

LogBtn.addEventListener('click',() => {
    let newLogObject = {
        amount : amount.value,
        description : description.value,
        category : category.value
    }
    
    let categoryValue = category.value;
    log(categoryValue,newLogObject)


    
    // console.log(category.value);
    // console.log(GroceryArray);
    // console.log(ShoppingArray);
    // console.log(DiningArray);
    // console.log(MedicalArray);
    // console.log(PersonalCareArray);
    // console.log(EntertainmentArray);
    // console.log(UtilityArray);
    // console.log(TravelArray);
    // console.log(UpSkillArray);
})
function log(categoryValue,newLogObject){
    const expression = (categoryValue)
    switch(expression){
        case "Shopping":
            ShoppingArray.push(newLogObject);
            break;
        case "Grocery":
            GroceryArray.push(newLogObject);
            break; 
        case "Dining":
            DiningArray.push(newLogObject);
            break;
        case "Gadgets":
            GadgetsArray.push(newLogObject);
            break;
        case "PersonalCare":
            PersonalCareArray.push(newLogObject);
            break;
        case "Medical":
            MedicalArray.push(newLogObject);
            break;           
        case "Entertainment":
            EntertainmentArray.push(newLogObject);
            break;
        case "Utilityibills":
            UtilityArray.push(newLogObject);
            break;
        case "Travel":
            TravelArray.push(newLogObject);
            break;
        case "Upskilling":
            UpSkillArray.push(newLogObject);
            break;
        default :
           alert("category does not exist ")    
    }


}
AllBtn.addEventListener('click', () => {
    //All.classList.toggle('hidden');
    storage(ExpenseDetails)
    





})
// Category Arrays
let GroceryArray = [];
let ShoppingArray = [];
let DiningArray = [];
let GadgetsArray = [];
let MedicalArray = [];

let PersonalCareArray = [];
let EntertainmentArray = [];
let UtilityArray = [];
let TravelArray = [];
let UpSkillArray = [];

let ExpenseDetails = [GroceryArray,ShoppingArray,DiningArray,GadgetsArray,MedicalArray,PersonalCareArray,EntertainmentArray,UtilityArray,TravelArray,UpSkillArray];

function storage(ExpenseDetails){
     All.innerHTML = '';
    console.log("ALl btn clicked");
    ExpenseDetails.forEach((arr) => {
        //console.log("inside ExpenseDetails");
        if(arr.length > 0){
            let total = 0;
            let name = '';
            newCard = document.createElement('div');
            newCard.classList.add("p-3","m-3");
            newCardh4 = document.createElement('h4');
            newCardAmount = document.createElement('p');
            arr.forEach((obj) => {
                console.log("inside each array" );
                
                total += parseInt(obj.amount);
                name = obj.category;
                newCardAmount.innerText = total ;
                newCardh4.innerText = name;
                newCard.appendChild(newCardh4); 
                newCard.appendChild(newCardAmount);
                All.appendChild(newCard) ;

                
            })
             
        }


    })
}