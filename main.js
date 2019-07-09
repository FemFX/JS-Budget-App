const budget      = document.querySelector('.budget__value');
const budgetMinus = document.querySelector('.budget__expenses--value');
const budgetPlus  = document.querySelector('.budget__income--value'); 
const btn_add     = document.querySelector('.btn-add');
const btn_remove  = document.querySelector('.btn-remove');
const listPlus    = document.querySelector('.income__list');
const listMinus   = document.querySelector('.expenses__list');


let score = score1 = score2 = 0;
let descr = out = '';


function init(){
    budget.innerHTML      = score;
    budgetPlus.innerHTML  = score1;
    budgetMinus.innerHTML = score2;
}
init()
btn_add.addEventListener('click', ()=>{
    let descr_val = document.querySelector('.add__description').value;
    descr = descr_val;
    let inp_val = document.querySelector('.add__value').value;
    inp_val = parseInt(inp_val);
    if (inp_val > 0){
        if (descr){
            score  += inp_val;
            score1 += inp_val;
            budgetPlus.innerHTML = score1
            budget.innerHTML = score;
            out = 
            `<div class="item clearfix" id="income-0">
                <div class="item__description">${descr}</div>
                <div class="right clearfix">
                    <div class="item__value">+ ${inp_val}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn">x</button>
                    </div>
                </div>
            </div>`
            listPlus.innerHTML += out; 
        }
        
    }
    
})
btn_remove.addEventListener('click', ()=>{
    let descr_val = document.querySelector('.add__description').value;
    descr = descr_val;
    let inp_val = document.querySelector('.add__value').value;
    inp_val = parseInt(inp_val);
    if (inp_val > 0){
        if (descr){
            score  -= inp_val;
            score2 -= inp_val;
            budgetMinus.innerHTML = score2
            budget.innerHTML = score;
            out = 
            `<div class="item clearfix" id="expense-0">
                <div class="item__description">${descr}</div>
                <div class="right clearfix">
                    <div class="item__value">- ${inp_val}</div>
                    <div class="item__delete">
                        <button class="item__delete--btn">x</button>
                    </div>
                </div>
            </div>`
            listMinus.innerHTML += out;
        }
    
    }
    
})

