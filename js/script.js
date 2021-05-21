const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    //最後まで行ったら一枚目に戻る
    loop: true,
    spaceBetween: 24,    
    width: 274,
    effect: 'slide',

    breakpoints: {
      768: {
				spaceBetween: 40,
				width: 400,
      }
    },

    // ↓ マウスのスライドでスライドする
    // mousewheel: {
    //     invert: false,
    // },

    // If we need pagination
    //ドットの部分
    pagination: {
      el: '.swiper-pagination',
      //ドットをクリック可能に
      clickable: true,
    },
  
  });

///////////////
// スクロール検知
///////////////
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }

  if( $( this ).scrollTop() > $( '#top' ).outerHeight() ) {
    jQuery( 'header' ).addClass( 'add-scrolled' );
  } else {
    jQuery( 'header' ).removeClass( 'add-scrolled' );
  }
});
    

jQuery('a[href^="#"]').click(function() {


    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
  
  
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
  
  
    // ページのトップを基準にターゲットの位置を取得
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
  
  
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position
     },
      speed
    );
    return false;
  });


//////////////////////////
// アコーディオン
//////////////////////////
// jQuery('.faqs-item__question').on('click', function(){
//   // alert('クリック');
//   // Q クリックに対して、その次の要素の A の要素を表示
//   $(this).next().slideToggle(300);
//   // jQuery('.faqs-item__bars').toggleClass('is-active');
//   // ↑ これも大丈夫だけど ↓ もOk
//   $(this).children('.faqs-item__bars').toggleClass('is-active');

// });

$(function(){
	$('.faqs-item__answer:first, .faqs-item__answer:nth(1)').show();
  $('.faqs-item__bars:first, .faqs-item__bars:nth(1)').addClass('is-active');
	$('.faqs-item__question').click(function(){
		$(this).next().slideToggle(300);
    $(this).children('.faqs-item__bars').toggleClass('is-active');
	});
});


//////////////////////////
// ドロワー
//////////////////////////
$('.drawer-icon').on('click', function(e) {
  //クリック時に起こる動きの制御？ クリックイベントとセットで覚えとく
  // → aタグ はページ内で移動したりしちゃうからそれを抑える
  e.preventDefault();

  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-contents').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');

  return false;
});

$('.drawer-contents, .drawer-items a, .drawer-background').on('click', function(e) {
  e.preventDefault();

  $('.drawer-icon').removeClass('is-active');
  $('.drawer-contents').removeClass('is-active');
  $('.drawer-background').removeClass('is-active');

  return false;
});

//////////////////////////
// Form
//////////////////////////
let $submit = $( '#js-submit' )
$( '#js-form input, #js-form textarea' ).on('change', function() {

  // !== not equal("" からではなく) $$ かつ   → valueの値がからではなく
 if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="textKatakana"]').val() !== "" &&
      $('#js-form input[type="textKatakana"]').val().match( /^([ァ-ン]|ー)+$/ ) &&
      $('#js-form input[type="checkbox"]').prop( 'checked' ) === true
  ) {
      $submit.addClass( 'is-active' )
  } else {
      $submit.removeClass( 'is-active' )
  }

});

$( '#js-form input[type="textKatakana"]' ).on('change', function() {
  if (
    !$(this).val().match( /^([ァ-ン]|ー)+$/ )
  ) {
    alert( '全角カタカナで入力してください。' )
  }

});