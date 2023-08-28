# 스타벅스 메인 페이지 클론 코딩

## 🔗 [최종 결과물 배포 링크](https://starbucks-home-chamin966.vercel.app)

## 👏 프로젝트 시연 영상

[![Video Label](http://img.youtube.com/vi/XwcHVBfhfRY/0.jpg)](https://youtu.be/XwcHVBfhfRY)

## 🔍**프로젝트 결과 화면 사진**

### Home

![메인 홈](https://github.com/chamin966/Starbucks_Home/assets/98478661/6ae5075b-da84-48f3-a5e8-2c72d721db9f)

### Dropdown menu

![드롭다운](https://github.com/chamin966/Starbucks_Home/assets/98478661/ac85f419-21c8-4cb0-8412-dab4482a11e6)

### Promotion Part Slide

![프로모션 슬라이드](https://github.com/chamin966/Starbucks_Home/assets/98478661/090c45e2-6f56-4043-baf7-79efe4522ab9)

### Promotion Part Folding

![프로모션 접기](https://github.com/chamin966/Starbucks_Home/assets/98478661/fc8a43c3-efb1-4c24-b203-3cd1551d78b9)

### Youtube 영상 자동재생

![유튜브](https://github.com/chamin966/Starbucks_Home/assets/98478661/c34f3234-2726-420c-be46-10488d9bf9fc)

### Season Product & Reserve Coffee

![시즌 메뉴](https://github.com/chamin966/Starbucks_Home/assets/98478661/6d82c6c4-4357-4648-a611-ed11b138c7bb)

### Circle Animation - Front & Back

| ![앞](https://github.com/chamin966/Starbucks_Home/assets/98478661/c67643a3-055a-4a20-befd-3dac5727b916) | ![뒤](https://github.com/chamin966/Starbucks_Home/assets/98478661/f7559b3e-6b96-4123-8696-bfeaa2e805bc) |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |

### Find Store

![파인드](https://github.com/chamin966/Starbucks_Home/assets/98478661/925a3260-d9bc-49d9-a29b-3b9a58c9c4ed)

### Footer

![푸터](https://github.com/chamin966/Starbucks_Home/assets/98478661/8376a329-d21d-47c0-8c73-f751e892f9d2)

### Light house 성능 측정치

![성능 측정](https://github.com/chamin966/Starbucks_Home/assets/98478661/48686269-7aec-484e-8ff4-ca695d1a64e6)

## ✍️ 프로젝트 소개

해당 프로젝트는 스타벅스의 메인 홈페이지를 클론 코딩하며 프론트엔드 개발자로서, 기업의 보편적인 메인 페이지를 제작할 수 있는 능력을 함양하기 위한 프로젝트입니다. 이전 프로젝트들에서는 특정한 아이디어나 목적을 위하여 제작하였기 때문에, 보편적으로 쓰일 수 있는 웹 디자인과는 거리가 있었다고 생각하였습니다. 때문에, 가장 일반적으로 사용되는 웹의 메인페이지 디자인을 그간 배운 React, Next.js, TypeScript, SCSS, BEM 작성법 등을 활용하여 제작해보았습니다.

## 💻 구현한 주요 기능

- SCSS를 활용하여 드롭다운 메뉴 구현
- 수직, 수평 방향의 캐러셀 구현
- CSS가 아닌 TypeScript 코드 기반으로 작동하는 스크롤 감지 애니메이션 구현
- 번거로운 JSX 구조를 예방하기 위하여, JSON 파일 import와 map 메서드로 간결하게 작성
- 한 화면 내에서 시간 차로 작동하는 애니메이션 구현
- 웹 페이지 내에서 유튜브 영상 재생

## 😊 배운 점

- GSAP 라이브러리를 활용하여 TS 코드 내에서 애니메이션을 구현할 수 있음
- Embla carousel 라이브러리를 활용하여 캐러셀 제작 및 커스텀 디자인을 구현할 수 있음
- SCSS의 클래스 네이밍을 BEM 방식으로 작성할 수 있음
  - className={styles.name} → className={styles[’block__element--modifier’]}
- SCSS 컨벤션을 준수하여 폴더 구조를 작성할 수 있음
  - style/common 경로에 전역 스타일, extends, mixin, 변수 SCSS 파일로 나누어 담고,
    style/import 경로에 파일들에 직접적으로 쓰이는 module 파일로 나누어 담아
    필요한 곳에만 common 폴더의 스타일을 import 해서 사용하여 코드 재사용성을 높였다.
- Image 태그와 background-image을 목적에 따라 활용할 수 있음
  - 요소에 애니메이션을 부여해야 하거나 요소들 간의 상호작용이 필요없다면,
    background-image에 이미지를 넣어서 배경으로 사용할 수 있다.
  - background-attachment 속성을 활용하여 스크롤과 상관없이 움직이지 않는
    고정 배경을 만들 수 있다.
- module.scss
  - scss를 사용하면서 모든 요소마다 새로운 클래스 네임을 주는 것은 번거로운 일이다.
    module.scss 확장자를 사용함으로써, 서로 다른 컴포넌트에서는 같은 클래스 네임을
    사용하더라도 충돌이 일어나지 않도록 자동으로 클래스 네임을 변환하여
    컴포넌트마다의 스타일을 캡슐화해준다.
- Youtube-react 라이브러리를 사용하여 웹 페이지 내에서의 유튜브 영상을 재생할 수 있음
  - 커버 이미지를 덮어씌워 영상의 클릭을 방지하고 자동으로 재생되는 영상만을 보여주어,
    유저가 유튜브로 영상을 재생 중이라는 사실을 인지하지 못하게 할 수 있다.

## 😖 **문제 사항 및 아쉬운 점**

- 백엔드 API 모듈화 실패
  - 메인 메뉴와 같이 같은 JSX 구조가 반복 되고, 내부 텍스트만 바뀌는 경우,
    아무리 백엔드 없이 프로트엔드 혼자서 진행하는 프로젝트라 할지라도,
    일일이 모든 텍스트를 집어넣는 것은 매우 번거롭고, 오타의 가능성도 높았다.
    이는 유지/보수성을 위해서 백엔드가 있는 것처럼 따로 데이터를 빼놓는 것이
    나은 선택이라 판단하였고, json 파일로 메인 메뉴의 텍스트를 모두 빼서 모아 놓았다.
    이를 getStaticProps에서 API화 하여 pre-rendering을 진행하고 싶었지만,
    http://localhost:3000/api/menus 경로의 fetch가 dev 환경에서는 정상적으로 작동하였으나,
    build 시에 경로 에러가 발생하여 배포를 진행할 수 없게 되었다.
    공식 문서와 여러 자료를 검색해 보았지만, 원인이 경로 문제라는 것만 알았을 뿐,
    해결하지는 못하였다.
  - 결국, API화까지는 진행하지 못하였고, getStaticProps() 함수 내에서 `(await import('../public/menus.json')).default as Menu[];`로 로컬의 json 파일에 직접적으로
    접근하는 방식으로 프로젝트를 마무리하게 되었다.

## 🖼️ 레퍼런스

- [Starbucks Coffee Korea](https://priceless-bhabha-83fc0d.netlify.app/)
