//корзина
const basket = [];
// счетчик корзины
const countOut = document.querySelector('.cartIconWrap span')

//вешаем событие на кнопку "корзины"
document.querySelector('.cartIconWrap').addEventListener('click', () => {
    document.querySelector('.basket').classList.toggle('hidden');
})

//вешаем событие на кнопку "добавить товар"
document.querySelector('.featuredItems').addEventListener('click', (event) => {
    //выйти из события если нажата не кнопка
    if (!event.target.classList.contains('addToCart')) return;
    //функция добавления товара в корзину
   
    // получаем данные родителя
    const product = event.target.closest('.featuredItem').dataset.name
    const cost = event.target.closest('.featuredItem').dataset.price
    const id = event.target.closest('.featuredItem').dataset.id
    
    
    


    //функция добавления товара в корзину
    function addToCart() {
         //сумма итога
         let summary = 0;
         //итоговый счетчик
         let totalCount = 0;
        //получаем экран вывода итоговой суммы
        const totalOut = document.querySelector('.basketTotalValue')
        // получаем экран вывода для продуктов
        const productOut = document.querySelector('.basketOut')
        //если товар уже есть в корзине
        if(basket.hasOwnProperty(id)){
            console.log('work');
            //добавляем +1 к счетчику
            basket[id].count +=1;
            //стираем корзину
            productOut.innerHTML = '';
            //перебираем массив для обновления товаров в корзине
            basket.map((item)=>{
                productOut.innerHTML += `
            <div class="basketRow">
            <span class="basketName">${item.name}</span>
            <span class="basketCount">${item.count}</span>
            <span class="basketCost">${item.cost}</span>
            <span class="basketTotalOfProduct">${+item.cost * +item.count}</span>
            </div>
            `;
            //отображаем итоговую сумму всех товаров
            summary += +item.cost * +item.count
            totalOut.innerHTML = summary
            
            //cбрасываем счетчик товаров в корзине
            totalCount = 0
            //отображаем счетчик товаров в корзине
            basket.map((item)=>{
                totalCount += +item.count
            })
            countOut.innerHTML = totalCount
            
            })


            //выходим из функции
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
        basket.map((item)=>{
        summary += +item.cost * +item.count
        totalOut.innerHTML = summary
        })
        
        //cбрасываем счетчик товаров в корзине
        totalCount = 0
        //отображаем счетчик товаров в корзине
        basket.map((item)=>{
            totalCount += +item.count
        })
        countOut.innerHTML = totalCount
        
    }

       
    //вызов функции добавления товара в корзину
    addToCart()

})




