const smoother = ScrollSmoother.create({
  smooth: 5,
  effects: true,
  normalizeScroll: true,
});

ScrollTrigger.normalizeScroll({
  allowNestedScroll: true,
});
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

// gsap 카테고리

// 갤러리 애니메이션
function galleryAnimation() {
  const ani2 = gsap.timeline();
  ani2
    .from(".main-gallery__img[data-img='01']", {
      x: -100,
      autoAlpha: 0,
      duration: 4,
    })
    .from(".main-gallery__img[data-img='02']", {
      x: 100,
      autoAlpha: 0,
      duration: 4,
    })
    .from(".main-gallery__img[data-img='03']", {
      x: -100,
      autoAlpha: 0,
      duration: 4,
    })
    .from(".main-gallery__img[data-img='04']", {
      x: 200,
      autoAlpha: 0,
      duration: 2,
    })
    .from(".main-gallery__img[data-img='05']", {
      y: 100,
      autoAlpha: 0,
      duration: 4,
    });

  ScrollTrigger.create({
    animation: ani2,
    trigger: ".main-gallery",
    // start: "top top",
    start: "top-=" + headerHeight + " top", // 헤더높이 뺀값을 시작 점으로 잡기
    end: "+=2000",
    pinnedContainer: ".main-gallery__img-list",
    scrub: true,
    pin: true,
    ease: "circ.out",
    anticipatePin: 1,
    markers: false,
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
      duration: 3,
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
  const mainCategorySwiper = document.querySelector(".main-category");
  const swiperInner = document.querySelector(".main-category__inner");

  let cateSwiper = new Swiper(".main-category__swiper", {
    mousewheel: {
      releaseOnEdges: true,
    },
    resistance: false,
    parallax: true,
    touchStartPreventDefault: false,
    speed: 600,
  });
}

function categorySlide() {
  let cateSwiper = new Swiper(".main-category__swiper", {
    direction: "vertical",
    resistance: false,
    parallax: true,
    touchStartPreventDefault: false,
    preventInteractionOnTransition: false,
    speed: 500,
    sensitivity: 1,
  });

  function ActiveMouseWheel() {
    cateSwiper.mousewheel.enable();
    cateSwiper.mousewheel.sensitivity = 0.5;
    cateSwiper.mousewheel.releaseOnEdges = true;
  }

  function DisableMouseWheel() {
    cateSwiper.mousewheel.disable();
    cateSwiper.mousewheel.sensitivity = 0;
    cateSwiper.mousewheel.releaseOnEdges = false;
  }

  ScrollTrigger.create({
    trigger: ".main-category",
    start: "top top",
    end: "+=200%",
    // pinnedContainer: ".main-gallery__img-list",
    scrub: 5,
    pin: true,
    ease: "circ.out",
    anticipatePin: 1,
    markers: false,
    // pinSpacing: false,
    onEnter: () => {
      console.log("onEnter");
      ActiveMouseWheel();
    },

    onLeave: () => {
      console.log("onLeave");
      DisableMouseWheel();
    },
    onEnterBack: () => {
      console.log("onEnterBack");
      ActiveMouseWheel();
    },
    onLeaveBack: () => {
      console.log("onLeaveBack");
      DisableMouseWheel();
    },
  });
}

visualFixed();
ScrollTrigger.addEventListener("refresh", setupTextSplits);
ScrollTrigger.addEventListener("refresh", setupLineSplits);
categorySlide();
galleryAnimation(); // 갤러리 애니메이션
productAnimation(); // 프로덕트 섹션 [GSAP 가로스크롤 + 스크롤바]
astly.cloudflare.com/ajax/libs/jquery-loading-overlay/2.1.7/loadingoverlay.min.css:1 
        
        
       Failed to load resource: net::ERR_NAME_NOT_RESOLVED