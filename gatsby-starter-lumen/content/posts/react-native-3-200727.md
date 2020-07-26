---
title: React Native) 안드로이드 디바이스 기기 테스트
date: "2020-07-27T02:28:21+09:00"
template: "post"
draft: false
slug: "react-native-3/"
category: "React Native"
tags:
description: "안녕하세용 도디옝용 오늘은 안드로이드 디바이스에서 기기 테스트에 대해 알아봐용!! 에뮬레이터가 잘 되어있다 한들..."
---

안녕하세용 도디옝용   
오늘은 안드로이드 디바이스에서 기기 테스트에 대해 알아봐용!! 에뮬레이터가 잘 되어있다 한들...   
실제 기기로 써보는거랑 보이는게 천지차이더라구요.   
에뮬레이터에서는 분명히 사이즈 괜찮아보였는데.. 기기로 보니까 너무 차이나더라...!   

그래서 오늘 안드로이드 기기로 테스트 세팅하는 법에 대해 글을 써보려합니다.   
[RN 도큐먼트](https://reactnative.dev/docs/running-on-device#running-your-app-on-android-devices)에 기기 테스트 법에 대해 잘 나와있긴 합니다. 참고해보세용   

## 안드로이드 디바이스 설정하기
Android Studio로 디바이스 테스트를 하기 위해선   
테스트할 안드로이드 핸드폰을 개발자 모드로 세팅을 해야 합니다.   

저는 갤럭시 S10 5G기기 입니다.    
> 설정 > 휴대전화 정보 > 소프트웨어정보 > **빌드번호**   

빌드번호를 여러번 클릭하고, 기기 잠금 패턴을 해지하면   

> 설정 > 개발자옵션

이 새롭게 나타납니다. 

> 설정 > 개발자옵션 > USB 디버깅

을 활성화 합니다. 여기까지가 안드로이드 디바이스 설정 완료입니다.


## Android Studio에서 디바이스 테스트 시작시키기
에뮬레이터가 작동하는 본인 개발 기기에 핸드폰을 연결합니다.   
![](https://images.velog.io/images/dody_/post/a7234789-6696-43be-a136-526f302a7a1b/Screen%20Shot%202020-07-22%20at%2011.53.43%20AM.png)

안드로이드 스튜이오에서 기기선택을 본인 디바이스로 선택하고   
저 녹색 벌레같이 생긴 Debug 'app' 버튼을 클릭합니다.    
그러면 본인 핸드폰에    
> Waiting For Debugger ...

이라는 안내문구와 함께 조금 기다리다보면 프로젝트가 실행됩니다~~   

## 만약, 지금 작업하고 있는 작업물이 디바이스에 반영이 되지 않는다면?

네 바로 반영이 되지않는것이 당연한겁니당!   
테스트 기기에서는 번들 파일을 읽고 테스터 기기에 띄우는 거기 때문에

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
프로젝트의 루트에서 위의 명령어로 번들파일을 업데이트 하고   
디바이스 기기 디버깅을 실행하면 반영되는걸 확인 할 수 있습니당.   
쏘이지~~   