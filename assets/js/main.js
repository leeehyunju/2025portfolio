


// // 부드럽게 스크롤 되도록 해주는 코드
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);




// 모션에 굴곡이 없게 일정하게 유지되는 코드
gsap.defaults({
    ease:"none"
})





// cursor
$(document).mousemove(function(e){
    // 내가 보고있는 뷰포트에서의 좌표
    // x의 좌표
    x=e.clientX;
    // y의 좌표
    y=e.clientY;

    gsap.to('.cursor',0,{
        x:x,
        y:y,
    })
})





// #header 색상변경
// create : to,from처럼 기준을 정하는게 아닌, 이벤트만 주고싶을때 쓰는 코드
ScrollTrigger.create({
    // 시작 지점
    trigger: "#footer",
    start:"0% 0%",
    // markers: true,
    // 도달했을때 dark클래스가 들어가고 빠졌을때는 dark클래스 빠짐
    toggleClass:{
        targets:"#header",
        className:"dark"
    }

})






// sc-visual 이미지 마우스 이벤트
$(document).mousemove(function(e){
  mouseX = e.clientX - window.innerWidth/2; 
  mouseY = e.clientY - window.innerHeight/2;

  $('.image-grid-item').each(function(){

      gsap.to(this,{
          x:mouseX/$(this).data('img'),
          y:mouseY/$(this).data('img')
      })
  })

})


// sc-visual 글자 모션
// split 쪼개는법
// 단어,글자
const introTxt = new SplitType('.sc-visual .title', { types: 'lines, words, chars',});

// 줄
// const splitLines = new SplitType('.split-line',{ types: });
// line마다 효과를 주기위해 하나의 부모를 더 준 코드
// $('.line').wrap('<div class="line-wrap">')

// sc-side 글자모션
gsap.from('.sc-visual .title .char',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 100%",
        end:"0% 100%",
        // markers:true,
        // 도달했을때/떠났을때/도달했을때/다시 재실행되는 코드
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.03,
})







// sc-about 스크롤 모션
// const textElements = gsap.utils.toArray('.sc-about .scroll-text');
// const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".sc-intro .col-bottom",
//       start: "0% 0%",
//       endTrigger: ".sc-about",
//       end: "100% 100%",
//       // markers: true,
//       scrub: true,
//     }
//   });
  
//   textElements.forEach((text, index) => {
//     tl.to(text, {
//       backgroundSize: '100%',
//       ease: 'none',
//       duration: 1,
//       delay: index * 0.1,  // 각 텍스트에 딜레이를 주어 순차적으로 애니메이션
//     });
//   });


// sc-about 글자 모션
// SplitType을 사용하여 텍스트를 줄(lines) 단위로 분할
const aboutTxt = new SplitType('.sc-about .text-top .text', { types: 'lines, words, chars' });

// 각 .line 요소를 감싸는 .line-wrap을 동적으로 추가
$('.sc-about .text-top .text .line').each(function(){
    $(this).wrap('<div class="line-wrap"></div>');
});

// GSAP 애니메이션 적용 (줄 단위)
gsap.from('.sc-about .text-top .text .line',{
    scrollTrigger: {
        trigger: ".sc-visual .title",
        start: "0% 0%",  
        end: "100% 100%",
        // markers:true,
        toggleActions: "none play none reset"
    },
    yPercent: 100,  
    opacity: 0,  // 점점 나타나게
    stagger: 0.2,  // 줄마다 순차적으로 등장
    ease: "none"
});








// sc-showcase 슬라이드
a = gsap.timeline({
  scrollTrigger:{
      trigger: ".sc-showcase",
      start:"0% 0%",
      end:"100% 100%",
      // markers: true,
      scrub:0,
    },
})
a.to('.sc-showcase .item-area:nth-child(1)',{
 'clip-path': 'inset(0% 0% 100% 0%)'
})
a.to('.sc-showcase .item-area:nth-child(2)',{
 'clip-path': 'inset(0% 0% 100% 0%)'
})
a.to('.sc-showcase .item-area:nth-child(3)',{
 'clip-path': 'inset(0% 0% 100% 0%)'
})

// // sc-showcase 스크롤 모션
// showcaseTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".sc-showcase",
//         start: "0% 0%",
//         end: "100% 100%",
//         // markers: true,
//         scrub: 0,
//     },
// });

// // 첫 번째 이미지 텍스트 표시
// // showcaseTl.to($('.sc-showcase .item-area .content'), { autoAlpha: 0, duration: 0 }) // 모든 텍스트 숨김
// // showcaseTl.to($('.sc-showcase .item-area .content')[0], { autoAlpha: 1, duration: 0 }); // 첫 번째 텍스트 표시

