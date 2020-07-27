---
title: RN 라이브러리📚) 리액트네이티브 디버거 도구 (react-native-debugger / redux-devtools / react-native-debugger-open)
date: "2020-07-27T20:25:49+09:00"
template: "post"
draft: false
slug: "react-native-library-1/"
category: "RN 라이브러리"
tags:
description: "안녕하세용!!! 도딥니당! 오늘은 React Native의 디버거 도구인 react-native-debugger와 redux-devtoo..."
---

## 개요
안녕하세용!!! 도딥니당!   
오늘은 React Native의 디버거 도구인 react-native-debugger와 redux-devtools, react-native-debugger-open을 세팅해보겠습니다~~   

처음에 리액트네이티브 시작할 때, 콘솔을 찍어볼 수 없다는 것에 대 충격을 받고   
어떻게 해야할지 걱정을 하다가, 주변 유일한 rn 개발자분께서 이 라이브러리를 추천해주셨다.   
(감사해용..애플님..❤️)   

## react-native-debugger 세팅
대부분의 리액트네이티브 개발자라면 대부분 사용하고 계실 라이브러리 입니다.    

#### 1. 터미널을 열고, root 경로에서 명령어를 실행해서 라이브러리 설치   
```
brew update && brew cask install react-native-debugger
```

#### 2. 그 다음에는 mac OS라면, Applications를 관리하는 폴더가 따로 있다. 
![](https://images.velog.io/images/dody_/post/a7b44cca-aacb-48b9-a9fc-770bb64d7dd5/Screen%20Shot%202020-07-22%20at%2012.42.34%20PM.png)
이런식으로 말이지.. 1.에서 설치된 app 파일을 여기에 옮겨야된다고 한다.   
나는 안옮겨도 알아서 잘 옮겨 지더라.. 다들 확인 한번 해보시길~   

#### 3. 디버깅 app을 켜보자. 
![](https://images.velog.io/images/dody_/post/51b9838e-2664-4550-8d79-03186decbcc1/Screen%20Shot%202020-07-22%20at%2012.44.17%20PM.png)

이렇게 생긴 인스턴스를 확인할 수 있다! 리액트 개발을 해봤다면 넘나 익숙하게 생각하는 화면...   
redux 디버깅 화면이지ㅠㅜ 반갑다 증맬루   

#### 4. react native 프로젝트와 연결하자
지금은 위의 이미지는 에뮬레이터 혹은 시뮬레이터와 연결되어있지 않다.    
연결시키기 위해서는 에뮬레이터, 시뮬레이터에서 개발자도구를 켜서 디버깅을 시작시켜줘야 한다.   

시뮬레이터 개발자 도구를 키는 단축키는 command + d   
에뮬레이터 개발자 도구를 키는 단축키는 command + m   

개발자도구의 debug를 켜서 디버깅을 시작한다. 그러면 react-native-debugger와 연결된다.   
쏘 이지~ 여기서 멈추지 말고 redux-devtools를 연결해서 리덕스도 연결을 해주자   

## redux-devtools 세팅
#### 1. 설치를 하자.
터미널을 켜서 프로젝트 경로로 이동해서 redux-devtools를 설치한다. 
```
npm install --save-dev redux-devtools-extension 

or

yarn add redux-devtools-extension
```

#### 2. store 설정 파일을 수정하자.
```
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let modules = require('reducers/Reducer').default;
// modules는 제 리듀서 들 입니다.

const store = createStore(modules, composeWithDevTools(applyMiddleware()));
// store를 생성하는 createStore()메서드를 찾아가 applyMiddleware메서드를 composeWithDevTools로 감싸준다. 
```
#### 3. 프로젝트를 리로드 하면 redux까지 활성화 완료!
제곧내~~


## react-native-debugger-open 세팅
프로젝트 시작할 때 react-native-debugger를 자동으로 켜주는 react-native-debugger-open!!!   
원래는 프로젝트를 run 할때마다, 디버깅을 허용해줌으로 react-native-debugger가 실행되는데,   
그게 아닌 프로젝트가 run 할 때마다 기본으로 실행해주는 라이브러리 입니다.    

#### 1. 프로젝트 경로로 가서 라이브러리 설치.
```
npm i --save-dev react-native-debugger-open

or

yarn add react-native-debugger-open --save-dev
```

#### 2. package.json 코드 수정
```
"scripts": {
  "postinstall": "rndebugger-open"
}
```

#### 3. 스크립트 명령어 실행
```
npm run postinatll

or 

yarn postinstall
```

#### 4. 성공!!

![](https://images.velog.io/images/dody_/post/8d6dd131-4927-4a9a-9a81-358bddc0fa00/Screen%20Shot%202020-07-22%20at%201.28.57%20PM.png)
터미널에 이렇게 나오면 성공적으로 세팅이 된것!   
쏘이지~~~   

정말정말 rn 개발에서 소중하고, 기본적인 라이브러리예용.   
처음 접하는 분들이 보시고 제가 처음 이 라이브러리를 경험했을때 처럼 도움 받으시길 바래용!!!   

읽어주셔서 감사합니당!!! 땡큐!!!🙇‍