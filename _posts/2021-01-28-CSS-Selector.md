---
layout: post
title: "📅 TIL #19"
subtitle: "CSS-Selector"
toc: true
toc_sticky: true
toc_label: "페이지 주요 목차"
date: 2021-01-28
background: "/img/posts/post-TIL.png"
tags: [TIL, pre-course, HTML&CSS]
---

## 👉 CSS Selector 정리

> 1.Selector 기초
---

-   전체 셀렉터<br/>
    => \*{...}

-   ID 셀렉터<br/>
    => #name{...}

-   class 셀렉터<br/>
    => .list{...}

-   후손 셀렉터<br/>
    => header h1{...}

-   자식 셀렉터<br/>
    => header > p{...}

-   인접 형제 셀렉터<br/>
    => section + p{...}

-   형제 셀렉터<br/>
    => section ~ p{...}

<br/>
<br/>

> 2.Selector 구조 가상 클래스
---

-   부모안에 모든 요소 중 **첫번째** 요소<br/>
    => 부모 요소: first-child{...}

-   부모안에 모든 요소 중 **마지막** 요소<br/>
    => 부모 요소: last-child{...}

-   부모안에 모든 요소 중 **N번째** 요소<br/>
    => 부모 요소: nth-child(N){...}

-   부모안에 모든 요소 중 **홀수번째** 요소<br/>
    => 부모 요소: nth-child(2n + 1){...}

-   부모안에 모든 요소 중 **3번째부터 간격이 2씩 떨어진** 요소<br/>
    => 부모 요소: nth-child(2n + 3){...}

-   부모안에 A라는 요소 중 **N번째** 요소<br/>
    => A: nth-of-type(N){...}

-   부모안에 A라는 요소 중 **첫번째** 요소<br/>
    => A:first-of-type{...}

-   A 셀렉터의 모든 요소<br/>
    => A:only-of-type{...}

-   부모안에 A라는 요소 중 **마지막** 요소<br/>
    => A:last-of-type{...}

<br/>
<br/>

> 3.부정 Selector
---

-   `div`자식들 중에 2번째 요소만 제외하고 모든 요소<br/>
    => div:not(:nth-of-type(2))

-   `input` 중에 tpye이 "password" 인 것만 제외<br/>
    => input:not([type="password"])

<br/>
<br/>

> 4.attribute Selector
---

-   a 요소 중에서 href 속성을 갖는 모든 요소<br/>
    => a[href]{...}

-   div의 id 요소 이름중에서 **앞에서 부터** "sect" 가 겹치는 모든 요소<br/>
    => div[id^="sect"]{...}

```html
// 둘다 해당
<div class="sector"></div>
<div class="section"></div>
```

-   div의 class 요소 이름중에서 **뒤에서 부터** "blog" 가 겹치는 모든 요소<br/>
    => div[class$="blog"]{...}

```html
// 둘다 해당
<div class="My-blog"></div>
<div class="git-blog"></div>
```

-   div의 class 이름 **같은 위치에서** "w" 가 겹치는 모든 요소<br/>
    => div[class*="w"]{...}

```html
// 둘다 해당
<div class="two"></div>
<div class="swim"></div>
```

<br/>
<br/>

> 👊 **내일의 TIW(today I Will)**

twittler 목업 구현
