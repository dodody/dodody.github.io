---
title: RN) react native .ipa로 추출하기 (react native app distribution에 등록하기 - iOS)
date: "2020-07-30T11:36:02+09:00"
template: "post"
draft: false
slug: "react-native-6/"
category: "React Native"
tags:
description: "안녕하세요 도디예용 오늘은 react native 프로젝트를 .ipa로 추출하는 법을 알아봅시다. 저는 앱 테스트를 위해 ...   "
---

안녕하세요 도디예용    
오늘은 react native 프로젝트를 .ipa로 추출하는 법을 알아봅시다.    
저는 앱 테스트를 위해 firebase app distribution을 위해 추출합니다...   

.ipa로 추출하는 법은 정말 쉬운데, 하,,   
까먹어서 오늘 하루종일 10시간은 삽질하다가 이제야 답을 찾아 블로그에 재빨리 메모해두려고 왔습니다.    
역시 메모하는 습관은 중요하다는 것을 다시 한번 깨닫고 본론으로 들어가 봅니다.   

아, 이건 단순히 app distribution 테스트앱을 위해 .ipa로 추출하는 방법이니     
배포시에는 꼭 꼼곰히 Info.plist 등등을 살펴보도록하세요.    


### 1. project root에서 아래 코드로 iOS를 번들링한다.
```
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
```

방법2
```
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios

react-native bundle --dev false --entry-file index.ios.js --bundle-output ios/main.jsbundle --platform ios
react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios

```


### 2. Xcode로 돌아와 Device를 Generic iOS device로 바꾼다.
### 3. Product > Scheme > Edit Scheme...에서 Run > info > Build Configuration을 Debug > Release로 바꾼다.
### 3. Product > Build
### 4. ~/Libaray/Developer/Xcode/DerivedData/{프로젝트명의 폴더}/Build/Products/Release-iphoneos/프로젝트명.app
Library는 숨겨져있는 폴더다. 숨겨진 폴더는 맥에서 shift + command + . 으로 보이게 할 수 있다.   
프로젝트명.app를 이제 .ipa로 바꾸어야 한다. 이어서 진행해보자.
### 5. Payload 폴더를 만든다.
### 6. 폴더 안에 프로젝트명.app을 넣고, 압축파일로 만든다.
### 7. Payload.zip 파일이 만들어 졌다. 그 파일명을 Payload.ipa로 바꾸면 .ipa 추출 완료....!


---

여기까지다. 제발 모두들 삽질을 덜 하기를 바란다... 나와 이 글을 읽고 있는 그대까지