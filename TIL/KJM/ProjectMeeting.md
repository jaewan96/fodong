# 동화연극

앱 시작 → 메인페이지

### RULE

① 기능 별 시뮬레이션 작성

② 시뮬레이션 작성 시 나오는 AGENDA 기록

③ AGENDA 토의

- 하루에 정해진 기능에 대해서만 빠르게 결정하고 개인 공부 합시다!
- 논의하고 싶은 주제가 있으면 아묻따 AGENDA에 적어주세요

---

### REFERENCE

- PROJECT
    - 내가 기린 그림

      ‣

- TTS / STT / VOICE CLONING
    - ESPNet

      [딥러닝 STT 모델 - ESPNet (1)](https://shyu0522.tistory.com/19)

    - MidJourney

      [최신판 미드저니 (MidJourney) 기초 완벽 공략! 나와 똑같은 아바타 만들기!](https://www.youtube.com/watch?v=e-3VxCc1Syw)

- FACE DETECTION & CHARACTER GENERATION
    - MidJourney

      [최신판 미드저니 (MidJourney) 기초 완벽 공략! 나와 똑같은 아바타 만들기!](https://www.youtube.com/watch?v=e-3VxCc1Syw)

    - D-ID

      [D-ID Creative Reality™️ [New]](https://www.d-id.com/)


---

### AGENDA

- **[진행중]** 커뮤니티


- **[진행중]** 책 정보 창 디테일
- [진행중] 행복서랍 구현 구체화  (녹화 저장 기능 같이)

---

- **[완료]** 시연용 동화 정하기 : 아기돼지 삼형제

  짧으면서, 대부분 아는 동화

    - 신데렐라 : 손 트래킹으로 샬라카툴라메지카둘라 구현하고 싶음
    - 아기돼지 삼형제 : 인원수 4명
    -
- **[완료]** 디자인 업무 : DALL-E
    - DALL-E
    - 직접
    - 외주
- **[완료]** AI 음성 기술 : 네이버 클로바 API 사용
    - 네이버 클로바 API 사용
- **[완료]** 동화책 컨텐츠 및 저작권
    - 동화 기반 직접 극본 작성
- **[완료]** 멀티 프로필
    - 멀티 프로필 구현 필요성
        - 멀티 프로필이 있으면 여러 번 로그인 불편함 해결
    - 초대 받는 사람은 어떻게 초대 받을 것인지 ⇒ 온라인 상태에만 초대 보냄
        - 온오프라인 표시
        - 온라인 상태인 사람에게만 초대 보낼 수 있다
    - 어디까지 공유하고 나눌 것인지
        - DB 분리 : 계정 단위 / 프로필 단위

      **공유 목록**

        - 책장
            - 자식 여러 명일 경우
                - 카테고리화
            - 권한 설정
                - private
                - public

      **분리 목록**

        - 친구 목록
            - 프로필 단위로 친추
- **[완료]** 웹 vs 웹모바일 : 웹탭 우선, 모바일 후순위
    - 웹&탭 / 탭&모바일
    - PWA

  **웹&탭**

  **탭&모바일**

    - 어린이 : 태블릿

      어른 : 모바일

- **~~[완료]** 모션 인식 : 손가락 지팡이 기능~~
    - 우선 얼굴 인식부터 구현
    - 탭에 모션 인식은 힘들 듯
- **~~[완료]** Main Page 분리 : 어린이 / 부모 ⇒ 분리 안함!~~


    **어린이용**
    
    - default
    - 동화 선택 시 바로 동화 시작 버튼
    
    **부모님용**
    
    - 우측 상단에 작은 버튼 클릭 시 전환
    
    ⇒ 부모님만 사용해야 하는 기능이 있는지 애매함
    
    서버를 여러 개 구현해야할 필요성 미약

- **~~[완료]** 딜레마 : 커뮤니티 vs 선택에 따른 스토리 변경(gpt)~~
    - 커뮤니티를 우선 ? 챗봇 프롬프트를 우선 ?

  ⇒ 결론 : 선택에 따른 스토리 변경 구현 불가능

    - 스토리에 따른 배경 설정을 자동 생성할 수 없음
    - 배경, 캐릭터 이미지가 고정되어있기 때문에 스토리 라인도 고정되어야 함

---

### 디자인

- 디자인 레퍼런스 페이지
    - 아이들 나라

      https://i-nara.co.kr/

      ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/79cd9e27-129f-4eaf-88d6-bc51d51c54de/Untitled.png)

      ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/29a44cb6-634b-43c8-ab96-7e583b39af1f/Untitled.png)

    - 핑크퐁 상어가족

      ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/c95bf612-8450-482d-8ce5-bb643c214d54/Untitled.png)


    - https://learn.khanacademy.org/khan-academy-kids/
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/325a58f8-2e81-4673-8a57-e043f68dcbd1/Untitled.png)
        
    - 룰루팜 월드
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/ecab056a-e50a-4fd0-b27a-4a2c17125932/Untitled.png)
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/82ab1c87-dcec-4b5a-9bd3-c1250e22a04f/Untitled.png)
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/d940804a-72d8-4496-9909-a581e3d0615a/Untitled.png)
        
    - 
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/3b57f0d6-8b12-42be-80fa-b582904800ad/Untitled.png)
        
    - 
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/b2b3c759-dbaf-4180-b120-20faa5082d94/Untitled.png)
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/4015824b-b045-4872-953d-284d6d274caa/Untitled.png)
        
    - 
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/2f7ac77a-16c5-4be3-87e8-813b07867d1c/Untitled.png)
        
    - 
        
        ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/410b979e-13d9-4139-9c3b-0be16949b4ee/Untitled.png)
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/0d5b983b-a0a7-4c35-be3f-a75e951d7486/image.png)


