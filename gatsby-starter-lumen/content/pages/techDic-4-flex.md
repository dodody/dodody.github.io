---
title: "flex?"
template: "page"
socialImage: "/media/image-4.jpg"
---

## flex에 대해 알아보자☄️
나는 힙찔이 이기 때문에 flex를 좋아한다. 하지만 css의 flex도 좋아하지.    
어디 한번 css flex에 대해 공부해볼까?   

_목표는 역사부터 안쓰는 flex까지 다 알 필요없다. 유용하게 사용할 만한 것만 정리를 해보자._

[땡큐 뽈 MDN, Css Flexible box layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---
flex는 element 수평, 수직 레이아웃을 쉽게 구성할 수 있는 css 도구이다.   
flex에 어떻게 설명해야 할까? 샤워하면서 혼자 고민해봤더니,   

부모 컴포넌트와 자식 컴포넌트에 주는 방식으로 일단 나눠서 생각해봤다.   


```
<div class="parents">
  <div>child</div>
  <div>child</div>
<div>
```

parents에는 **display: flex** / flex-direction / flew-wrap / align-item / justify-content 등을 사용할 수 있다.       
child에는 flex-grow / flex-basis / flex-shrink / order / align-self 을 사용한다.   


## flex 사전 마냥 하나씩 정리해보자
### parents > **flex-direction**
    row (child가 가로로 쌓인다)
    column (child가 세로로 쌓인다)
### parents > **flew-wrap**
     nowrap (child를 강제로 한줄에 배치)
     wrap (child를 여러행으로 배치)

### parents > **align-item**
     center (child를 세로로 중앙정렬)
     start (child가 위에 붙게 정렬)
     end (child가 아래에 붙게 정렬)
     stretch (child가 콘텐츠에 꽉 차게 늘림)

### parents > **justify-content**
     center (child를 세로로 중앙정렬)
     flex-start (부모의 왼쪽에 정렬)
     flex-end (부모의 오른쪽에 정렬)
     space-between (부모의 양 끝부터 일정한 간격으로 정렬)
     space-around (양끝으로 반만큼 띄어지고 일정한 간격으로 정렬)
     space-evenly (양끝으로 일정한 간격으로 띄어지고 일정한 간격으로 정렬)


### child > **flex-grow**
    1 (값을 나눠 갖는다.)

### child > **flex-basis**
    200px (200Px를 갖는다, 그것보다 화면이 줄어들면 자연스럽게 줄어든다)

### child > **flex-shrink**
    0 (화면이 줄어들어도 해당 요소들의 기본 값은 줄어들지 않는다)
    1 (각 자식의 flex-shrink를 1, 2, 3 주면 각각 1/6 2/6 3/6 만큼의 고통 분담)

### child > **order**
    (자식의 순서)

### child > **align-self**
    (원하는 것만 따로 다른 align값을 주고 싶을 때)
