# 🤝 팀 프로젝트 (4조)

> 배포 주소: [4팀 / FEEL THE FLEX](https://gifted-hamilton-04edca.netlify.app)

<br>

## 사용 API
* 인증(로그인)
* 제품(공용, 관리자)

<br>

## 페이지 기획&컨셉

💎 **FEEL THE FLEX** 💎
살 수 있다고는 상상도 못해본 비싼 명품들
한 번쯤 사보고 싶던 유명한 제품들
그리고 살 수만 있다면, 얼마를 투자해도 좋을 희귀한 능력들을 판매하는 유일무이 쇼핑몰입니다.

구매할 수 있나요?
당신의 FLEX를 보여주세요 💵


## 페이지 별 설명 및 작업내용

### 1. 인증(로그인) 관련 페이지

* 작업자: 유영미
* 관련 페이지 수: 5개

**페이지 구현 내용**

1. **회원가입 페이지**
      - 사용자로부터 이름,이메일,비밀번호 입력받아 회원가입진행
      - 회원가입 성공시 홈페이지로 이동 
      - 회원가입 실패시 alert창으로 실패메시지 출력
      - 입력되는 비밀번호 값의 자릿수를 확인하여 실시간으로 유효한지 화면에 출력

2. **로그인 페이지**
      - 이메일, 비밀번호를 입력받아 로그인 진행
      - 로그인 성공시 홈페이지로 이동
      - 로그인 실패시 alert창으로 실패메시지 출력
  
3. **사이드 메뉴 모달**
      - 풀 스크린 모달창
      - 사용자 프로필이미지, 이름, 이메일 출력
        - 프로필 이미지가 있을 경우 이미지 출력
        - 프로필 이미지가 없을 경우 이름의 가장 맨 앞글자만 화면에 
      - 다른 페이지로의 라우터 링크 목록 표시
        - 일반 사용자의 경우
          - 계좌 관리 페이지
          - 설정 페이지
        - 관리자의 경우
          - 제품 관리 페이지
          - 설정 페이지
      - 로그아웃 기능

4. **회원정보수정 페이지**
      - 프로필 수정
        - 파일 업로드를 통해 프로필 이미지를 변경
        - 변경내용이 헤더의 프로필 부분에 실시간 반영
      - 사용자 이름 수정
        - input을 통해 프로필 이름 변경
        - 변경 내용이 헤더의 프로필 부분에 실시간 반영
      - 비밀번호 수정
        - 현재 비밀번호와 새롭게 사용할 비밀번호 입력
        - 사용할 비밀번호를 두 번 입력받고 8자리인지 두번 입력한 비밀번호가 일치한지 실시간으로 확인가능
        - 저장버튼 클릭시 confirm 창을 통해 사용자에게 '재로그인이 필요'하다는 메시지를 출력
          - 취소 클릭시 비밀번호 변경취소
          - 확인 클릭시 엑세스 토큰 삭제->로그아웃->로그인 페이지로 이동 

5. **계좌 관리 페이지**
    - 로그인된 사용자의 계좌 목록 출력
    - 7개의 은행이 최대 출력
    - 추가 가능한 은행 목록이 있을 경우 추가 버튼 활성화
    - 추가 가능한 은행 목록이 없을 경우 추가 버튼 비활성화
    - 추가 버튼 클릭시 팝업 모달 창 등장
      - 현재 추가 가능한 은행목록 출력 (이미 추가된 은행 목록은 나오지 않음)
      - 선택한 은행 목록이 2개 이상이면 다음 버튼 비활성화
      - 사용자로부터 계좌,핸드폰 번호, 싸인(체크박스)을 입력받음
        - 계좌입력창의 placeholder는 선택된 은행의 계좌 길이를 보여줌
        - 선택된 은행의 계좌 길이만큼 입력되었는지 검사하여 t/f 조건에 따라 메시지 출력
        - 핸드폰 번호입력시 입력 길이가 11길이인지 -가 들어가지 않았는지 확인하여 실시간으로 조건에 부합되고 있는지 확인가능
        - 3가지 값이 모두 정상 입력인 경우 alert을 통해 계좌 추가가 완료되었음을 출력

**오류 내용**

~~제품 추가/수정 페이지와 제품 상세 페이지에서 (동적라우팅이 진행) 사이드메뉴를 눌러 다른 페이지로 이동하려고 하면
기존 주소에서 id가 있던 자리에 이동하려는 다른 페이지의 path가 붙음~~ 
**아쉬운 점**

- 이메일 유효성 검사 미진행
- 회원가입 성공 화면 미제작
- 로딩 애니메이션 미추가
- dotenv 미설정

---

### 2. 관리자 전용 API를 사용한 관리자 페이지

작업자: 강다현
페이지 수: 3개

- 등록된 모든 제품 상태 확인 페이지
- 제품 추가 페이지
- 특정 제품 수정 페이지
- [http://배포주소/admin](http://배포주소/admin~) 으로 시작하는 주소

**접속 방법**

- 관리자 계정( FlexAdmin@gmail.com / flexadmin123 ) 으로 로그인 시 바로 관리자페이지로 이동됨

**페이지 구현 내용**

1. **등록된 제품 확인 페이지**
    - 전체 제품 조회 API를 사용하여 목록을 출력합니다.
    - 목록 테이블에 마우스 hover이 이뤄지면 해당 행을 진하게 표시합니다.
    - 각 제품목록의 왼쪽에 존재하는 수정버튼을 누르면, 해당 행의 제품을 수정하는 페이지로 이동합니다.
    - 관리자페이지 오른쪽에 위치하는 버튼을 누르면 새로운 제품을 추가하는 페이지로 이동합니다.
    
2. **제품 추가 페이지**
    - (필수) 표시 된 입력 내용이 없으면 제품추가 되지 않고 안내문구가 출력됩니다. → 예외처리
    - 업로드한 파일 용량이 1MB보다 클 때는 안내 문구가 출력됩니다. → 예외처리
    - 좌측 회색 박스에는 등록한 썸네일이 출력되며, 이미지 파일 추가 시 이미지가 나타납니다.
    - 이미지가 등록되면 바로 이미지를 1:1 비율로 자르는 Crop 모달창이 나타납니다.
        - Crop 모달창은 이미지를 자르지 않으면 사라지지 않습니다 → 최초 1회 이미지 편집을 위한 예외처리
        - 이미지가 등록됐을 때, 썸네일 창을 누르면 모달창이 다시 나타납니다.
    - 태그는 `,` 을 기준으로 구분되며 `공백` 을 제거하여 전송됩니다.
    
3. **제품 수정 페이지**
    - (필수) 표시 된 입력 내용이 없으면 제품수정이 되지 않고 안내문구가 출력됩니다. → 예외처리
    - 업로드한 파일 용량이 1MB보다 클 때는 안내 문구가 출력됩니다. → 예외처리
    - 변경된 내용이 없으면 제품수정이 되지 않고 안내문구가 출력됩니다. → 예외처리
    - 제품 수정 시, 등록되어 있는 해당 제품의 정보가 화면에 출력됩니다.
        - 이미지가 없을 시에는 썸네일이 비어있습니다.
        - 제품명, 가격 등의 입력창에는 기존 제품 내용이 입력되어 있습니다.
    - 썸네일에 이미지가 존재해도, 새롭게 이미지 파일을 등록한 경우가 아니라면 Crop 모달창을 통한 이미지 편집은 불가능합니다.

**오류 내용** 

관리자 전용 API 페이지 만을 개발서버에서 관리했을 때는 다음 기능이 존재했습니다.
그러나 현재는 동작되지 않는 오류 내용으로, 설명한 구현 내용 처럼 우회하여 조금 다운된 기능으로 구현하였습니다.

1. 썸네일 이미지가 비어있을 때, 배경에 회색이 아닌 배경이미지가 출력됩니다.
2. 이미지 편집을 진행할 시 → 편집 진행한 횟수를 카운트합니다.
    - 만약 이미지를 편집 횟수가 0이라면 → 최초의 이미지 편집으로,  `자르기` 버튼만 나타납니다.
    - 이미지를 편집 횟수가 0보다 크다면 → 이미지를 편집하지 않고 Crop 모달창을 끌 수 있도록, `취소` 버튼이 나타납니다.
3. Crop 모달창은 `v-if` 가 아닌 `v-show` 를 통해 나타났으며, `<teleport to=:"body">` 설정을 하지 않아도 정상적으로 작동되었습니다.


**아쉬운점**

```
1. 로컬 개발서버에서는 온전하게 작동하던 코드가 구현되지 않는 문제가 발생했고, 결국 기능이 다운그레이드 된 것이 너무 아쉽다.
2. 라이브러리 적용 등 여러 문제들에 많은 시간을 할애하게 되면서 시간부족으로 생각했던 기능/추가 페이지 등을 만들지 못한 게 아쉽다.
3. 좀 더 꼼꼼하고 자세하게 작업을 하지 못한 것 같은 점이 아쉽다.
```

---

### 3. 제품 관련 API (검색, 전체조회, 상세 조회)

작업자: 권시현  
관련 페이지 수: 2개
  - 메인 페이지
  - 제품 상세 페이지


**페이지 구현 내용**

1. **메인 페이지**
    - Swiper JS를 이용하여 메인 광고 slide 생성
    - Text와 Tag를 이용한 검색 기능 (두가지를 동시 사용하는 검색은 효율이 좋지않다고 판단하여 막아두었습니다)
    - 처음 로드시에는 전체 상품 수 표시, 검색시에는 검색 상품 수 표시
    - 전체 상품 리스트 출력 (태그들이 많을 경우 x축으로 scroll되도록 구현)
    - Swiper에 들어가는 이미지를 제외하고 반응형으로 페이지 구현
    
2. **제품 상세 페이지**
    - 스켈레톤 UI 및 Loader 추가

**이슈 및 아쉬운점** 

```
1. Swiper에 이미지를 적용하는데 어려움이 있어 이미지를 편집해서 작업을 함
2. 상세페이지 반응형 구현을 못한점과 이미지 돋보기 효과를 구현해보지 못 함
3. 환경변수, 서버리스 함수를 활용하지 않음
```
