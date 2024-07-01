# 개인과제 - 넥스트JS 1

<br />

## :cat2: 목차

|            [🐈 프로젝트 소개 🐈](#cat2-프로젝트-소개)             |
| :---------------------------------------------------------------: |
|            [🏠 프로젝트 구조 🏠](#house-프로젝트-구조)            |
|           [🍡 사용 기술 스택 🍡](#dango-사용-기술-스택)           |
| [🍵 기술적 고민과 트러블 슈팅 🍵](#tea-기술적-고민과-트러블-슈팅) |

<br />

---

<br />

# :cat2: 프로젝트 소개

### [🎉Vercel 배포 사이트](https://eunoh-pokedex.vercel.app/)

<br />

### 🐈🐕 국가를 선택해보세요~! 😻🐶

|   프로젝트명    |       최애 국가 선택하기        |
| :-------------: | :-----------------------------: |
|      분류       |         넥스트js 스터디         |
|    개발 환경    |           next.js 14            |
| 사용 라이브러리 | tanstack-query, tailwind, axios |
|    개발 기간    |     2024.07.01 ~ 2024.07.02     |

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

## :house: 프로젝트 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜getPokemon.ts
 ┃ ┗ 📜getPokemons.ts
 ┣ 📂app
 ┃ ┣ 📂(root)
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┣ 📜AbilitiesChips.tsx
 ┃ ┃ ┃ ┣ 📜AllPokemons.tsx
 ┃ ┃ ┃ ┣ 📜AllPokemonsSuspense.tsx
 ┃ ┃ ┃ ┣ 📜BasicLoader.tsx
 ┃ ┃ ┃ ┣ 📜InfiniteScroll.tsx
 ┃ ┃ ┃ ┣ 📜PokemonCard.tsx
 ┃ ┃ ┃ ┣ 📜PokemonDetail.tsx
 ┃ ┃ ┃ ┣ 📜PokemonSuspense.tsx
 ┃ ┃ ┃ ┣ 📜TopButton.tsx
 ┃ ┃ ┃ ┣ 📜TypesChips.tsx
 ┃ ┃ ┃ ┗ 📜pokemonCard.module.css
 ┃ ┃ ┣ 📂pokemons
 ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂pokemons
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂provider
 ┃ ┃ ┗ 📜QueryProvider.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜layout.tsx
 ┣ 📂config
 ┃ ┣ 📜config.common.ts
 ┃ ┣ 📜config.development.ts
 ┃ ┣ 📜config.export.ts
 ┃ ┗ 📜config.production.ts
 ┣ 📂constants
 ┃ ┗ 📜constants.ts
 ┣ 📂types
 ┃ ┗ 📜pokemon.type.ts
 ┗ 📂utils
 ┃ ┣ 📜formatNumber.ts
 ┃ ┗ 📜getKoreanName.ts
```

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

# :dango: 사용 기술 스택

![NextJS](https://img.shields.io/badge/next.js-14.2.3-000000?style=for-the-badge&logo=next.js&logoColor=white) \
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) \
![tanstack](https://img.shields.io/badge/tanstack_query-%23FF4154.svg?style=for-the-badge&logo=tanstackquery&logoColor=white) \
![axios](https://img.shields.io/badge/axios-000000?style=for-the-badge&logo=axios&logoColor=white) \

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---

<br />

# :tea: 기술적 고민과 트러블 슈팅

### 트러블 슈팅

1. API 레이어 타입 지정의 어려움:

    - API 레이어 타입 지정에 어려움이 있었습니다. 특히 Axios를 사용하여 API 호출 시, 반환되는 데이터의 타입을 지정하는 것이 어려웠습니다.
    - 몇몇 부분에서 자꾸 any 를 만났습니다.
    - 제네릭과 axios 에서 제공하는 타입을 사용하여 해결하였습니다.

2. 응답 본문을 부분 배열화 하여 스크롤에 따라 보여주기:

    - 응답 본문을 부분 배열화 하여 보여주기 위해 사용자 스크롤 이벤트를 추가하였습니다.
    - react-intersection-observer 라이브러리를 사용하여 해결하였습니다.
    - 이 과정에서 스크롤에 따른 로딩이 제 생각대로 한 인덱스씩 추가 되지 않았습니다.
    - 이 문제를 해결하고자 useRef 를 사용하여 inView 의 상태를 추적하였습니다.

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---
