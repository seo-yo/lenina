1. 디자인 파일
   https://www.figma.com/file/eInowFdipsYvATRAtxmi2P/LENINA?type=design&node-id=349-389&mode=design&t=nv1tNl9CK6EUXifk-0

2. cafe24
   https://eclogin.cafe24.com/Shop/
   아이디 : lenina
   비밀번호 : Inditex11!!

   테스트 페이지
   PC https://lenina.kr/index_renewal.html
   MO https://m.lenina.kr/index_renewal.html

3. gsap
   https://gsap.com
   dev@yoil.co.kr / yoil3213!

   https://webstoryboy.github.io/gsap2023/gsap01.html
   https://webstoryboy.co.kr/1911

4. 질문창

https://gsap.com/community/forums/topic/40401-slider-auto-scrolling-draggable-scrollbar/#comment-201181

5. gsap codepen
   https://codepen.io/GreenSock/collections/?cursor=ZD0xJm89MCZwPTU=

6. css-compact
   shift+alt+f

7. gsap 강의
   https://www.creativecodingclub.com/courses/FreeGSAP3Express#sample

텍스트 이벤트
스크롤 부드럽게

무료 https://gsap.com/docs/v3/

가로 세로 스크롤 효과
가로 스크롤하면서 위아래
https://webstoryboy.github.io/gsap2023/gsap13.html
https://webstoryboy.github.io/gsap2023/gsap14.html

텍스트 효과 (단어별 나오기)
https://www.pantheoneaudio.com/

텍스트 효과 (한줄씩 나오기) - 20만원
https://clar.dev/fr/

이미지 모션 (하단에서 위로 페이드인)
https://forner.studio/ [링크 확인]

스크롤시 이미지변경
https://forner.studio/ [링크 확인]

스크롤 블러효과
??

sticky 후 스크롤 이미지 변경

- 스무스 효과
  https://webstoryboy.github.io/gsap2023/gsap15.html

레퍼런스
https://webstoryboy.co.kr/1922

https://webflow.com/made-in-webflow/website/Minimal-Goods?utm_medium=affiliate&ps_partner_key=NDg0MDA5Ng&ps_xid=SVjdcYQC8dAXzU&gsxid=SVjdcYQC8dAXzU&gspk=NDg0MDA5Ng
https://velog.io/@kmmkyung/GSAP

\*\* TODO ::

- 24 숫자 폰트 처리하기 (0)
- header back 보이는거 처리
- Swiper 접근성 추가
- 반응형 확인 [이미지배너 컨테이너 때문에 이슈있을 수있음]
- 클래스명 변경하기

```js
function cateTest() {
  let sections = document.querySelectorAll("main-category__item"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    splitHeadings = headings.map(
      (heading) => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })
    ),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  function gotoSection(index, direction) {
    index = wrap(index); // make sure it's valid
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
    if (currentIndex >= 0) {
      // The first time this function runs, current is -1
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
      },
      {
        yPercent: 0,
      },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        splitHeadings[index].chars,
        {
          autoAlpha: 0,
          yPercent: 150 * dFactor,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random",
          },
        },
        0.2
      );

    currentIndex = index;
  }

  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
}
```
