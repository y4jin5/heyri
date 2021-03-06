  AOS.init();

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

	/**스크롤이 설정한 높이 이상 내려갔을때 스타일추가하기**/
	if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 150 ) { 
            jQuery('.menu_box').addClass('fixed');

        }
        else{
            jQuery('.menu_box').removeClass('fixed');

            
        }
        return false;
    });
    }

    if (jQuery(window).width() > 0) {
        jQuery(window).on("scroll",function(ev){
            if(jQuery(window).scrollTop() > 3500 ) { /**높이 픽셀 조정**/
                jQuery('.mouse').addClass('a-mouse');
                jQuery('.mouse').removeClass('mouse');
                jQuery('.m_scroll_arrows').addClass('a_scroll_arrows'); 
                jQuery('.m_scroll_arrows').removeClass('m_scroll_arrows');
                
            }
            else{
                jQuery('.mouse').removeClass('a-mouse');
                jQuery('.a-mouse').addClass('mouse');
                jQuery('.a_scroll_arrows').addClass('m_scroll_arrows');
                jQuery('.a_scroll_arrows').removeClass('a_scroll_arrows'); 
            }
            return false;
        });
        }
  
        

    $(function(){
            $("#home").click(function(){
                var offset=$("#section01").offset();
                $("html").animate({scrollTop:offset.top},700);
            })
            $("#intro").click(function(){
                var offset=$("#section02").offset();
                $("html").animate({scrollTop:offset.top},700);
            })
            $("#place").click(function(){
                var offset=$("#section03").offset();
                $("html").animate({scrollTop:offset.top},700);
            })
            $("#nearby").click(function(){
                var offset=$("#section04").offset();
                $("html").animate({scrollTop:offset.top},700);
            })
            $("#contact").click(function(){
                var offset=$("#section05").offset();
                $("html").animate({scrollTop:offset.top},700);
            })

        })
        

        $( '.ontop' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 700 );
            return false;
        } );    
    

    $(function(){
            $(".icon").click(function(){
                $(".menu_box li").slideToggle();
            });
        });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.789062, 126.698690), // 지도의 중심좌표
    level: 5 // 지도의 확대 레벨
};



var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/compass.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(73, 77), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(38, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
markerPosition = new kakao.maps.LatLng(37.789062, 126.698690); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
position: markerPosition,
image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
'  <a href="http://kko.to/SopIvQrYp" target="_blank">' +
'    <span class="title">헤이리예술마을</span>' +
'  </a>' +
'</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.789062, 126.698690);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
map: map,
position: position,
content: content,
yAnchor: 1 
});

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
    //   centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    500:{
        centeredSlides: true,
        slidesPerView: 1.5,
        loop:true,
        spaceBetween: 20,
    },  
      640: {
        
        slidesPerView: 1.5,
        loop:true,
        spaceBetween: 20,
      },
      768: {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

    window.onload = function () {
        var elm = ".box";
        $(elm).each(function (index) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } 
                else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        try{
                            moveTop = $(elmSelecter).next().offset().top;
                        }catch(e){}
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        try{
                            moveTop = $(elmSelecter).prev().offset().top;
                        }catch(e){}
                    }
                }
                 
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
            });
        });
    }