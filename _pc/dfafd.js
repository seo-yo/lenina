// popup
$(function () {
  dePopup();
});
function dePopup() {
  function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
  }
  cookiedata = document.cookie;
  if (cookiedata.indexOf("de-popup=done") < 0) {
    $(".de-popup, .de-popup-bg").css("display", "block");
  } else {
    $(".de-popup, .de-popup-bg").css("display", "none");
  }
  let popupSwiper = new Swiper(".popup-list", {
    speed: 1000,
    touchReleaseOnEdges: true,
    preloadImages: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".de-popup-scrollbar",
      draggable: true,
    },
  });
  $(".de-popup .closetoday").click(function () {
    setCookie("de-popup", "done", 1);
    $(".de-popup, .de-popup-bg").css("display", "none");
  });
  $(".de-popup .close").click(function () {
    $(".de-popup, .de-popup-bg").css("display", "none");
  });
}

const headerHeight = "70px";

// 텍스트 애니메이션
const textTarget = document.querySelectorAll(".text-animation");
const lineTextTarget = document.querySelectorAll(".line-text-animation");
function setupTextSplits() {
  textTarget.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart none resume reverse",
        start: "top 80%",
      },
      duration: 0.6,
      ease: "circ.out",
      y: "100%",
      stagger: 0.02,
    });
  });
}
function setupLineSplits() {
  // SplitText 플러그인을 사용하여 텍스트 분할
  const split = new SplitText(lineTextTarget, { type: "lines" });

  // GSAP 타임라인 생성
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-bottom-text-banner", // 트리거 요소
      start: "top 60%", // 트리거 요소 상단에 닿을 때 실행
      // end: "bottom 20%", // 트리거 요소 하단에 닿을 때 실행
      id: "마지막",
      toggleActions: "play none none reverse", // 진입 시 재생, 벗어날 때 역방향 재생
    },
  });

  // 애니메이션 설정
  tl.from(split.lines, {
    opacity: 0,
    y: "50%",
    duration: 1,
    ease: "power4.out",
    stagger: {
      each: 0.05, // 각 줄 사이의 시간 간격
      from: "start", // 앞에서부터 순차적으로 실행
    },
  });
}

// 메인비쥬얼 Pin 고정
function visualFixed() {
  const visualSection = document.querySelector(".main-visual");

  ScrollTrigger.create({
    trigger: visualSection,
    start: "top top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    pinSpacing: false,
  });
}

// 갤러리 애니메이션
function galleryAnimation() {
  const ani2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-gallery",
      start: "top-=" + headerHeight + " top",
      end: "+=2000",
      pinnedContainer: ".main-gallery__img-list",
      scrub: true,
      pin: true,
      ease: "circ.out",
      anticipatePin: 1,
      markers: false,
    },
  });

  ani2
    .from(".main-gallery__img[data-img='01']", {
      x: -100,
      autoAlpha: 0,
      duration: 4,
    })
    .from(
      ".main-gallery__img[data-img='04']",
      {
        x: 200,
        autoAlpha: 0,
        duration: 4,
      },
      "<"
    )
    .from(".main-gallery__img[data-img='02']", {
      x: 100,
      autoAlpha: 0,
      duration: 4,
    })
    .from(
      ".main-gallery__img[data-img='03']",
      {
        x: 200,
        autoAlpha: 0,
        duration: 4,
      },
      "<"
    )
    .from(".main-gallery__img[data-img='05']", {
      y: 100,
      autoAlpha: 0,
      duration: 4,
    });
}

