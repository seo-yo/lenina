<!-- https://sdsupport.cafe24.com/module/board/gallery/list.html -->

0. 작업물
   https://lenina.kr/board/lookbook/list.html
   https://m.lenina.kr/board/lookbook/list.html

1. 파일 경로

   1. html
      board/gallery/lookbook/list.html
      [생성] board/gallery/lookbook/read.html

   2. css
      [수정] /layout/basic/css/layout.css |
      [수정] /css/module/board/readPackage.css | read.html
      [생성] /css/module/board/gallary_4grid_board.css

작업 특이사항

- 일반 게시판 -> 갤러리 게시판 커스텀 이슈
  첨부파일로 업로드한 이미지가 섬네일로 나올 시, 이미지가 깨져보이는 현상
  -> 갤러리 게시판에서는 "목록 이미지 리사이징 설정크기" 로 자동 리사이징 처리안함 처리로 깨지지않게 가능하나
  현재 아무리 큰 이미지를 업로드해도 n x 150 정도의 사이즈로만 랜더링되고있음. [높이값 최대 150px]

> 카페24에 유선상 + 1:1문의=

1. 갤러리 게시판 썸네일이 흐릿하게 보여요.
   -> 이미지 사이즈 원사이즈로 유지하는 것으로 n x 150 사이즈로 작업해야함. 작은 이미지로 보이는 이슈는 같습니다.
2. 일반 게시판을 상품 게시판 또는 갤러리 게시판으로 변경할 수는 없나요?
   -> 모듈변경 = 보여지긴하나 작은 이미지로 보이는 이슈는 같습니다.

모듈 설정 => https://lenina.kr/board/lookbook/custom.html
모듈 설정 후 스타일링 => https://lenina.kr/board/lookbook/test.html

--> 현재 안내된 방법은 모두 적용해보았으나 되지않아 재문의 드렸고 240213 문의 후 답변이 없음.

대처방안

1. 유료게시판을 추가하여 갤러리게시판을 사용
2. 게시판 작성시 가이드 코드 안에 섬네일 추가 [+ 가이드 첨부]

> > > 최종적으로 250217 섬네일 게시판구매

> > > 250217 결론적으로 불가능하다 답변받음

1.  적용 페이지 링크
    https://lenina.kr/board/lookbook/list.html
    https://m.lenina.kr/board/lookbook/list.html

2.  적용 방법 가이드 공유.

- 게시판 > 게시판 관리 > LOOKBOOK 갤러리 > 글보기 --- 이후 이미지 참고

> > 메뉴 상 노출 위치 확인 요망
