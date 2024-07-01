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

|   프로젝트명    |           포켓몬 도감           |
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

1. tanstack query 서버사이드 사용:

    - tanstack query를 서버사이드에서 사용하는데에 어려움이 있었습니다.
    - dehydrate / hydrate 개념 이해가 쉽지 않았습니다.
    - 공식문서를 번역해 읽으면서 서버사이드 / 클라이언트 사이드 쿼리의 차이점과 공통점을 이해하였습니다.

2. 요청 응답 객체가 너무 복잡할 경우의 타입 지정:

    - 요청 응답 객체가 너무 복잡할 경우의 타입 지정에 어려움이 있었습니다.
    - 객체에서 필요한 프로퍼티만 추출하고자 하였으나, 대부분 사용되는 프로퍼티들이 복잡하게 중첩되어 있었습니다.
    - 이 과정에서 타이핑에 어려움이 있었습니다.
    - 최대한 API에서 제공해주는 타입을 사용하려 하였습니다.

<br />

[🌙 목차로 돌아가기](#cat2-목차)

<br />

---
