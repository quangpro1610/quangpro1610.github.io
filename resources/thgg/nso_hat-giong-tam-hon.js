var linkJson1 = "https://json.tonghopgiamgia.com/hat-giong-tam-hon.json";
var affAuthor = "https://go.isclix.com/deep_link/4348613481450415432?url=";
var money = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
var percent = 0;
function renderHTML1(data) {
    var html = '';
    $.each(data, function(index, item) {
        percent = ((item.price - item.discount) / item.price) * 100;
        html += '<div class="blog-post hentry simpleCart_shelfItem index-post post-shop-info" data-id="'+item.sku+'"><div class="index-product-inner"><div class="post-image-wrap item_image"><div class="bk-left"><h2><span itemprop="name"><span class="product_author show">'+item.category+'</span></span></h2></div><a class="post-image-link" href="'+affAuthor+item.url+'" target="_blank"><img alt="'+item.title+'" class="post-thumb item_thumb" src="'+item.image+'"></a><span class="product_off show">-'+parseInt(percent)+'%</span></div><div class="product-info"><h2 class="post-title item_name"><a href="'+affAuthor+item.url+'" target="_blank" title="'+item.title+'">'+item.title+'</a></h2><div class="sora_product_item_price item_price show"><span class="sora_product_price meta-price old-price">'+money.format(item.price)+'</span><span class="sora_product_price meta-price new-price">'+money.format(item.discount)+'</span></div><a class="item_add" href="'+affAuthor+item.url+'" target="_blank"><span class="add_product"><i class="fa fa-cart-plus"></i>Mua ngay</span></a></div></div></div>';
    });
    return html;
}

function hgth() {
    $.get(linkJson1, function(respone, status) {
        var data = respone;
        if (data) {
            $("#HGTH").empty();
            $('#pagination-hgth').pagination({
                dataSource: data,
                pageSize: 20,
                showPrevious: false,
                showNext: false,
                callback: function(data, pagination) {
                    var html = renderHTML1(data);
                    $('#HGTH').html(html);
                }
            })
        }
    });
}

$(function() {
    hgth();
});
