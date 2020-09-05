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
        if(jQuery(window).scrollTop() > 150 ) { /**높이 픽셀 조정**/
            jQuery('.menu_box').addClass('fixed');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.menu_box').removeClass('fixed');
        }
        return false;
    });
    }
    if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 200 ) { /**높이 픽셀 조정**/
            jQuery('.slideLeft').addClass('ani');
            jQuery('.fade').addClass('ani2');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.slideLeft').removeClass('ani');
            jQuery('.fade').removeClass('ani2');
        }
        return false;
    });
    }
    if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 1000 ) { /**높이 픽셀 조정**/
            jQuery('.section3').addClass('ani3');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.section3').removeClass('ani3');
        }
        return false;
    });
    }
    if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 2000 ) { /**높이 픽셀 조정**/
            jQuery('.section4').addClass('ani4');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.section4').removeClass('ani4');
        }
        return false;
    });
    }
    if (jQuery(window).width() > 0) {
    jQuery(window).on("scroll",function(ev){
        if(jQuery(window).scrollTop() > 3000 ) { /**높이 픽셀 조정**/
            jQuery('.section5').addClass('ani5');  /**위의 높이에서 .fixed 클래스를 추가합니다. 스타일에서 자유롭게 수치 조절 가능합니다.**/
        }
        else{
            jQuery('.section5').removeClass('ani5');
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

        
    

    $(function(){
            $(".icon").click(function(){
                $(".menu_box li").slideToggle();
            });
        });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.789062, 126.698690), // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
};



var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/mapMarker.png', // 마커이미지의 주소입니다    
imageSize = new kakao.maps.Size(51, 77), // 마커이미지의 크기입니다
imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

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
      slidesPerView: 3.5,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



    
    