---

### 시뮬레이션

- **[ 전체 ]**

  **회원가입 & 동화구연**

  앱 시작 → (Welcome 페이지) 로그인 페이지 → 회원가입 → 프로필 생성 or 프로필 선택 창 → 메인페이지 → 책누르기 → 책 정보 창 → 역할 배정 및 초대 창 →

  [동화구연]

  → 저장 여부 선택 → 메인화면


- [ 회원가입 ]
    - 회원가입 순간 렌더링 이용 로그인 구현
    - 로그인 시 자동 로그인 기능 (멀티 프로필 선택 창)
    - 닉네임?
- **[ 함께하기 ]**
    1. 로그인
    2. 프로필 선택
    3. 메인 페이지
        - 동화책 리스트
    4. 특정 스토리 클릭
    5. 스토리 방 생성 및 접속
    6. 초대하기
        - [목업] 초대하기 초안

          ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5e6d7f3-4707-4be7-855f-37cd4b94ba69/8490e3cb-d525-42b4-93d5-86fc422b09ba/Untitled.png)

        - 같은 계정 다른 프로필 사람 초대하기 / 내 친구 초대 하기
        - 인원이 다 안 채워졌을 경우에, 건너뛰기 버튼 클릭
        - 혼자 할 경우, 건너뛰기 버튼 클릭
    7. 역할 선정
        - 참가자 역할 분배
        - 남은 역할은 AI 자동 매칭
    8. 시작 버튼 클릭
    9. 구연 시작
    10. …
    11. 구연 종료
    12. 저장 여부 선택

