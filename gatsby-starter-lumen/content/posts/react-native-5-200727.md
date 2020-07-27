---
title: RN) react native 앱 아이콘 바꾸기
date: "2020-07-27T02:34:02+09:00"
template: "post"
draft: false
slug: "react-native-5/"
category: "React Native"
tags:
description: "안녕하세용 도디예용 오늘은 react native 프로젝트의 앱 아이콘을 바꿔봅시당 아이콘 사이즈 받아오기 일단..."
---

안녕하세용 도디예용   
오늘은 react native 프로젝트의 앱 아이콘을 바꿔봅시당   

## 아이콘 사이즈 받아오기   
일단 로고를 추출해놨습니당
![](https://images.velog.io/images/dody_/post/f8afa003-fd61-4a7e-adf8-0852d4cf8742/120.png)

이 로고는 1024x1024 사이즈인데, Android에 필요한 사이즈, iOS에 필요한 사이즈로 준비를 해야합니다.   
하나하나 일일히 export할 필요없이, 우리의 시간을 아껴줄 generator가 정말 많습니다. 박!수!   
저는 [App Icon Generator] (https://appicon.co/), [안드로이드 Asset Studio Launcher Icon Generator] (http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher) 이 두 웹사이트를 이용했습니다   

## [iOS - App Icon Generator] (https://appicon.co/)
<img src="https://images.velog.io/images/dody_/post/765b93d4-b39f-46bf-80f6-d4d71e6c075d/Screen%20Shot%202020-07-23%20at%203.18.07%20AM.png" width="80%"></img>

이 사이트가 우리를 도와줄 거다.   
드래그 해서 앱을 넣으면 iPhone, iPad, Watch, Mac, Android까지 추출해준단다.    
모두 활성화 하고 generate 버튼을 누르면
<img src="https://images.velog.io/images/dody_/post/9f8118ca-fb71-4ace-97da-078755dfcca1/Screen%20Shot%202020-07-23%20at%203.20.39%20AM.png" width="80%"></img>
이런 결과값을 받게 된다.    


아니잇! 이 사이트에서 안드로이드도 export 가 된다면 아래 Asset Studio Launcher Icon generator 안써도 되지 않나요? 할 수 있겠지만,   
안드로이드 최신 디바이스에서는 둥근 버전의 아이콘을 지원하는데,   
그건 아래 사이트에서만 지원하기 때문에 **둥근 버전의 안드로이드 앱로고**를 위해 아래 제너레이터도 사용하도록 합시당.   


## [Android - 안드로이드 Asset Studio Launcher Icon generator] (http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher)

<img src="https://images.velog.io/images/dody_/post/9c6a2f5a-1a03-4ca8-b2f2-6b794f3f2acd/Screen%20Shot%202020-07-24%20at%2010.15.11%20AM.png" width="80%"></img>

1. 사이트 화면에 로고를 드래그앤드롭으로 내려놓고   
2. 왼쪽의 옵션을 컨트롤해서 둥근 로고로 수정을 해주고   
3. 오른쪽 상단의 다운로드 버튼을 누르면 됩니당.    

> 다운로드 된 둥근 친구들은 미리 ic_launcher_round.png 라고 이름을 수정해주세요. 

자 그러면 이제 iOS, Android에 앱로고를 반영해봅시당.


## Android 아이콘 바꾸자!

안드로이드 아이콘을 바꾸려면 디렉토리 이미지를 수정하면 됩니다.   
android/app/src/main/res 로 들어가면   
![](https://images.velog.io/images/dody_/post/fefd3a64-76c1-4858-b5d5-8860f3ea95c3/Screen%20Shot%202020-07-24%20at%2010.21.56%20AM.png)

이렇게 생긴 폴더들이 있는데, 기본 앱로고가 들어가 있어용!   
이름 바뀌지 않게 새로운 앱로고를 잘 붙여넣기 해줍니다. 그러면 안드로이드 앱로고 바꾸기 완료!   

## iOS 아이콘 바꾸자!

iOS 앱아이콘 수정은 Xcode에서 합니당.   
프로젝트 루트에서 아래 명령어로 Xcode를 실행합니당.   
```
xed ./ios
```

<img src="https://images.velog.io/images/dody_/post/d9e4aeb8-fe22-402e-a24a-b31e408aedfd/Screen%20Shot%202020-07-24%20at%2010.40.14%20AM.png" width="50%"></img>

<img src="https://images.velog.io/images/dody_/post/7c193d7c-22fc-4810-a676-a3bb11faa446/Screen%20Shot%202020-07-24%20at%2010.40.21%20AM.png" width="80%"></img>

dody_app/Images.xcassets로 들어가서 AppIcon을 누르면 앱 아이콘 사이즈에 맞게 자리를 비워놨어용! Xcode 짱 귀엽당!!!   
학교다닐때 자리정하기 그림그린거같아.    
하이튼 위치에 맞게 잘 넣어줍니다.   

![](https://images.velog.io/images/dody_/post/f5b7987e-73d7-46fb-8add-97ea3aefe40e/Screen%20Shot%202020-07-24%20at%2010.54.16%20AM.png)

자! 자기 자리를 잘 지켜서 들어갔어용!!!


## 짠! 완성!

<img src="https://images.velog.io/images/dody_/post/e376ab4d-383b-4463-a7ea-f9c2a78c00fb/Screen%20Shot%202020-07-24%20at%2011.09.32%20AM.png" width="50%"></img>

<img src="https://images.velog.io/images/dody_/post/d25cf438-6a89-48b9-be46-cab497c5ea98/Screen%20Shot%202020-07-24%20at%2011.14.39%20AM.png" width="50%"></img>

둘다 잘 세팅이 되었네용 >_< 쏘이징~~