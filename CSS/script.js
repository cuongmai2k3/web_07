$(document).ready(function() {
    $('.buy').click(function() {
        const productName = $(this).closest('.img-container').find('.product-name').text();
        const priceText = $(this).closest('.img-container').find('.price').text();
        const price = parseFloat(priceText.replace(/\D/g, ''));
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        cart[productName] = price + (cart[productName] || 0);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Sản phẩm đã được thêm vào giỏ hàng');
    });
    $('.checkout').click(function() {
        window.location.href = 'pay.html';
    });
});
// $(document).ready(function() {
//             $('.checkout').click(function() {
//                 let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
//                 let total = 0;
//                 let tableContent = '<table><tr><th>Sản phẩm</th><th>Giá tiền</th></tr>';
//                 for (const [product, price] of Object.entries(cart)) {
//                     total += price;
//                     tableContent += `<tr><td>${product}</td><td>${price.toLocaleString('vi-VN')}đ</td></tr>`;
//                 }
//                 tableContent += `<tr><td>Tổng cộng</td><td>${total.toLocaleString('vi-VN')}đ</td></tr></table>`;

//                 $('#cartTable').html(tableContent);
//                 $('#total').text(`Tổng cộng: ${total.toLocaleString('vi-VN')}đ`);
//                 $('#total-modal').show();
//             });
$(document).ready(function() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let total = 0;
    let tableContent = '<table><tr><th>Sản phẩm</th><th>Giá tiền</th></tr>';
    for (const [product, price] of Object.entries(cart)) {
        total += price;
        tableContent += `<tr><td>${product}</td><td>${price.toLocaleString('vi-VN')}đ</td></tr>`;
    }
    tableContent += `<tr><td>Tổng cộng</td><td>${total.toLocaleString('vi-VN')}đ</td></tr></table>`;
    $('#cartTable').html(tableContent);
});
$('.checkout2').click(function() {
    var total = 0;
    $("#cart tbody tr").each(function() {
        var price = $(this).find("td:nth-child(2)").text().replace('đ', '').trim();
        total += parseInt(price);
    });
    $("#total").text("Tổng cộng: " + total + "đ");
    $("#total-modal").show();
});