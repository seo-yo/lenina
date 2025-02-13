1. 파일 경로

1) html

https://lenina.kr/board/lookbook/list.html

[생성] board/gallery/lookbook/list.html
[생성] board/gallery/lookbook/read.html

2. css
   [수정] /layout/basic/css/layout.css |
   [수정] /css/module/board/readPackage.css | read.html
   [생성] /css/module/board/gallary_4grid_board.css

링크
https://lenina.kr/board/lookbook/list.html
https://lenina.kr/board/lookbook/test.html

작업 특이사항

1. 섬네일 = 첨부파일
   2

참고 링크

<!-- https://sdsupport.cafe24.com/module/board/gallery/list.html -->

1. 일반 게시판 -> 갤러리 게시판

첨부파일로 업로드한 이미지가 섬네일로 나올 시, 이미지가 깨져보이는 현상
-> 갤러리 게시판에서는 "목록 이미지 리사이징 설정크기" 로 자동 리사이징 처리안함 처리로 깨지지않게 가능하나
현재 아무리 큰 이미지를 업로드해도 n x 150 정도의 사이즈로만 랜더링되고있음. [높이값 최대 150px]

카페24에 유선상 + 1:1문의로 문의

- 갤러리 게시판 썸네일이 흐릿하게 보여요.
  -> 이미지 사이즈 원사이즈로 유지하는 것으로 n x 150 사이즈로 작업해야함. 작은 이미지로 보이는 이슈는 같습니다.
- 일반 게시판을 상품 게시판 또는 갤러리 게시판으로 변경할 수는 없나요?

  - 모듈변경 = 보여지긴하나 작은 이미지로 보이는 이슈는 같습니다.

  대처방안

  1. 유료게시판을 추가하여 갤러리게시판을 사용
  2.