// // custo 이미지 올라옴 + 텍스트 변경
// showcaseTl.to($('.sc-showcase .item-area .thumb')[3], { height: 0 })
//         //   .to($('.sc-showcase .item-area .content'), { autoAlpha: 0, duration: 0 }, "<") // 모든 텍스트 숨김
//         //   .to($('.sc-showcase .item-area .content')[3], { autoAlpha: 1 }, "<"); // 4번째 텍스트 표시

// // the art 이미지 올라옴 + 텍스트 변경
// showcaseTl.to($('.sc-showcase .item-area .thumb')[2], { height: 0 })
//         //   .to($('.sc-showcase .item-area .content'), { autoAlpha: 0, duration: 0 }, "<") // 모든 텍스트 숨김
//         //   .to($('.sc-showcase .item-area .content')[2], { autoAlpha: 1 }, "<"); // 3번째 텍스트 표시

// // 우아한형제들 이미지 올라옴 + 텍스트 변경
// showcaseTl.to($('.sc-showcase .item-area .thumb')[1], { height: 0 })
//         //   .to($('.sc-showcase .item-area .content'), { autoAlpha: 0, duration: 0 }, "<") // 모든 텍스트 숨김
//         //   .to($('.sc-showcase .item-area .content')[1], { autoAlpha: 1 }, "<"); // 2번째 텍스트 표시








// 특정 포인트에서 스크롤 트리거 없애기
let mm = gsap.matchMedia();

mm.add("(min-width: 960px)", () => {
    // sc-side 슬라이드
possibilityTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-side .side-slide",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 이 속성을 추가해줘야함 / 갱신.재실행
        // 창 사이즈를 수축증가해도 밑의 x수치가 갱신되도록 해줌
        invalidateOnRefresh:true,
      },
})
// to로 완성값을 셋팅해줌
possibilityTl.to('.sc-side .slide-inner',{
    // transform %
    // 왼쪽으로
    xPercent:-100,
    // 내가 보고있는 창의 크기(화면의 크기만큼)
       x: function() {
            return window.innerWidth-140;
       }
})
});




// sc-side 슬라이드
// possibilityTl = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".sc-side .side-slide",
//         start:"0% 0%",
//         end:"100% 100%",
//         // markers: true,
//         scrub:0,
//         // 이 속성을 추가해줘야함 / 갱신.재실행
//         // 창 사이즈를 수축증가해도 밑의 x수치가 갱신되도록 해줌
//         invalidateOnRefresh:true,
//       },
// })
// // to로 완성값을 셋팅해줌
// possibilityTl.to('.sc-side .slide-inner',{
//     // transform %
//     // 왼쪽으로
//     xPercent:-100,
//     // 내가 보고있는 창의 크기(화면의 크기만큼)
//        x: function() {
//             return window.innerWidth-140;
//        }
// })


// split 쪼개는법
// 단어,글자
const headTxt = new SplitType('.sc-side h2', { types: 'lines, words, chars',});

// 줄
// const splitLines = new SplitType('.split-line',{ types: });
// line마다 효과를 주기위해 하나의 부모를 더 준 코드
// $('.line').wrap('<div class="line-wrap">')