// 프로덕트 섹션 [GSAP 가로스크롤 + 스크롤바]
function productAnimation() {
  const container = document.querySelector(".main-products");
  const wrapper = container.querySelector(".main-products__item-list");
  const scrollbar = document.querySelector(".main-products__scrollbar");
  const scrollbarThumb = document.querySelector(".main-products__scrollbar-thumb");

  // 스크롤을 관리할 Tween을 생성합니다.
  const scrollTween = gsap.to(wrapper, {
    x: () => -(wrapper.clientWidth - container.clientWidth),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: () => `+=${wrapper.clientWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      duration: 2,
      onUpdate: (self) => {
        const progress = self.progress;
        const scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
        const thumbWidth = scrollbarThumb.offsetWidth;
        const maxThumbPosition = scrollbar.clientWidth - thumbWidth;
        const thumbPosition = progress * maxThumbPosition;
        gsap.set(scrollbarThumb, { x: thumbPosition });

        // 스크롤바의 길이를 조정합니다.
        let scrollbarWidth = container.clientWidth * (container.clientWidth / wrapper.clientWidth);
        scrollbarWidth = Math.min(container.clientWidth, scrollbarWidth); // 최대 컨테이너 너비로 제한합니다.
        gsap.set(scrollbar, { width: scrollbarWidth });
      },
    },
  });

  // 스크롤 바를 드래그할 때 내용물을 스크롤하도록 설정합니다.
  Draggable.create(scrollbarThumb, {
    type: "x",
    bounds: ".main-products__scrollbar",
    inertia: true,
    onDrag: function () {
      const progress = this.x / (this.maxX - this.minX);
      const scrollX = gsap.utils.mapRange(
        0,
        1,
        0,
        wrapper.clientWidth,
        progress * (wrapper.clientWidth - container.clientWidth)
      );
      TweenMax.to(scrollTween, {
        progress: progress,
        scrollTo: { x: scrollX },
      });
    },
  });
}

function categorySlide() {
  let currentSlideIndex = 0;
  const swiperInner = document.querySelector(".main-category__inner");
  const cateSwiper = new Swiper(".main-category__swiper", {
    direction: "vertical",
    resistance: false,
    touchReleaseOnEdges: true,
    parallax: true,
    touchStartPreventDefault: false,
    preventInteractionOnTransition: false,
    speed: 500,
    sensitivity: 1,
    resistance: false,
    mousewheel: {
      enabled: true,
    },
    on: {
      slideChange: function () {
        currentSlideIndex = this.activeIndex;
      },
      slideChangeTransitionEnd: function () {
        if (this.isEnd || this.isBeginning) {
          swiperInner.classList.remove("fixed");
          document.body.style.overflow = "auto";
          DisableMouseWheel();

          if (this.isEnd) {
            window.scrollTo(0, cateSwiperSection.offsetTop + 1);
          } else if (this.isBeginning) {
            window.scrollTo(0, cateSwiperSection.offsetTop - 1);
          }
        }
      },
    },
  });

  // 현재 스크롤 위치 추적
  let CONTAINER_SCROLL_TOP = 0;
  let currentScroll;
  let deltaY; //-올라가는거 + 내려가는거

  const cateSwiperSection = document.querySelector(".main-category");
  window.addEventListener("scroll", (e) => {
    currentScroll = document.documentElement.scrollTop; // 현재 스크롤바 위치
    deltaY = currentScroll - CONTAINER_SCROLL_TOP;

    if (cateSwiperSection.getBoundingClientRect().top <= 0) {
      if (currentSlideIndex === 0 && deltaY > 0) {
        swiperInner.classList.add("fixed");
        document.body.style.overflow = "hidden";
        ActiveMouseWheel();
      }
    }
    if (cateSwiper.activeIndex !== 0 && deltaY < 0 && cateSwiperSection.getBoundingClientRect().top >= 0) {
      swiperInner.classList.add("fixed");
      document.body.style.overflow = "hidden";
      ActiveMouseWheel();
    }

    CONTAINER_SCROLL_TOP = currentScroll;
  });

  const scrollHandler = () => {
    CONTAINER_SCROLL_TOP = $CONTAINER.scrollTop;
    console.log(CONTAINER_SCROLL_TOP);
    scrollFixedTab(); // 탭 고정 여부 업데이트
  };

  function ActiveMouseWheel() {
    cateSwiper.mousewheel.enable();
    cateSwiper.mousewheel.sensitivity = 0.5;
    // cateSwiper.mousewheel.releaseOnEdges = true;
  }

  function DisableMouseWheel() {
    cateSwiper.mousewheel.disable();
    cateSwiper.mousewheel.sensitivity = 0;
    cateSwiper.mousewheel.releaseOnEdges = false;
  }
}

console.log("테스트5");

visualFixed();
ScrollTrigger.addEventListener("refresh", setupTextSplits);
ScrollTrigger.addEventListener("refresh", setupLineSplits);
categorySlide();
galleryAnimation(); // 갤러리 애니메이션
productAnimation(); // 프로덕트 섹션 [GSAP 가로스크롤 + 스크롤바]
