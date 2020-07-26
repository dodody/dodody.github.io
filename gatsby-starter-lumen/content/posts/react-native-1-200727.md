---
title: React Native) react native .apk로 추출하기
date: "2020-07-27T02:07:58+09:00"
template: "post"
draft: false
slug: "react-native-1/"
category: "React Native"
tags:
description: "안녕하세용 도디예용 검색하다가 처음 알았는데, apk는 android package의 줄임말이라고 한대용. 참 이런것도 궁금해하지 않는 나의 호기심 반성해~~ ..."
---

안녕하세용 도디예용   
검색하다가 처음 알았는데, apk는 android package의 줄임말이라고 한대용.   
참 이런것도 궁금해하지 않는 나의 호기심 반성해~~   
.apk는 안드로이드OS에서 어플리케이션을 설치할 수 있게 압축해놓은 포맷형태 입니다.   
apk 확장자 파일만 있다면 react native에서 개발한 작업물을 안드로이드 폰에 바로 설치 가능합니다. 저는 firebase App Distribution 테스트앱으로 등록하려고 추출해용.   

---

#### 1. 폴더 확인
android/app/src/main/assets 폴더가 있는지 확인한다. 없다면 만들어준다.
#### 2. bundle 파일 생성
아래 명령으로 번들 파일을 생성한다.
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
#### 3. android studio에서 프로젝트 빌드하기
상단 메뉴바의 build > build apk 실행
#### 4. android/app/build/outputs/apk/debug/app-debug.apk
위의 경로의 파일이 추출된 .apk 파일이다. 쏘이지



