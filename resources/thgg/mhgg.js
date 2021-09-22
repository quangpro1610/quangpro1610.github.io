var linkJson1 = "https://json.tonghopgiamgia.com/polyxgo-tiki.json";
var linkJson2 = "https://json.tonghopgiamgia.com/polyxgo-lazada.json";
var linkJson3 = "https://json.tonghopgiamgia.com/polyxgo-shopee.json";
var affAuthor = "https://go.isclix.com/deep_link/4348613481450415432?url=";
var page_size = 10;

function renderTiki(data) {
    var html = '';
    let buttonGet = '';

    $.each(data, function(index, item) {
        if (item.code != '' || item.code != null) {
            buttonGet = '<a class="read-more" href="javascript:void(0)" onclick="s=prompt(Copy và sử dụng coupon bên dưới khi thanh toán:,' + item.code + '); window.open(' + affAuthor + item.link + '); ">Copy Code &amp; nhận ưu đãi</a>';
        } else {
            buttonGet = '<a href="' + affAuthor + item.link + '" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>';
        }


        html += '<div class="blog-post hentry index-post post-' + index + '"><div class="post-image-wrap"><a class="post-image-link" href="' + affAuthor + item.link + '" target="_blank"><img alt="' + index + '" class="post-thumb" src="' + item.icon_url + '"></a></div><div class="post-info"><h2 class="post-title post-title-fix"><a href="' + affAuthor + item.link + '" target="_blank"><b>Mã giảm giá Tiki - Áp dụng ' + item.short_description + '</b><span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: ' + item.end_time + '</span></a></h2><div class="post-meta"><p class="post-tag index-post-tag"><b>Giảm ' + item.discount + '</b></p></div><div><b>Điều kiện áp dụng</b>: <i>' + item.description + '</i></div></div>' + buttonGet + '</div></div>';
    });
	
    return html;
}

function renderLazada(data) {
    var html = '';
    let buttonGet = '';

    $.each(data, function(index, item) {
        if (item.code != '' || item.code != null) {
            buttonGet = '<a class="read-more" href="javascript:void(0)" onclick="s=prompt(Copy và sử dụng coupon bên dưới khi thanh toán:,' + item.code + '); window.open(' + affAuthor + item.link + '); ">Copy Code &amp; nhận ưu đãi</a>';
        } else {
            buttonGet = '<a href="' + affAuthor + item.link + '" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>';
        }

        html += '<div class="blog-post hentry index-post post-' + index + '"><div class="post-image-wrap"><a class="post-image-link" href="' + affAuthor + item.link + '" target="_blank"><img alt="' + index + '" class="post-thumb" src="' + item.media + '"></a></div><div class="post-info"><h2 class="post-title post-title-fix"><a href="' + affAuthor + item.link + '" target="_blank"><b>Mã giảm giá Lazada ' + item.amount + ' cho đơn hàng từ ' + item.min_spend + 'đ đặt mua tại ' + item.shop_name + '</b> <span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: ' + item.end_time + '</span></a></h2><div class="post-meta"><p style="font-size: 14px;"><i class="fa fa-shopping-cart"></i> Áp dụng cho đơn hàng từ:  <span style="float: none;text-decoration: line-through;color:red;font-weight: 700;">'+ item.price + '&nbsp;₫</span> còn <span style="float: none;color:green;font-weight: 700;">' + item.sale_price + '&nbsp;₫</span> (sử dụng được trên <strong>web</strong> và <strong>app lazada</strong>)</p></div><div><b>Sản phẩm khuyến mãi</b>: <i>'+ item.title + '</i></div></div>' + buttonGet + '</div></div>';
    });
	
    return html;
}

function renderShopee(data) {
    var html = '';
    let buttonGet = "";
    let title = "";
	let percent = 0;

    $.each(data, function(index, item) {
        if (item.voucher_code != '' || item.voucher_code != null) {
            buttonGet = '<a class="read-more" href="javascript:void(0)" onclick="s=prompt(Copy và sử dụng coupon bên dưới khi thanh toán:,' + item.voucher_code + '); window.open(' + affAuthor + item.link + '); ">Copy Code &amp; nhận ưu đãi</a>';
        } else {
            buttonGet = '<a href="' + affAuthor + item.link + '" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>';
        }
		
		if (item.discount_percentage != null) {
			percent = item.discount_percentage;
		}

        if (item.shop_name != null) {
            title = '<a href="' + affAuthor + item.link + '" target="_blank"><b>Mã giảm giá Shopee ' + percent + '%, tối đa ' + item.max_value + 'đ cho đơn hàng từ ' + item.min_spend + 'đ đặt mua sản phẩm tại ' + item.shop_name;
        } else {
            title = '<a href="' + affAuthor + item.link + '" target="_blank"><b>Mã giảm giá Shopee ' + percent + '%, tối đa ' + item.max_value + 'đ cho đơn hàng từ ' + item.min_spend;
        }

        html += '<div class="blog-post hentry index-post post-' + index + '"><div class="post-image-wrap"><a class="post-image-link" href="' + affAuthor + item.link + '" target="_blank"><img alt="' + index + '" class="post-thumb" src="' + item.media + '"></a></div><div class="post-info"><h2 class="post-title post-title-fix">' + title + '</b> <span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: '+ item.end_time + '</span> </a></h2><div style="margin-top: 20px;"><b>Điều kiện áp dụng</b>: <i>' + item.usage_terms + '</i></div></div>' + buttonGet + '</div></div>';
    });
	
    return html;
}

function getTiki() {
    $("#mgg").append('<p style="color:green;text-align:center;background:#fff"><img src="https://bestsales.vn/uploads/loading.gif" style="width:200px;display:block;margin:auto" alt="đang chờ"/><br/> <b>Đang tải dữ liệu....</b> </p>');
    if ($("#txtMgg").val()) {
        $.get(linkJson1, function(respone, status) {
            var data = respone;
            if (data) {
                $("#mgg").empty();
                $("#data-container1").empty();
                $('#pagination-container1').pagination({
                    dataSource: data,
                    pageSize: page_size,
                    showPrevious: false,
                    showNext: false,
                    callback: function(data, pagination) {
                        var html = renderTiki(data);
                        $('#data-container1').html(html);
                    }
                })
            }
        });
    }
}

function getLazada() {
    $.get(linkJson2, function(respone, status) {
		var data = respone;
		if (data) {
			$("#mgg").empty();
			$("#data-container2").empty();
			$('#pagination-container2').pagination({
				dataSource: data,
				pageSize: page_size,
				showPrevious: false,
				showNext: false,
				callback: function(data, pagination) {
					var html = renderLazada(data);
					$('#data-container2').html(html);
				}
			})
		}
	});
}

function getShopee() {
	$.get(linkJson3, function(respone, status) {
		var data = respone;
		if (data) {
			$("#mgg").empty();
			$("#data-container3").empty();
			$('#pagination-container3').pagination({
				dataSource: data,
				pageSize: page_size,
				showPrevious: false,
				showNext: false,
				callback: function(data, pagination) {
					var html = renderShopee(data);
					$('#data-container3').html(html);
				}
			})
		}
	});
}

$(function() {
    getTiki();
    getShopee();
    getLazada();

    $('.main-tab a').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(id).addClass('active');
        $(id).siblings().removeClass('active');
    });
});
