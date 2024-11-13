// let pizzadiv=document.querySelector('.apizza')
// let pizza=[
//     {
//         id:1,
//         image:"image/pizza-1.jpg",
//         name:"Italian Pizza",
//         price:2.95,
//         stock:10,
//         qty:0
//     },
//     {
//         id:2,
//         image:"image/pizza-2.jpg",
//         name:"Italian Pizza",
//         price:2.95,
//         stock:8,
//         qty:0
//     },
//     {
//         id:3,
//         image:"image/pizza-4.jpg",
//         name:"Italian Pizza",
//         price:2.95,
//         stock:12,
//         qty:0
//     },
// ]

// let juicediv=document.querySelector('.ajuice')
// let juice=[
//     {
//         id:1,
//         image:"image/drink-1.jpg",
//         name:"Lemonade Juice",
//         price:2.95,
//         stock:10,
//         qty:0
//     },
//     {
//         id:2,
//         image:"image/drink-2.jpg",
//         name:"Pinapple Juice",
//         price:2.95,
//         stock:8,
//         qty:0
//     },
//     {
//         id:3,
//         image:"image/drink-3.jpg",
//         name:"Soda Drinks",
//         price:2.95,
//         stock:12,
//         qty:0
//     },
// ]

// let burgerdiv=document.querySelector('.aburger')
// let burger=[
//     {
//         id:1,
//         image:"image/burger-1.jpg",
//         name:"Burger1",
//         price:2.95,
//         stock:10,
//         qty:0
//     },
//     {
//         id:2,
//         image:"image/burger-2.jpg",
//         name:"Burger2",
//         price:2.95,
//         stock:8,
//         qty:0
//     },
//     {
//         id:3,
//         image:"image/burger-3.jpg",
//         name:"Burger3",
//         price:2.95,
//         stock:12,
//         qty:0
//     },
// ]

// let pastadiv=document.querySelector('.apasta')
// let pasta=[
//     {
//         id:1,
//         image:"image/pasta-1.jpg",
//         name:"Pasta1",
//         price:2.95,
//         stock:10,
//         qty:0
//     },
//     {
//         id:2,
//         image:"image/pasta-2.jpg",
//         name:"Pasta2",
//         price:2.95,
//         stock:8,
//         qty:0
//     },
//     {
//         id:3,
//         image:"image/pasta-3.jpg",
//         name:"Pasta3",
//         price:2.95,
//         stock:12,
//         qty:0
//     },
// ]

// function displayPizza(){
//     pizza.map((item,index)=>{
//         pizzadiv.innerHTML+=`
//         <div class="card border-0 bg_img text-center">
//             <img src=${item.image} class="img-fluid d-block mx-auto w-75 h-75 rounded-circle" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title text-white">${item.name}</h5>
//                 <p class="card-text text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                    
//                 <p style="color: #fac564;">$${item.price}</p>
//                 <button class="btn rounded-0 px-3 btn2">Add to cart</button>
//             </div>
//         </div> 
//         `
//     })
// }
// function displayDrinks(){
//     juice.map((item,index)=>{
//         juicediv.innerHTML+=`
//         <div class="card border-0 bg_img text-center">
//             <img src=${item.image} class="img-fluid d-block mx-auto w-75 h-75 rounded-circle" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title text-white">${item.name}</h5>
//                 <p class="card-text text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                    
//                 <p style="color: #fac564;">$${item.price}</p>
//                 <button class="btn rounded-0 px-3 btn2">Add to cart</button>
//             </div>
//         </div> 
//         `
//     })
// }
// function displayBurger(){
//     burger.map((item,index)=>{
//         burgerdiv.innerHTML+=`
//         <div class="card border-0 bg_img text-center">
//             <img src=${item.image} class="img-fluid d-block mx-auto w-75 h-75 rounded-circle" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title text-white">${item.name}</h5>
//                 <p class="card-text text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                    
//                 <p style="color: #fac564;">$${item.price}</p>
//                 <button class="btn rounded-0 px-3 btn2">Add to cart</button>
//             </div>
//         </div> 
//         `
//     })
// }
// function displayPasta(){
//     pasta.map((item,index)=>{
//         pastadiv.innerHTML+=`
//         <div class="card border-0 bg_img text-center">
//             <img src=${item.image} class="img-fluid d-block mx-auto w-75 h-75 rounded-circle" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title text-white">${item.name}</h5>
//                 <p class="card-text text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>                    
//                 <p style="color: #fac564;">$${item.price}</p>
//                 <button class="btn rounded-0 px-3 btn2">Add to cart</button>
//             </div>
//         </div> 
//         `
//     })
// }
// displayPizza()
// displayDrinks()
// displayBurger()
// displayPasta()