- **[ 동화구연 ]**

    <aside>
    <img src="/icons/flag-pennant_red.svg" alt="/icons/flag-pennant_red.svg" width="40px" /> **동화구연 AGENDA**

    1. **캐릭터 어떻게 입힐건지 : 얼굴**
        - 얼굴
        - 모션 및 손동작 (가능하면)
    2. **TTS 어떻게 적용할건지 : 네이버 클로바**
    3. **동화 어떻게 불러올건지 : 동화 기반 직접 극본 작성**
    4. 캐릭터
        - DALL-E
        - 직접 그림
        - 외주
    5. **다음 턴 넘기기 : 버튼**
        - 버튼 / ~~버튼 + STT~~ / ~~버튼 + 타이머~~
    6. **스크립트 : 턴제 (가능하다면 반응형 턴)**
        - 턴 / 반응형 턴 / ~~페이지~~
    7. **녹화 방식 :  전체 녹화**
        - 전체 녹화, 대사 단위로 녹화
        - ~~녹화본에 북마크 기능~~
    8. 부분 편집 : 행복 서랍으로
    9. **나레이션은 : 함**
    10. **부분 재촬영 필요성 : 안 함**
    </aside>

    - 스토리 예시 : 아기 돼지 삼형제

        <aside>
        <img src="/icons/flag-pennant_red.svg" alt="/icons/flag-pennant_red.svg" width="40px" /> **아기 돼지 삼형제**

      어느 숲 속 마을에 엄마돼지와 아기돼지 삼 형제가 살고 있었어요.
      어느 날 엄마돼지는 아기돼지 삼 형제를 불러 모았어요.
      '얘들아, 이제 너희들도 다 컸으니 집을 떠나 혼자 힘으로 살아보렴"
      아기돼지 삼 형제는 집을 떠나 각자의 집을 짓고 살기로 했어요.

      큰형 돼지는 주변의 갈대를 주워 집을 짓기 시작했어요.
      갈대를 얼기설기 엮어 만든 집은 금세 완성이 되었지요.

      둘째 돼지는 산에서 나뭇가지를 주워 집을 짓기 시작했어요.
      둘째 돼지의 나무집도 어느새 완성이 되었지요.

      집을 다 지은 큰형 돼지와 둘째 돼지는 노래하고 춤추며 신나게 놀았어요.

      하지만 막내 돼지는 형들과 달랐어요.
      시간은 오래 걸리겠지만 튼튼한 벽돌집을 짓고 싶었어요.
      막내 돼지는 한 장 한 장 벽돌을 쌓아
      흙을 발라가며 열심히 집을 지었지요.

      큰형 돼지와 둘째 돼지가 막내돼지를 찾아왔어요.
      "막내야 우리 같이 놀자~"
      "안 돼! 난 지금 벽돌집을 짓느라 바쁘거든"

      그러던 어느 날, 큰 형 돼지의 집에 늑대가 나타났어요.
      "돼지야, 이리 나와봐! 문좀 열어줘."
      "싫어, 나를 잡아먹으려는 거지?"

      큰형 돼지가 문을 열어주지 않자 늑대는 크게 숨을 들이마셨어요.
      그리고는 "후"하고 입김을 불었어요.

      그러자 큰형 돼지의 갈대집이 우수수 무너지고 말았답니다.

      큰형 돼지는 얼른 둘째 돼지의 집으로 도망을 쳤어요.

      하지만 늑대는 둘째 돼지의 집까지 쫓아왔어요.
      '돼지들아, 이리와 문 좀 열어줘.'
      "싫어, 우리를 잡아먹으려는 거지?"

      둘째 돼지가 문을 열어주지 않자 늑대는 이번에도 크게 숨을 들이마셨어요.
      그리고는 '후후' 입김을 불었지요.
      그러자 둘째 돼지의 나무집도 와르르 무너지고 말았어요.

      큰형 돼지와 둘째 돼지는
      서둘러 막내 돼지의 집으로 도망을 쳤어요.
      "막내야, 살려줘! 내 갈대집이 날아가버렸어."
      "내 나무집도 날아가 버렸어!"

      "형님들, 걱정 마세요"
      막내 돼지는 늑대가 들어오지 못하게 문을 꼭 잠갔어요.

      늑대는 막내 돼지의 집까지 찾아왔어요.
      "돼지들아~ 문좀 열어줘~"
      "안돼 이 나쁜 늑대야, 저리가!"

      늑대는 큰 숨을 세번 들이마시더니 입김을 불기 시작했어요.
      '후후후'하고 불었지만
      막내 돼지의 튼튼한 벽돌집은 꼼짝도 하지 않았어요.
      "그렇다고 내가 못 들어갈 줄 알고?"

      늑대는 재빨리 지붕으로 올라가 굴뚝을 타고 들어오려고 했어요.

      아기돼지 삼형제는 뜨거운 물이 가득 담긴 커다란 냄비를 벽난로에 올려놓았어요.
      그런줄도 모르고 굴뚝으로 내려온 늑대는

      뜨거운 냄비 속으로 풍덩 빠지고 말았지요.
      "아 뜨거워! 늑대 살려!"
      엉덩이에 불이 난 늑대는 펄쩍 뛰면서 달아났지요.

      그 후로 늑대는 다시는 아기돼지 삼형제를 찾아오지 않았어요.
      아기돼지 삼형제는 막내돼지의 벽돌집에서
      오래오래 행복하게 살았답니다.

        </aside>

        <aside>
        💡 **[내레이션]**
        어느 숲속 마을, 엄마돼지와 아기돼지 삼 형제가 살고 있었다.

      **엄마돼지:**
      "얘들아, 이제 너희들도 다 컸으니 집을 떠나 혼자 힘으로 살아보렴."

      **[내레이션]**
      큰형은 갈대로, 둘째는 나무로 집을 지었다. 하지만 막내는 튼튼한 벽돌집을 지었다.

      **[늑대 등장]**
      늑대가 큰형과 둘째의 집을 무너뜨리고, 세 형제는 막내의 벽돌집으로 도망쳤다.

      **늑대:**
      "돼지들아, 문 좀 열어줘~"

      **막내돼지:**
      "안돼 이 나쁜 늑대야, 저리가!"

      **[내레이션]**
      늑대는 벽돌집을 무너뜨리려 했지만 실패하고, 굴뚝으로 들어가려 했다. 하지만 뜨거운 냄비에 빠져 도망쳤다.

      **[마무리]**
      그 후로 늑대는 다시는 아기돼지 삼 형제를 찾아오지 않았다. 아기돼지 삼 형제는 벽돌집에서 오래오래 행복하게 살았다.

        </aside>

    - 극본 예시 : 하마 공주님과 기린 왕자님

        <aside>
        <img src="/icons/flag-pennant_red.svg" alt="/icons/flag-pennant_red.svg" width="40px" /> **등장인물 : 기린왕자님 , 하마공주님 ,부하(여우, 호랑이) , 벌**

      <1 막>- 숲속 배경 *나무세워져 있음

      음향1. Open 해설(마음을 열고 1:20)

      음향2. 여우등장(발맞추어 나가자 :20)

      여 우 : 하하하! 안녕? 내 이름은 여우야.

      난 이 숲에서 가장 멋지고 힘이 세서 인기가 아주 많단다. 푸하하 (손으로 원을 그 리며)

      [ 하마 등장....울고 있고 여우는 나무 뒤로 숨는다.]

      잉 잉 : 잉잉잉....오늘도 또 또 잉잉잉....잉잉잉....

      여 우 : (살짝 나타나며) 오늘도 또 왜그러세요 하마 공주님?

      잉 잉 : 오늘도 또 잉잉잉....바위에서 구르고 말았어. 난 너무 뚱뚱한가봐......잉잉잉......

      여 우 : 하하하! 그렇게 목도 짧고 굵고, 그렇게 다리도 짧고 굵고, 몸도 둥글둥글 땡땡하니 구르게도 생겼어요. 하하하! (랄랄랄 ) 퇴장하며 나무뒤에 선다.

      잉 잉 : 뭐라고! 잉잉잉......잉잉잉.....내 모습이 어디가! 봐! 이목....... 이? 진짜 짧네.....다리 는.....어? 진짜 숏다리잖아. 잉잉잉

      벌 : 앵...어휴, 힘들어.어~ 저기 분홍색 섬이 보이네 하루 종일 날아다녀서 힘든데 저기 서 쉬어가야겠다. (날아가 잉잉이의 어깨에(?) 앉는다.)

      벌 : 와우! 푹신푹신 하니 좋은걸. (이때 반창고를 발견)

      아니! 저건 무슨 표시지? 그래, 맞아. 분명히 보물이 묻혀 있다는 표시일꺼야. 그럼 여긴 보물섬?

      와우! 앵앵.... (날아가서 반창고를 콕콕 쪼아서 파려고 한다.)

      잉 잉 : 아야 아야, 잉잉.....아니, 이건 뭐야? (새를 발견) 아니, 짹짹아.

      넌 왜 내 상처를 콕콕 찌르고 그러니?

      벌 : (너무 놀라서 앵앵하며, 떨어졌다가 다시 날아오르며)

      어? 아니 이건 이제 보니 섬이 아니라 하마공주님이시잖아.

      음향3. (운명교향곡 :24)

      잉 잉 : 뭐라구? 섬이라구? (운명교향곡)잉잉잉.....

      내가 아무리 뚱뚱해도 그렇지, 섬이라니 난 너무 슬퍼....... 잉잉잉...잉잉잉.

      벌 : 죄송해요, 공주님. 근데 공주님은 작년에 제가 봤을때보다도 훨씬 뚱뚱해진 것 같아요.

      잉 잉 : 정말? 잉잉잉......어떡해! 더 뚱뚱해 졌대! 잉잉잉.......

      여우: (나무 뒤에서 새의 말이 듣고 고개를 끄덕이며 멋있는척 선다.)

      맞아, 맞아. 공주님은 제가 좀 전에 봤을때보다도 훨씬 더 뚱뚱해진걸요?

      공주님은 정말 뚱뚱해, 뚱뚱.........하하하!(라라랄♬ 웃으면서 퇴장)

      벌 : 벌! 에이, 저 심술꾸러기 여우!

      괜찮아요. 공주님, 공주님께서는 하마로써의 완벽한 몸매를 가지고 있어요.

      잉 잉 : 정말?

      벌 : 앵앵! 그럼요. 그리고 하마가 뚱뚱해야 하마지, 날씬한 하마란 소리는 들어보지도 못했 어요.

      잉 잉 : 그래, 맞아. 우리 하마들은원래 뚱뚱해. 맞아, 맞아

      벌 : 하긴 제가 본 하마중에 공주님이 제일 뚱뚱하긴 해요. (얼버무리다가 하마가 째려보니 까 안녕히계세요 하고 꾸벅 인사하고 나간다.)

      잉 잉 : 잉잉잉.....저 조그만 벌 마져도 날 놀리다니...... (체념조로) 그래, 내가 뚱뚱한건 사 실이잖아. 이젠 창피해서 밖에 나오지도 못 하겠어.잉잉잉.....난 너무 뚱뚱해. 잉잉

      ( 이때 여우가 나타나서 노래를 부르며 잉잉이를 쫓아다니자 잉잉이는 울다가 무대 밖으로 나가는데 여우가 따라가며 노래를 부른다. 그 다음 잉잉, 여우가 무대 밖으로 사라져도 노랫소리는 울리면서 작게 들린다.)

      노래♬ : 공주님은 뚱보래요. 목도다리도 모두짧대요. ♬ [반복]

      음향4: 사운드오브뮤직 :38)

      <2 막> -

      [ 기린이 나무사이를 걸으면서 무언가를 찾고 있다.]

      훌 쩍 : 어 분명히 이 근처에서 반지를 잃어 버린거 같은데 어디갔지?

      ( 이때 나뭇가지에 머리를 부딫치고 넘어졌다가 붕대감고 다시 등장)

      아~~~`오늘도 또 나뭇가지에 몰리 걸렸어...훌쩍훌쩍....

      난 목이 너무 가늘고 길어(믿을 내려다 보며)이것봐. 다리도 너무 가늘고 길어.

      [ 여우가 누구를 찾는 듯이 두리번 거리며 빠르게 기린을 스쳐간다.]

      훌 쩍 : 아니! 방금 지나간게 뭐지? 훌쩍훌쩍.....

      목이 너무 길어서 땅위에서 무슨일이 있는지 잘 보이지도 않아. 훌쩍훌쩍...

      [ 여우 무대 가운데 등장]

      [ 너구리를 한 대 때리며 대사하는 동안 기린은 돌아서서 계속 훌쩍거리며 운다]

      여 우 : 야! 감히 이 여우님을 놀려? 여기에 놀릴만한 동물이 있다더니 없잖아.

      호랑이 : 왜 때려요? 저기 있잖아요.(기린을 가리킨다.)

      여 우 : 휙휙 둘러보다가 어디말이야? 이게...(호랑이 때림)

      호랑이 : 저기 있잖아요. 저기...

      [ 여우 기린쪽으로 가서 기린 다리 사이에 얼굴을 끼고 휙휙 둘러본다.]

      여 우 : (때쓰는 아이처럼) 없잖아~.

      호랑이: (걸어가서 기린을 툭 치며) 이 훌쩍 기린 왕자님 말예요.

      여 우 : 뭐? 훌쩍 기린 왕자님?( 하면서 고개를 위로 든다.)

      훌 쩍 : 왜 나의 다리를 치고 그러느냐? 훌쩍훌쩍...

      여 우 : 옴마나, 옴마나 진짜 길다.

      훌 쩍 : 뭐? 길다구(빠라밤 바바바바 음악) 그래, 난 너무 길어, 길어.(목을 옆으로 훽 돌리 면서)

      여 우 : 저 나뭇가지 같은 다리, 저 전봇대 같이 긴 목, 저 훌쭉한 몸매 푸하하하!

      제가 왕자님이라면 말이죠 부끄러워서 성 밖으로는 절대로 다니지 못할거예요.푸하하(랄라랄라)

      훌 쩍 : 그만, 그만해. 그만하라구. 훌쩍... 난 왜 이렇게 생겼을까?

      ( 노래 부르며 날아가다가 기린 목에 부딪혀서 떨어졌다가 다시 날아올며)

      벌: 누구야~ 누가 여기다가 전봇대를 새워논거야.

      훌 쩍 : 뭐라고? 전봇대? 훌쩍훌쩍...

      벌 : 아니, 전봇대가 말을 하고 훌쩍훌쩍 울기도 하네.

      [ 다시 자세히 위 아래로 날며 기린을 살펴보고] 아니, 그럼 바로 이 분이

      그 소문속의 훌쩍왕자님... 와, 근데 진짜로 길고 훌쭉하다.

      훌 쩍 : 아!~~~ 아~ 나는 왜 이렇게 생겼을까.. [머리를 잡고 흔든며 성으로 뛰어 들어간다.]

      음향5: (아기염소 :57)

      <3 막> 그네 미리 준비됨

      잉 잉 : 이이잉이잉 나도 날씬해지고 싶어. 아아 맞아. 운동을 해봐야지!

      무슨 운동을 할까? 그래. 저걸 타 봐야겠다.

      음향6: 두둥~ 쿵!!!

      영차영차 [그네를 타는데 금방 툭 끊어지는 그네]

      벌: 푸하하~ 하마 공주님 아니세요 ㅋㅋ

      잉잉: 안녕 꿀벌아 ~~ 잉잉잉잉 난 역시 난 너무 뚱뚱해.

      어 근데 이게 뭐지?(엉덩이에서 반지 하나를 꺼내며)

      벌: 우와 진짜 멋진 반지네요. 공주님은 좋으시겠다.

      잉잉: 기린 왕자꺼 라고 써있는데 ...

      새: 주운 사람이 주인이지요. 공주님이 발견하셨으니 그건 공주님꺼예요.

      잉잉: 진짜 가져도 될까?( 자신 없는 목소리로) 아니야~~ 이걸 잃어 버리고 기린 왕자님이 얼마나 슬퍼하고 계시겠니...

      벌: 그래도 그 멋진 반지를 돌려주시게요?

      잉잉: 그래야지 . 짹짹아 너 기린왕자님이 어디 사시는지 아니?

      벌: 저쪽으로 걸어가시면 기린 왕자님을 만날 수 있을꺼예요.

      [ 잉잉이 걸어가면서 기린왕자와 공주가 만난다.]

      [ 동시에] 아니,

      훌 쩍 : 오, 세상에~ 짧은 목, 굵은 다리, 뚱뚱한 몸. 정말 아름다우십니다.

      잉 잉 : 아니예요. 이렇게 다리도 짧고 목도 짧고 뚱뚱한 제가 아름답다니요.

      왕자님이야말로 그 긴목, 가는 다리 , 훌쭉한 몸!너무 멋지세요.[ 사랑의 노래 나오고 서로 쳐다본다.

      아참! 저 숲에서 이 반지를 발견했는데 왕자님의 것이지요? 돌려드리려고 왔어요.

      훌 쩍 : 아~~~ 이 세상에 이렇게 아름다운 마음씨를 가진 분이 있을줄이야.

      아름다운 공주님~~ 갈데가 있소~~

      잉잉: 거기가 어디요?

      훌쩍: 우리궁전

      잉잉: 아니그럼 지금? 결혼하자는 얘기?

      훌쩍: 당연한 얘기 ~~~

      동물 친구들: 딱맞췄네~~( 갑자기 튀어 나오면서)

      잉 잉 : 저의 있는 그대로의 모습을 아름답다고 해 주시다니....

      훌쩍왕자님. 전 이제야 깨달았어요. 제 모습이 이렇게 아름답다는 것을요.

      왕자님!?(천천히 왕자에게 다가간다.)

      음향7: 축하합니다. :26)

      [노래가 끝남과 동시에 잉잉, 훌쩍 포옹.]

      [ 무대 밖으로 걸어나가며 대사]

      훌 쩍 : 공주님의 짧은 다리는 정말로 통통하고 귀엽습니다. 하하하!

      잉 잉 : 뭘요. 왕자님의 가늘고 긴 다리야말로 너무 멋진걸요. 호호호!

      훌 쩍 : 그렇습니까? 하하하! 여러분 어떻습니까? 저의 잉잉공주님 정말 아름답지 않습니까? 하하하

      잉 잉 : 아아이이잉. 부끄럽게 왜 그러세요? 여러분 훌쩍 왕자님 이야 말로 멋지시죠?

      호호호!

      음향8: 결혼행진곡

      [♬ 축혼 행진곡 흐른고 서로 뽀뽀한다.]

      다른 동물 친구들이 꽃가루를 날려주며 축하해준다.

        </aside>

    1. 구연 시작 버튼 클릭
    2. (첫페이지) 배경과 제목
    3. 첫번째 장면에 해당하는 배경이 나온다

       첫 번째 장면에 등장하는 캐릭터가 나온다

       캐릭터는 역할을 맡은 사람의 표정이 매핑되어 있다

    4. 첫 번째 대사가 아래쪽에 나온다
    5. 대사를 마친 사람이 ‘다음’ 버튼을 누른다
       - 
    6. 두 번째 대사가 아래 쪽에 나온다
    7. 대사를 마친 사람이 ‘다음’ 버튼을 누른다
    8. …
    9. AI 차례가 왔다
    10. TTS 기술을 활용하여 해당 역할에 맡는 목소리로 대사를 읊는다
    11. 그 다음 대사가 아래쪽에 나온다

- [ 저장 ]
    - 카테고리 생성?
- [ 행복서랍 ]
    - 할겨?
- 나는야 이주현

  내 이름은 이주현

  거꾸로하면 현주이

  누가 날 막아!

  아무도 못막지

  호호호


---

### 기능 명세서

[제목 없는 데이터베이스](https://www.notion.so/fdd7a9f1030b446a90b2ef84513549e9?pvs=21)