// sc-side 글자모션
gsap.from('.sc-side .headline .word',{
    scrollTrigger:{
        trigger:".sc-side .headline",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        // 도달했을때/떠났을때/도달했을때/다시 재실행되는 코드
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.03,
    ease: "none"
})







// split 쪼개는법
// 단어,글자
const footerTxt = new SplitType('#footer .copy', { types: 'lines, words, chars',});

// 줄
// const splitLines = new SplitType('.split-line',{ types: });
// line마다 효과를 주기위해 하나의 부모를 더 준 코드
// $('.line').wrap('<div class="line-wrap">')

// footer 글자모션
gsap.from('#footer .bottom-area .char',{
    scrollTrigger:{
        trigger:"#footer .bottom-area",
        start:"0% 100%",
        end:"0% 70%",
        // markers:true,
        // 도달했을때/떠났을때/도달했을때/다시 재실행되는 코드
        toggleActions:"none play none reset"
    },
    yPercent:100,
    stagger:0.03,
})





// sc-goal 스크롤 모션
// const descElements = gsap.utils.toArray('.sc-goal .scroll-text');
// const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".sc-goal",
//       start: "0% 0%",
//       end: "100% 100%",
//     //   markers: true,
//       scrub: true,
//     }
//   });
  
//   descElements.forEach((text, index) => {
//     timeline.to(text, {
//       backgroundSize: '100%',
//       ease: 'none',
//       duration: 1,
//       delay: index * 0.1,  // 각 텍스트에 딜레이를 주어 순차적으로 애니메이션
//     });
//   });

  
// // sc-goal 글자 모션
// // SplitType을 사용하여 텍스트를 줄(lines) 단위로 분할
// const goalTxt = new SplitType('.sc-goal .text-top .text', { types: 'lines, words, chars' });

// // 각 .line 요소를 감싸는 .line-wrap을 동적으로 추가
// $('.sc-goal .text-top .text .line').each(function(){
//     $(this).wrap('<div class="line-wrap"></div>');
// });

// // GSAP 애니메이션 적용 (줄 단위)
// gsap.from('.sc-goal .text-top .text .line',{
//     scrollTrigger: {
//         trigger: ".sc-goal",
//         start: "0% 0%",  
//         end: "100% 100%",
//         // markers:true,
//         toggleActions: "none play none reset"
//     },
//     yPercent: 100,  
//     opacity: 0,  // 점점 나타나게
//     stagger: 0.2,  // 줄마다 순차적으로 등장
//     ease: "none"
// });

// sc-goal 글자 모션
// SplitType을 사용하여 텍스트를 줄(lines) 단위로 분할
const goalTxt = new SplitType('.sc-goal .text-top .text', { types: 'lines, words, chars' });

// 각 .line 요소를 감싸는 .line-wrap을 동적으로 추가
$('.sc-goal .text-top .text .line').each(function(){
    $(this).wrap('<div class="line-wrap"></div>');
});

// GSAP 애니메이션 적용 (줄 단위)
gsap.from('.sc-goal .text-top .text .line',{
    scrollTrigger: {
        trigger: ".sc-side",
        start: "100% 100%",  
        end: "100% 100%",
        // markers:true,
        toggleActions: "none play none reset"
    },
    yPercent: 100,  
    opacity: 0,  // 점점 나타나게
    stagger: 0.2,  // 줄마다 순차적으로 등장
    ease: "none"
});

  





// // 스크롤해서 타겟으로 도달
//  // 모든 메뉴에 클릭 이벤트 추가
//   $(".title").on("click", function (e) {
//       e.preventDefault() // 페이지 새로고침 방지

//       let target = $(this).data("target") // data-target 값 가져오기
//       if (target) {
//           lenis.scrollTo(target, {
//               duration: 1.5, // 스크롤 지속 시간 (1.5초)
//               // offset: -10, // 스크롤 위치 조정
//               // easing: (t) => t * (2 - t) // 가속도 적용
//           })
//       }
//   })


// 스크롤해서 타겟으로 도달
$(".title").on("click", function (e) {
  e.preventDefault(); // 페이지 새로고침 방지

  let target = $(this).data("target"); // data-target 값 가져오기
  let link = $(this).attr("href"); // 링크 주소 가져오기
  let isLinkMenu = $(this).hasClass("link-menu"); // 새 페이지로 이동할 메뉴 확인

  // 새 페이지로 이동하는 메뉴
  if (isLinkMenu && link) {
      window.open(link, "_blank"); // 새 탭에서 링크 열기
  } else if (target) {
      // 스크롤 이동
      lenis.scrollTo(target, {
          duration: 1.5, // 스크롤 지속 시간 (1.5초)
      });
  }
});







// 사이드네브 버튼 작동
$('.btn-menu').click(function(){
    $('#header .side-nav').addClass('on')
    // 사이드네브가 활성화되면서 페이지 스크롤이 비활성화됨
    $('body').addClass('scroll-x'); 
  });
    
  // 사이드네브 닫기버튼 눌렀을때
  $('.side-nav .btn-close').click(function(){
    $('.side-nav').removeClass('on')
    // 메뉴를 닫으면서 스크롤 다시 활성화
    $('body').removeClass('scroll-x'); 
  })



    // 메뉴 항목 클릭 시 메뉴 닫기
    $('.side-item a').on('click', function() {
        $('.side-nav').removeClass('on'); // 'on' 클래스 제거하여 메뉴 닫기
    });

    // btn-close 클릭 시 메뉴 닫기
    $('.btn-close').on('click', function() {
        $('.side-nav').removeClass('on');
    });



    // 하위메뉴 글자모션
//     menu = gsap.from('#header .side-nav .side-list .side-item .child',{
//         delay:0.3,
//         // 전값이 이거였다
//         yPercent:100,
//         paused:true,
//         stagger:0.1,
// })


