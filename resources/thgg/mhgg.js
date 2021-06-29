var linkJson1 = "https://json.tonghopgiamgia.com/polyxgo-tiki.json";
var linkJson2 = "https://json.tonghopgiamgia.com/polyxgo-lazada.json";
var linkJson3 = "https://json.tonghopgiamgia.com/polyxgo-shopee.json";
var affAuthor = "https://go.isclix.com/deep_link/4348613481450415432?url=";

function copyCodeOpenLink(code, link) {
    document.getElementById("myCopy").value = code;
    var copyText = document.getElementById("myCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    $(".copy").removeClass("active");
    $("#" + code + " .copy").addClass("active");
    setTimeout(window.open(link), 900);
}

function renderHTML1(data) {
    var html = '';
    let buttonGet = "";
    let code = "";
    let content = "";

    $.each(data, function(index, item) {
        if (item.code != '') {
            buttonGet = ` <a href="javascript:;" onclick="copyCodeOpenLink('` + item.code + `', '` + affAuthor + item.link + `')" class="read-more">Copy Code &amp; nhận ưu đãi</a>`;
        } else {
            buttonGet = ` <a href="` + affAuthor + item.link + `" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>`;
        }

        if (item.content != null) {
            content = item.content;
        }
        html += `<div class="blog-post hentry index-post post-` + index + `">
                                                <div class="post-image-wrap">
                                                    <a class="post-image-link" href="` + affAuthor + item.link + `" target="_blank">
                                                     <img alt="` + index + `" class="post-thumb" src="` + item.icon_url + `">
                                                    </a>
                                                </div>
                                                <div class="post-info">
                                                    <h2 class="post-title post-title-fix">
                                                       <a href="` + affAuthor + item.link + `" target="_blank"><b>Mã giảm giá Tiki - Áp dụng ` + item.short_description + `
                                                       </b> <span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: ` + item.end_time + `</span>
                                                       </a>
                                                    </h2>
                                                    <div class="post-meta">
                                                       <p class="post-tag index-post-tag"><b>Giảm ` + item.discount + `</b></p>
                                                    </div>
                                                    <div><b>Điều kiện áp dụng</b>: <i>` + item.description + `</i></div>
                                                    </div>
                                                    <div>` + code + `</div>
                                                    ` + buttonGet + `
                                                 </div>
                                            </div>
                                        `;
    });
    return html;
}

function renderHTML2(data) {
    var html = '';
    let buttonGet = "";
    let code = "";
    let content = "";

    $.each(data, function(index, item) {
        if (item.code != '') {
            buttonGet = ` <a href="javascript:;" onclick="copyCodeOpenLink('` + item.code + `', '` + affAuthor + item.link + `')" class="read-more">Copy Code &amp; nhận ưu đãi</a>`;
        } else {
            buttonGet = ` <a href="` + affAuthor + item.link + `" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>`;
        }

        if (item.content != null) {
            content = item.content;
        }
        html += `<div class="blog-post hentry index-post post-` + index + `">
                                                <div class="post-image-wrap">
                                                    <a class="post-image-link" href="` + affAuthor + item.link + `" target="_blank">
                                                     <img alt="` + index + `" class="post-thumb" src="` + item.media + `">
                                                    </a>
                                                </div>
                                                <div class="post-info">
                                                    <h2 class="post-title post-title-fix">
                                                       <a href="` + affAuthor + item.link + `" target="_blank"><b>Mã giảm giá Lazada ` + item.amount + ` cho đơn hàng từ ` + item.min_spend + `đ đặt mua tại ` + item.shop_name + `
                                                       </b> <span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: ` + item.end_time + `</span>
                                                       </a>
                                                    </h2>
                                                    <div class="post-meta">
                                                       <p style="font-size: 14px;"><i class="fa fa-shopping-cart"></i> Áp dụng cho đơn hàng từ:  <span style="float: none;text-decoration: line-through;color:red;font-weight: 700;">` + item.price + `&nbsp;₫</span> còn <span style="float: none;color:green;font-weight: 700;">` + item.sale_price + `&nbsp;₫</span> (sử dụng được trên <strong>web</strong> và <strong>app lazada</strong>)</p>
                                                    </div>
                                                    <div><b>Sản phẩm khuyến mãi</b>: <i>` + item.title + `</i></div>
                                                    </div>
                                                    <div>` + code + `</div>
                                                    ` + buttonGet + `
                                                 </div>
                                            </div>
                                        `;
    });
    return html;
}

function renderHTML3(data) {
    var html = '';
    let buttonGet = "";
    let code = "";
    let content = "";

    $.each(data, function(index, item) {
        if (item.code != '') {
            buttonGet = ` <a href="javascript:;" onclick="copyCodeOpenLink('` + item.code + `', '` + affAuthor + item.link + `')" class="read-more">Copy Code &amp; nhận ưu đãi</a>`;
        } else {
            buttonGet = ` <a href="` + affAuthor + item.link + `" target="_blank" class="read-more get-coupon">Nhận ưu đãi</a>`;
        }

        if (item.content != null) {
            content = item.content;
        }
        html += `<div class="blog-post hentry index-post post-` + index + `">
                                                <div class="post-image-wrap">
                                                    <a class="post-image-link" href="` + affAuthor + item.link + `" target="_blank">
                                                     <img alt="` + index + `" class="post-thumb" src="` + item.media + `">
                                                    </a>
                                                </div>
                                                <div class="post-info">
                                                    <h2 class="post-title post-title-fix">
                                                       <a href="` + affAuthor + item.link + `" target="_blank"><b>Mã giảm giá Shopee ` + item.discount_percentage + `%, tối đa ` + item.max_value + `đ cho đơn hàng từ ` + item.min_spend + `đ đặt mua sản phẩm tại ` + item.shop_name + `
                                                       </b> <span class="label label-danger"><i class="fa fa-clock-o"></i> Hạn sử dụng đến: ` + item.end_time + `</span>
                                                       </a>
                                                    </h2>
                                                    <div style="margin-top: 20px;"><b>Điều kiện áp dụng</b>: <i>` + item.usage_terms + `</i></div>
                                                    </div>
                                                    <div>` + code + `</div>
                                                    ` + buttonGet + `
                                                 </div>
                                            </div>
                                        `;
    });
    return html;
}

function getTiki() {
    $("#mgg").append(`<p style="color:green;text-align:center;background:#fff"><img src="https://bestsales.vn/uploads/loading.gif" style="width:200px;display:block;margin:auto" alt="đang chờ"/><br/> <b>Đang tải dữ liệu....</b> </p>`);
    if ($("#txtMgg").val()) {
        $.get(linkJson1, function(respone, status) {
            //console.log(respone);
            var data = respone;
            if (data) {
                $("#mgg").empty();
                $("#data-container1").empty();
                $('#pagination-container1').pagination({
                    dataSource: data,
                    pageSize: 10,
                    showPrevious: false,
                    showNext: false,
                    callback: function(data, pagination) {
                        var html = renderHTML1(data);
                        $('#data-container1').html(html);
                    }
                })
            }
        });
    }
}

function getLazada() {
    if ($("#txtMgg").val()) {
        $.get(linkJson2, function(respone, status) {
            //console.log(respone);
            var data = respone;
            if (data) {
                $("#mgg").empty();
                $("#data-container2").empty();
                $('#pagination-container2').pagination({
                    dataSource: data,
                    pageSize: 10,
                    showPrevious: false,
                    showNext: false,
                    callback: function(data, pagination) {
                        var html = renderHTML2(data);
                        $('#data-container2').html(html);
                    }
                })
            }
        });
    }
}

function getShopee() {
    if ($("#txtMgg").val()) {
        $.get(linkJson3, function(respone, status) {
            //console.log(respone);
            var data = respone;
            if (data) {
                $("#mgg").empty();
                $("#data-container3").empty();
                $('#pagination-container3').pagination({
                    dataSource: data,
                    pageSize: 10,
                    showPrevious: false,
                    showNext: false,
                    callback: function(data, pagination) {
                        var html = renderHTML3(data);
                        $('#data-container3').html(html);
                    }
                })
            }
        });
    }
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
