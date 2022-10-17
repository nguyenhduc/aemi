<h3 align="center">Aemi</h3>

---

<p align="center"> A frontend replicant of [Aemi](https://aemi.vn/) as a test.
    <br>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Assignment brief <a name = "assignment_brief"></a>](#assignment-brief-)
- [Interpreting <a name = "interpreting"></a>](#interpreting-)
- [Source code structure <a name = "code_structure"></a>](#source-code-structure-)
- [Using Docker <a name = "using_docker"></a>](#using-docker-)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Installing](#installing)
- [Built Using <a name = "built_using"></a>](#built-using-)
- [Acknowledgement](#acknowledgement)
- [Room for improvements <a name = "acknowledgement"></a>](#room-for-improvements-)
- [Authors <a name = "authors"></a>](#authors-)

## Assignment brief <a name = "assignment_brief"></a>

Implement a catalog page to:

- List our selling products to customers, the website should fit with desktop and mobile devices (including tablet devices).
- Customers can interact with the filter bar to filter products by brands and categories.
- Adaptive banner.

## Interpreting <a name = "interpreting"></a>

- The test comes with a designated design so there should be thoughts for scalable and maintainable CSS structure.
- SSR

## Source code structure <a name = "code_structure"></a>

aemi-app

- assets
  - css
    - colors
    - elements
    - input
    - normalize
    - responsive-breakpoint
    - typography
    - utilities
  - images
  - svg
- src
  - components
    - Header
    - Footer
    - Banner
    - ItemCard
  - interfaces
    - ProductDetail
  - stores
    - BrandStore
    - CategoryStore
    - ProductStore
  - App.vue
  - main.ts
  - styles.css

## Using Docker <a name = "using_docker"></a>

### Prerequisites

- Make sure you have already installed Docker Engine.

```
docker -v
Docker version 20.10.17, build 100c701
```

### Steps

1. Build the Docker image:

```
make docker
```

2. Start the Vite app

```
make run dev
```

3. (Optional) This will clean the Aemi Docker Dev environment entirely, allowing you to start from scratch.

```
make clean
```

## Installing

```
pnpm i
```

Run the app

```
pnpm dev
```

## Built Using <a name = "built_using"></a>

- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [VueJs](https://vuejs.org/) - Web Framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [ViteJs](https://vitejs.dev/) - Build tool that aims to provide a faster and leaner development experience for modern web projects

## Acknowledgement

- Due to my current health and the challenge time was up to few hours of implementing this test result was incomplete in term of requirements
  - Interacting filters

## Room for improvements <a name = "acknowledgement"></a>

- UI library for faster development
- ITCSS for Scalable and Maintainable CSS Architecture

## Authors <a name = "authors"></a>

- [@nguyenhduc](https://github.com/nguyenhduc) - Participated in the test.
