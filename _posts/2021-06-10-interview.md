---
layout: post
title: "모의 기술 면접"
subtitle: "interview"
toc: true
toc_sticky: true
toc_label: "페이지 주요 목차"
date: 2021-06-10
background: "/img/posts/post-TIL.png"
tags: [TIL]
---

<br/>
<br/>
<br/>

# 🎯 Achievement Goals

- 페어와 각자 정한 내용에 대해 기술 면접 인터뷰를 한다.
  - 모든 자바스크립트 파일을 브라우저에서 한 번에 로딩 할 때의 문제점을 설명해주세요.
  - promise(프로미스)의 개념에 대해서 설명해주세요.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

### 모든 자바스크립트 파일을 브라우저에서 한 번에 로딩 할 때의 문제점을 설명해주세요.

<br />

웹 사이트의 성능을 개선할 때는 파일의 용량보다 파일의 개수가 더 중요합니다. 왜냐하면 아주 작은 파일이라도 원격 서버에서 가져와야 한다면 네트워크 비용이 많이 들기 때문입니다.

<br />
파일이 캐시에 있더라도 해당 파일이 유효한지 판단해야 합니다. 또한 파일을 병렬로 다운로드하는 데 한계가 있기 때문에 파일의 개수가 늘어나는 것은 성능에 좋지 않다고 생각합니다.

<br />
실제 사례로 오래되었지만 2008년 네이버에서 한 기능을 개발할 때 자바스크립트 파일의 개수는 무려 60개 정도 였고, 캐시를 비운 상태에서 자바스크립트 파일을 로딩하는 데에만 3초 이상의 시간이 걸렸다고 합니다.

<br />
이 파일을 하나로 통합했더니 단 0.15초만에 로딩이 되도록 성능을 개선하였습니다.

<br/>
<br/>
<br/>
<br/>

### promise(프로미스)의 개념에 대해서 설명해주세요.

<br />

프로미스는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다. 이때 작업의 최종 결과를 반환하지 않고, 어떠한 상태를 제공합니다.

<br />
상태는 총 3가지가 있습니다. pending(대기), fulfilled(이행), rejected(거부)

<br />
이러한 상태는 비동기 호출과 동시에 받을 수 있습니다. 대기 중인 프로미스는 이행하거나 거부될 수 있습니다. 그 후 이 상태에 따라 프로미스를 후속 처리하는 메소드가 있습니다.

<br />
첫번째로 덴은 두개의 콜백 함수를 인자로 전달 받으며, 첫번째 콜백 함수는 성공시 호출이 되고, 두번째 콜백 함수는 실패시 호출이 됩니다.

<br />
두번째는 캐치가 있습니다. 비동기 처리에서 에러가 발생할 경우 호출이 되며, 프로미스를 반환합니다.

<br />
이러한 프로미스를 후속 처리하는 메서드들은 또 다시 프로미스 메서드를 호출할 수 있는데 이러한 것을 프로미스 체인이라고 합니다.

<br />
이러한 프로미스는 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있습니다.

- 자바스크립트에서 비동기 프로그래밍을 위해 콜백을 사용한다.
- Promise는 전통적인 콜백 패턴이 가진 단점을 일부 보완하며 동기 처리 시점을 명확하게 표현한다.
- Promise는 비동기 처리 로직을 추상화한 객체와 그것을 조작하는 방식을 말한다.
- Promise 객체에서 제공하는 메서드만 사용해야 하므로 인자가 같은 방식으로 통일된다.
- 복잡한 비동기 처리를 쉽게 패턴화할 수 있다.

<br/>
<br/>
<br/>
<br/>

### 후기

<br />

코드스테이츠 수료 전 마지막 세션으로 페어와 모의 면접을 진행했다. 각자 주제를 정하고 면접을 하는 방식인데 질문의 정답을 찾기 보다는 면접을 했을 때 나의 모습을 발견할 수 있어서 좋았다.

<br/>
페어분께서 면접을 진행하는 동안 정말 재밌었다고 말씀해주셨고, 차분히 잘 말씀하셔서 좋았다고 피드백을 주셨다! 하지만 면접을 진행하는 동안 꼬리 질문이 없어서 아쉬웠다 ㅠ 질문하고 준비한 답변만 하고 끝이 났고, 줌으로 하니까 전혀 긴장감이 없었다....

<br />
모의 면접은 이렇게 30분 채? 넘지 않고 끝이 났다... 이번에 느낀 것은 두가지 질문에 대해서도 생각이 전혀 안났고, 생각한 개념들을 막상 말로 하려니까 정말 어려움을 느꼈다. 그동안 프로젝트에만 몰두해서 기본 개념들을 다 잊은 것 같고, 정확히 알고 있지 않았던 것 같다. 수료하고 나면 정말 열심히 준비해야겠다.

<br/>
<br/>
<br/>
<br/>
<br/>