let pizzadiv=document.querySelector('.apizza')
let drinksdiv=document.querySelector('.ajuice')
let burgerdiv=document.querySelector('.aburger')
let pastadiv=document.querySelector('.apasta')
let cartitemsel=document.querySelector(".offcanvas-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-dark sup");
let pizza=[
    {
        id:1,
        image:"image/pizza-1.jpg",
        name:"Italian Pizza",
        price:2.90,
        stock:10,
        qty:0
    },
    {
        id:2,        
        image:"image/pizza-2.jpg",
        name:"Italian Pizza",
        price:2.90,
        stock:8,
        qty:0
    },
    {
        id:3,        
        image:"image/pizza-4.jpg",
        name:"Italian Pizza",
        price:2.90,
        stock:7,
        qty:0
    }
]

let drinks=[
    {
        id:1,        
        image:"image/drink-1.jpg",
        name:"Lemonade Juice",
        price:2.90,
        stock:5,
        qty:0
    },
    {
        id:2,        
        image:"image/drink-2.jpg",
        name:"Pineapple Juice",
        price:2.90,
        stock:8,
        qty:0
    },
    {
        id:3,        
        image:"image/drink-3.jpg",
        name:"Soda Drinks",
        price:2.90,
        stock:10,
        qty:0
    }
]
let burgers=[
    {
        id:1,        
        image:"image/burger-1.jpg",
        name:"Italian Burger",
        price:2.90,
        stock:9,
        qty:0
    },
    {
        id:2,        
        image:"image/burger-2.jpg",
        name:"Italian Burger",
        price:2.90,
        stock:6,
        qty:0
    },
    {
        id:3,        
        image:"image/burger-3.jpg",
        name:"Italian Burger",
        price:2.90,
        stock:9,
        qty:0
    }
]
let pastas=[
    {
        id:1,        
        image:"image/pasta-1.jpg",
        name:"Italian Pasta",
        price:2.90,
        stock:5,
        qty:0
    },
    {
        id:2,        
        image:"image/pasta-2.jpg",
        name:"Italian Pasta",
        price:2.90,
        stock:8,
        qty:0
    },
    {
        id:3,        
        image:"image/pasta-3.jpg",
        name:"Italian Pasta",
        price:2.90,
        stock:9,
        qty:0
    }
]
function displaypizza()
{
    pizza.map((item,index)=>{
        pizzadiv.innerHTML+=`
        <div class="card bg_img border-0 text-center">
            <img src=${item.image} class="img-fluid mx-auto d-block rounded-circle h-75 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-white">${item.name}</h5>
                    <p class="card-text text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p style="color: #fac564;">$ ${item.price}</p>
                    <button class="btn btn2 rounded-0 px-2" onclick=addtocart(${item.id})>Add to cart</button>
                </div>
        </div>
                        
        `
    })
}
displaypizza()
function displaydrinks()
{
    drinks.map((item,index)=>{
        drinksdiv.innerHTML+=`
        <div class="card bg_img border-0 text-center">
            <img src=${item.image} class="img-fluid mx-auto d-block rounded-circle h-75 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-white">${item.name}</h5>
                    <p class="card-text text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p style="color: #fac564;">$ ${item.price}</p>
                    <button class="btn btn2 rounded-0 px-2" onclick=addtocart(${item.id})>Add to cart</button>
                </div>
        </div>
                        
        `
    })
}
displaydrinks()
function displayburgers()
{
    burgers.map((item,index)=>{
        burgerdiv.innerHTML+=`
        <div class="card bg_img border-0 text-center">
            <img src=${item.image} class="img-fluid mx-auto d-block rounded-circle h-75 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-white">${item.name}</h5>
                    <p class="card-text text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p style="color: #fac564;">$ ${item.price}</p>
                    <button class="btn btn2 rounded-0 px-2" onclick=addtocart(${item.id})>Add to cart</button>
                </div>
        </div>
                        
        `
})
}
displayburgers()
function displaypasta()
{
    pastas.map((item,index)=>{
        pastadiv.innerHTML+=`
        <div class="card bg_img border-0 text-center">
            <img src=${item.image} class="img-fluid mx-auto d-block rounded-circle h-75 w-75" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-white">${item.name}</h5>
                    <p class="card-text text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p style="color: #fac564;">$ ${item.price}</p>
                    <button class="btn btn2 rounded-0 px-2" onclick=addtocart(${item.id})>Add to cart</button>
                </div>
        </div>
                        
        `
    })
}
displaypasta()
let cart=JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
    // check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus",id);
    }
    else
    {
        const item=pizza.find((product)=>product.id===id) || burgers.find((product)=>product.id===id) || pastas.find((product)=>product.id===id) || drinks.find((product)=>product.id===id);
    cart.push({
        ...item,
        qty:1
    });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table w-100">
                  <tbody>
                    <tr><td><img src=${item.image} height=50 width=50></td>
                    <td><p style="font-size:13px;">${item.name}</p></td>
                    <td>$${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i></td>
                  </tr></tbody></table>`

    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}

