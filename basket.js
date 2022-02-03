//корзина
const basket = [];
// счетчик корзины
const countOut = document.querySelector('.cartIconWrap span');
// получаем экран вывода для продуктов
const productOut = document.querySelector('.basketOut');
//получаем экран вывода итоговой суммы
const totalOut = document.querySelector('.basketTotalValue');

//вешаем событие на кнопку "корзины"
document.querySelector('.cartIconWrap').addEventListener('click', () => {
    document.querySelector('.basket').classList.toggle('hidden');
})

//вешаем событие на кнопку "добавить товар"
document.querySelector('.featuredItems').addEventListener('click', (event) => {
    //выйти из события если нажата не кнопка
    if (!event.target.classList.contains('addToCart')) return;
    //функция добавления товара в корзину

    // получаем родителя
    const parent = event.target.closest('.featuredItem');
    // получаем данные родителя
    const product = parent.dataset.name;
    const cost = parent.dataset.price;
    const id = parent.dataset.id;
    
    //вызов функции добавления товара в корзину
    addToCart(product,cost,id)
})

//функция добавления товара в корзину
function addToCart(product,cost,id) {
   //если товар уже есть в корзине
   if(basket.hasOwnProperty(id)){
       //добавляем +1 к счетчику
       basket[id].count +=1;
       //стираем корзину
       productOut.innerHTML = '';
       //перебираем массив для обновления товаров в корзине
       basket.forEach((item)=>{
           productOut.innerHTML += `
       <div class="basketRow">
       <span class="basketName">${item.name}</span>
       <span class="basketCount">${item.count}</span>
       <span class="basketCost">${item.cost}</span>
       <span class="basketTotalOfProduct">${+item.cost * +item.count}</span>
       </div>
       `
       //отображаем итоговую сумму всех товаров
       addTotal()
       //отображаем счетчик товаров в корзине
       addTotalCount()
       //выходим из функции
   })
   return;
   }
    // добавляем в первый раз товар в объект
   basket[id] = {
       "name": product,
       "cost": cost,
       "count": 1
   };
   // отображаем товар в корзине
   productOut.innerHTML += `
  <div class="basketRow data-id=${basket[id]}">
  <span class="basketName">${basket[id].name}</span>
  <span class="basketCount">${basket[id].count}</span>
  <span class="basketCost">${basket[id].cost}</span>
  <span class="basketTotalOfProduct">${basket[id].cost}</span>
  </div>
   `;
   //отображаем итоговую сумму всех товаров
   addTotal()
   
   //отображаем счетчик товаров в корзине
   addTotalCount()
}


//функция отображает счетчик товаров в корзине
function addTotalCount(){
    //cбрасываем счетчик товаров в корзине
    let totalCount = 0;
    //отображаем счетчик товаров в корзине
    basket.forEach((item)=>{
        totalCount += +item.count;
    })
    countOut.innerHTML = totalCount;
}


//функция отображает итоговую сумму всех товаров
function addTotal () {
    //сумма итога
    let summary = 0;
    //отображаем итоговую сумму всех товаров
    basket.forEach((item)=>{
        summary += +item.cost * +item.count;
    })
    totalOut.innerHTML = summary;
}