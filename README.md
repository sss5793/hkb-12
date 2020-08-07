# 우아한 가계부 팀 12
3번째 프로젝트 가계부를 만들어보자!

### TEAM 12 - 김명성👨🏻‍💻, 이슬기👩🏻‍💻


### 구현한 부분
- 깃헙 로그인 (Passport, OAuth)
- 클라이언트 라우팅
- 가계부 내역조회, 가계부 내역추가, 가계부 내역 삭제
- 가계부 달력 페이지
- 수입, 지출 필터링
- 모달창으로 결제수단 추가, 삭제
- 가계부 그래프 그리기

### 로그인
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/46251629/89604963-5a0a8b80-d8a7-11ea-9709-05653f572cc1.gif)


### 데모
[Live Demo](http://3.35.54.11:3000)

### 실행시키는 법
1. 의존성 라이브러리 설치
  ```
cd ~/hkb-12
npm install
cd ~/hkb-12/client
npm install
cd ~/hkb-12/server
npm install
  ```
2. 프론트앤드 빌드
  ```
npm run build
  ```
  로 프론트앤드 코드를 정적 파일로 빌드

3. `.env` 파일 추가
  ```
DB_HOST = ...
DB_USER = ...
DB_PASSWORD = ...
DB_NAME= ...
SESSION_KEY = ...
GH_ID = ...
GH_KEY = ...
SERVER = ...
  ```
  로 DB 관련 환경변수 추가
  
4. nodemon 실행
  ```
cd ~/hkb-12/server
npm start
  ```
  로 실행 후 크롬에서 localhost:3000에 접속 후 확인!

### 스크럼 및 기술 블로그
[Wiki 링크](https://github.com/woowa-techcamp-2020/hkb-12/wiki)
