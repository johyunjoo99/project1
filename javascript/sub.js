$(document).ready(function(){

    //제품 이미지 변경
    $('#product_infoimg img:nth-of-type(1)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_12.png')
    });

    $('#product_infoimg img:nth-of-type(2)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_24.png')
    });

    $('#product_infoimg img:nth-of-type(3)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_36.png')
    });

    $('#product_infoimg img:nth-of-type(4)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_48.png')
    });

    $('#product_infoimg img:nth-of-type(5)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_72.png')
    });

    $('#product_infoimg img:nth-of-type(6)').click(function(){
        $('#product_img img').attr('src','using_img/sub_img/noback_132.png')
    });

    //선택한 이미지 효과
    $('#product_infoimg img').click(function(){
        $('#product_infoimg img').removeClass('active2');
        $(this).addClass('active2');
    });


    //세트 선택
    $('#select_set span').click(function(){
        $('#select_set span').removeClass('active');
        $(this).addClass('active');
    });


    //가격 변경
    $('#select_set span:nth-of-type(1)').click(function(){
        $('#set_price span:nth-of-type(2)').text('24,400₩');
    });
    $('#select_set span:nth-of-type(2)').click(function(){
        $('#set_price span:nth-of-type(2)').text('53,000₩');
    });
    $('#select_set span:nth-of-type(3)').click(function(){
        $('#set_price span:nth-of-type(2)').text('78,000₩');
    });
    $('#select_set span:nth-of-type(4)').click(function(){
        $('#set_price span:nth-of-type(2)').text('105,000₩');
    });
    $('#select_set span:nth-of-type(5)').click(function(){
        $('#set_price span:nth-of-type(2)').text('153,000₩');
    });
    $('#select_set span:nth-of-type(6)').click(function(){
        $('#set_price span:nth-of-type(2)').text('262,000₩');
    });
});

    //구매 수량 변경
    $(function(){
        $('.plus').click(function(){
            if($('.price_value').val() > 9){
                alert("10개 초과 구매가 불가능합니다.");
                $('price_value').val(10);
            } else {
                $('.price_value').val(parseInt($('.price_value').val()) + 1);
            }
        });

        $('.minus').click(function(){
            if($('.price_value').val() < 2){
                alert("1개 이상 구매가 가능합니다.");
                $('.price_value').val(2);
            }
            $('.price_value').val(parseInt($(".price_value").val()) - 1);
        });
    });

    //쇼핑 상세정보 변경
    $(function(){
        $('#shopping > ul > li:nth-of-type(1)').click(function(){
            $('#detail_page').fadeIn();
            $('#delivery').hide();
            $('#review').hide();
            $('#inquiry').hide();
            $('#shopping').css({height:11200});
        });

        $('#shopping > ul > li:nth-of-type(2)').click(function(){
            $('#delivery').fadeIn();
            $('#detail_page').hide();
            $('#review').hide();
            $('#inquiry').hide();
            $('#shopping').css({height:600});
        });

        $('#shopping > ul > li:nth-of-type(3)').click(function(){
            $('#review').fadeIn();
            $('#delivery').hide();
            $('#detail_page').hide();
            $('#inquiry').hide();
            $('#shopping').css({height:500});
        });

        $('#shopping > ul > li:nth-of-type(4)').click(function(){
            $('#inquiry').fadeIn();
            $('#delivery').hide();
            $('#detail_page').hide();
            $('#review').hide();
            $('#shopping').css({height:500});
        });
    });