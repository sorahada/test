$(document).ready(function(){

    //아코디언
    $('.package_list li:first-child').addClass('active');
    $('.package_list li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active');

    });

    //facilities 슬라이드
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
      });
      var swiper2 = new Swiper(".mySwiper2", {
        
        thumbs: {
          swiper: swiper,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        speed : 1000,
      });





    // rooms 슬라이드
    const room_list = new Swiper('.room_list', {

        autoplay : {
            delay : 2000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

         // 방향 버튼 지정
         navigation : {   
            nextEl : '.swiper-button-next',  // 다음 버튼
            prevEl : '.swiper-button-prev',  // 이전 버튼
        },
      

        //centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView : '2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween : 46,  // 슬라이드 사이 여백
        breakpoints: {   // 반응형 슬라이드
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1600: {  // 가로해상도가 1600px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },

        loop : true,  // 슬라이드 반복 여부
        speed : 1000  // 슬라이드 동작 속도

    });

    //rooms 모달
    $('.all_wrap').hide();
    $('.room_img').click(function(){
        $('.all_wrap').fadeIn();
    });
    $('.all_close').click(function(){
        $('.all_wrap').fadeOut();
    });

    //rooms 모달 슬라이드
    const room_slide = new Swiper('.room_slide', {
        autoplay : {
            delay : 3500,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          },
        
          // 방향 버튼 지정
        navigation : {   
            nextEl : '.swiper-button-next',  // 다음 버튼
            prevEl : '.swiper-button-prev',  // 이전 버튼
        },

        // 페이저 버튼 지정
        pagination : {
            el : '.swiper-pagination',  // 버튼 태그 설정
            type : 'fraction',  // 버튼 종류 설정 'bullets'(기본) | 'fraction' | 'progressbar'
            clickable : true,  // 버튼 클릭 여부
        },


        loop : true,  // 슬라이드 반복 여부
        speed : 1000  // 슬라이드 동작 속도
    });


    $('.rooms_list > div').not(':first-child').hide(); // .rooms_list > div 중 :first-child를 제외하고 숨겨라
    $('.room_text > li').not(':first-child').hide(); // .room_text > div 중 :first-child를 제외하고 숨겨라


    $('.tap_list > li').click(function(){
        let tabNum = $(this).index();  // 변수 tabNum를 이름지어주고 .tap_list > li 중 현재 클릭한 요소(this)의 번호(index)를 가져옴
        $('.rooms_list > div').eq(tabNum).fadeIn(1000).siblings().hide();   // .rooms_list > div 중 클릭한 요소의 번호와 일치하는 번호(eq(tabNum))를 찾아서 fadeIn하고 형제요소는 숨겨라
        $('.room_text > li').eq(tabNum).fadeIn(1000).siblings().hide();    // .room_text > div 중 클릭한 요소의 번호와 일치하는 번호(eq(tabNum))를 찾아서 fadeIn하고 형제요소는 숨겨라
    });

   




   

    //탭 active
    $('.tap_list li:first-child').addClass('active');

    $('.tap_list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    
});