---
title: RN 에러노트🔥) Another debugger is already connected
date: "2020-07-25T22:40:32+09:00"
template: "post"
draft: false
slug: "error-note-1/"
category: "에러노트"
tags:
description: "처음에 웹개발에서 앱개발로 넘어왔을때, 리덕스 값을 콘솔에서 볼 수 없음에 슬퍼하고 당황해하고 있는 나에게 ... "
socialImage: "/media/42-line-bible.jpg"
---

처음에 웹개발에서 앱개발로 넘어왔을때, 리덕스 값을 콘솔에서 볼 수 없음에 슬퍼하고 당황해하고 있는 나에게   
지인 개발자는 이것을 추천해주었다. 

> react-native-debugger

요새 이 친구에게 에러가 많이 보인다. 특히 에뮬레이터에서..  
시뮬레이터에서는 잘만 되던 친구가 에뮬레이터에서는 왜이리 말썽인지   
나만 그러는건지 다들 이런는건지 궁금하다 진짜

### 에러 발단🔥
>
1. 앱이 처음 로드 될때 디버거가 켜지지 않았다.
2. 그러고 에뮬레이터에 이런 경고가 뜬다 
![](https://images.velog.io/images/dody_/post/4cbb3942-9d65-402f-8d2f-90703e05c7c8/Screen%20Shot%202020-07-20%20at%2011.44.32%20AM.png)
3. 그러고 React Native Debugger 프로그램을 켜보니
```
Another debugger is already connected.
```
가 쉴틈없이 찍히고 있었다. 



### 에러 해결🚒

> http://localhost:8081/debugger-ui   
   디버거 인스턴스를 하나만 실행할 수 있기 때문에 다른 탭을 연 경우 오류가 날 수 있다고 한다...

이게 무슨 소리인가 싶지만, 일단..      
첫째, 인스턴스는 소프트웨어 세계에 구현된 구체적인 실체, 객체를 소프트웨어에 실체화 한것을 인스턴스 라고 한다. react native debugger 프로그램이 디버거 인스턴스이다.      
둘째, 다른 탭을 연 경우 오류가 날 수 있다. 라는 것은 테스트 해보니.     
yarn start를 하고, 디버거 인스턴스 창이 켜진 후, 디버거 인스턴스 창을 끄고, 다시 에뮬레이터를 리로드 하면 오류가 난다.   

> 해결하기 위해선, 리액트네이티브 프로젝트를 다시 껏다 키면 된다. 

즉 yarn start를 끄고 다시 yarn start하면 된다..   
쏘 이지.. 