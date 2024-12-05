document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // 添加商品到购物车
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            const itemName = event.target.getAttribute('data-name');
            const itemPrice = parseFloat(event.target.getAttribute('data-price'));

            const li = document.createElement('li');
            li.textContent = `${itemName} - ¥${itemPrice}`;
            cartItems.appendChild(li);

            totalPrice += itemPrice;
            totalPriceElement.textContent = `¥${totalPrice.toFixed(2)}`;
        });
    });

    // 提交订单
    document.getElementById('submit-order').addEventListener('click', function() {
        alert('感谢您的订单！我们将尽快处理。');
        cartItems.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = '¥0';
    });
});