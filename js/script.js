const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });

  //Product Cart
  
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList=itemList.filter(el=>el.title!=title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}

let itemList=[];

//Add Cart
function addCart(){
 let food=this.parentElement;
 let title=food.querySelector('.food-title').innerHTML;
 let price=food.querySelector('.food-price').innerHTML;
 let imgSrc=food.querySelector('.food-img').src;
 //console.log(title,price,imgSrc);
 
 let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }


let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}


function createCartProduct(title,price,imgSrc){

  return `
  <div class="cart-box">
  <img src="${imgSrc}" class="cart-img">
  <div class="detail-box">
    <div class="cart-food-title">${title}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
       <div class="cart-amt">${price}</div>
   </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `;
}

function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("$",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="$"+(price*qty);

  });

  totalValue.innerHTML='$'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
const imageContainer1 = document.getElementById('imageContainer1');
const imageUrl1 = 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg';


axios.get(imageUrl1, { responseType: 'blob' })
  .then(response => {
    
    const imageElement1 = document.createElement('img');
    imageElement1.src = URL.createObjectURL(response.data);
    imageElement1.style.width="286px";
    imageElement1.style.height="387px";

   
    imageContainer1.appendChild(imageElement1);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });


const imageContainer2 = document.getElementById('imageContainer2');
const imageUrl2 = 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg';


axios.get(imageUrl2, { responseType: 'blob' })
  .then(response => {
    
    const imageElement2 = document.createElement('img');
    imageElement2.src = URL.createObjectURL(response.data);
    imageElement2.style.width="286px";
    imageElement2.style.height="387px";

   
    imageContainer2.appendChild(imageElement2);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });

const imageContainer3 = document.getElementById('imageContainer3');
const imageUrl3 = 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg';


axios.get(imageUrl3, { responseType: 'blob' })
  .then(response => {
    
    const imageElement3 = document.createElement('img');
    imageElement3.src = URL.createObjectURL(response.data);
    imageElement3.style.width="361px";
    imageElement3.style.height="387px";

   
    imageContainer3.appendChild(imageElement3);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });

const imageContainer4 = document.getElementById('imageContainer4');
const imageUrl4 = 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg';


axios.get(imageUrl4, { responseType: 'blob' })
  .then(response => {
    
    const imageElement4 = document.createElement('img');
    imageElement4.src = URL.createObjectURL(response.data);
    
    imageElement4.style.width="280px";
  imageElement4.style.height="380px";
   
    imageContainer4.appendChild(imageElement4);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });



const imageContainer5 = document.getElementById('imageContainer5');
var imageUrl5 = 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg';


axios.get(imageUrl5, { responseType: 'blob' })
  .then(response => {
    
    var imageElement5 = document.createElement('img');
    imageElement5.src = URL.createObjectURL(response.data);
    imageElement5.style.width="286px";
    imageElement5.style.height="387px";

   
    imageContainer5.appendChild(imageElement5);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });

var imageContainer6 = document.getElementById('imageContainer6');
var imageUrl6 = 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg';


axios.get(imageUrl6, { responseType: 'blob' })
  .then(response => {
    
    var imageElement6 = document.createElement('img');
    imageElement6.src = URL.createObjectURL(response.data);
    imageElement6.style.width="286px";
    imageElement6.style.height="387px";

   
    imageContainer6.appendChild(imageElement6);
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });
