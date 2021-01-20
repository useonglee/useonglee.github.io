var store = [{
        "title": "나의 첫 포스트",
        "excerpt":"나의 첫 포스트라고 했지만 깃블로그를 위해 삽질을 3일 동안 했다.   지우고 다시 깔고를 수십번 반복했다. 이 포스트 또한 또 지워질 수 도 있다.   미칠 것 같다. 깃블로그 너무 어렵다.   하지만 개발자가 되기 위해 하나의 시련이라고 생각한다…   1일 1잔디를 위하여ㅠㅠ   ","categories": [],
        "tags": ["Posts"],
        "url": "http://localhost:4000/first-post/",
        "teaser": null
      },{
        "title": "TIL #1",
        "excerpt":"##드디어 깃블로그를 마치다. 금요일 오후 1시부터 시작을해서 드디어 깃블로그를 어느정도 알게 된 것 같다. 아직도 많이 미숙하지만 3일동안 삽질한 덕에 대충은 어떻게 돌아가는지 알게 되었다. 역시 삽질해봐야 알게 되는 것인가….. 테마를 다운받고 레퍼지토리에 커밋하는건 어렵지않았다. 하지만!!!!!! _conpig 파일을 수정하고 bundle exec jekyll serve 로 블로그를 수정하려고 하면 계속 오류가 났다....","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL1/",
        "teaser": null
      },{
        "title": "TIL #2",
        "excerpt":"목차 코드 변환(고차함수) 반복문 18번 코드 변환(고차함수) 고차함수 문제 : 아래 코드를 reduce메서드 한 번만 사용한 코드로 변경하여 스스로 작성하고, 직접 설명한 내용을 적어주세요. const filterMaped = arr.filter(x =&gt; x % 2 !== 0).map(x =&gt; x * 2); console.log(filterMaped) // [2, 6, 10] reduce를 사용한 코드로 변경하기에 앞서 나는 먼저...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL2/",
        "teaser": null
      },{
        "title": "TIL #3",
        "excerpt":"목차 shuffle 메서드 설명 객체 21번 고차함수 31번 shuffle 메서드 설명 shuffle 레퍼런스 설명 : 아래 shuffle 레퍼런스 코드에 대해서 최대한 자세히 설명해주세요! 코드를 한 줄씩 설명해보세요. (코드의 각 키워드가 무슨 의미인지 한 번 되돌아봅시다.) 이 메서드의 작동 원리에 대해서 설명해주세요. 필요한 경우가 어떤 경우가 있을지 고민하여 하나의 예를 들어주세요....","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL3/",
        "teaser": null
      },{
        "title": "TIL #4",
        "excerpt":"목차 재귀함수 15번 알고리즘 16번 재귀함수 15번 재귀함수 문제 : 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴 주의사항 : 배열을 리턴 immutability 입출력 예시 let output = flattenArr([[1], 2, [3, 4], 5]); console.log(output); // --&gt; [1, 2, 3, 4, 5] output = flattenArr([[2, [[3]]], 4, [[[5]]]); console.log(output); // --&gt; [2,...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL4/",
        "teaser": null
      },{
        "title": "TIL #5",
        "excerpt":"목차 유효성 검사 DOM HA 4번 유효성 검사 :point_right: 예를들어 회원가입을 할 경우 조건에 맞게 반드시 형식을 입력해야 하는 경우, 유효성 검사가 필요하다. 코드를 보면서 설명 // html &lt;button id=\"btn-signup\"&gt;회원가입&lt;/button&gt; // js // html 버튼요소를 불러온다. const btnSignup = document.querySelector('#btn-signup') // 이벤트 핸들러 function handleInputIdChange() { let valid = moreThanLength(inputId.value,...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL5/",
        "teaser": null
      },{
        "title": "TIL #6",
        "excerpt":"목차 함수 호이스팅 (Hoisting) reduce 활용해서 배열을 객체로 onclick 함수 함수 호이스팅 (Hoisting) :point_right: 호이스팅은 말 그대로 끌어 올린 다는 것이다. 자바스크립트에서 끌어 올리는 것은 변수 ‘선언’과 함수 ‘선언’ 을 끌어올리는 것이다. 함수 호이스팅이 발생하는 원인은 자바스크립트의 변수 생성(Instantiation)과 초기화(Initialization)의 작업이 분리돼서 진행되기 때문이다. for (var i = 0; i...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL6/",
        "teaser": null
      },{
        "title": "TIL #7",
        "excerpt":"목차 test 2번 test 3번 test 2번 :point_right:test 2번문제 풀이 : 수를 입력받아 각 자릿수를 모두 더한 값을 리턴해야 합니다. 주의 사항 : 음수를 입력받은 경우, 첫번째 수는 음수로 계산 number 타입을 리턴 입출력 예시 : let output = test2(1148); console.log(output); // --&gt; 14 = 1 + 1 + 4...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL7/",
        "teaser": null
      },{
        "title": "TIL #8",
        "excerpt":"목차 test 6번 test 6번 :point_right:test 6번문제 풀이 : 피보나치 수열을 순차적으로 출력하는 클로저 형태의 함수를 작성해야 합니다. 주의 사항 : 리턴되는 클로저 내부 함수(inner function)의 구현은 recursive 혹은 iterative한 방법 중 어떤 것이어도 상관없다. 입출력 예시 : const fn = test6(); console.log(fn()); // --&gt; 0 console.log(fn()); // --&gt; 1...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL8/",
        "teaser": null
      },{
        "title": "TIL #9",
        "excerpt":"목차 변수와 타입 함수 join과 undefined의 관계 변수와 타입 :point_right:변수와 타입 기초 : 1. 변수(variable) 변수란, 프로그래밍의 세계에서는 이름(Label)이 붙은 값으로 정의된다. 변수에 이름을 지어주고(선언) 값을 넣어준다(할당). let number = 1; // 값이 숫자가 될 수도 있고 let name = 'useong' // 문자열이 될 수도 있다. 프로그래밍에서는 ‘=’ 연산자의 뜻은...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL9/",
        "teaser": null
      },{
        "title": "TIL #10",
        "excerpt":"목차 조건문 조건문 알고리즘 13번 문제 문자열 다루기 parseFloat 과 parseInt NaN의 이해 조건문 :point_right:조건문 기초 : 1. if…else if…문법 if (truthy or falsy 한 값) { //괄호안에 대한 결과값 } else if (/*if안에 괄호가 falsy한 경우*/) { //괄호안에 대한 결과값 } else { //if 와 else if에 대한 조건이...","categories": ["2021/01"],
        "tags": ["TIL","Pre-Course"],
        "url": "http://localhost:4000/2021/01/TIL10/",
        "teaser": null
      }]
