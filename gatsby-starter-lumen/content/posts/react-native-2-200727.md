---
title: React Native) react native 앱 이름 바꾸기
date: "2020-07-27T02:25:17+09:00"
template: "post"
draft: false
slug: "react-native-2/"
category: "React Native"
tags:
description: "안녕하세용 도디예용 저는 요즘 회사에서 리액트네이티브로 앱을 만들고 있는데용 테스트용으로 대충 네이밍한 dody-rn-test 프로젝트를 실제 프로젝트로 발전시키게 되었었어용. ..."
---

안녕하세용 도디예용   
저는 요즘 회사에서 리액트네이티브로 앱을 만들고 있는데용   
테스트용으로 대충 네이밍한 dody-rn-test 프로젝트를 실제 프로젝트로 발전시키게 되었었어용.   
이 과정에서 번들명 패키지명 프로젝트명을 바꾼 경력이 있습니다..   
아주 토나오는 과정이었고 나중에 그것도 한번 글로 정리할거예용.    

오늘은 번들명, 패키지명, 프로젝트명에 이어서 **설치될 앱의 이름** 바꾸는걸 해보려 해요. 레츠꼬   

### Android
1. package.json 의 displayName 수정   
2. android/app/src/main/res/values/strings.xml 코드를 수정합니다.   
app_name 변수를 수동으로 변경해는 작업입니다. 변경하고 다시 코드 실행하면 앱이름 바뀌어 있습니다.   
```
<resources>
	<string name="app_name">새로운 앱 이름</string>
</resources>

```
다른 블로그에서 android 폴더를 삭제하고 블라블라 뭔가 하라는 글을 본적이 있는데요.   
다음에 앱 이름을 바꾸게 되는 날이 오면 다시 테스트 해보고 오류가 있다면 수정을 해야겠어용   


### iOS
1. xCode에서 General탭 > Identity > Display Name을 바꿔주면 됩니당   
![](https://images.velog.io/images/dody_/post/44c87c34-ee75-4770-b5e0-ad2dbc37dec8/Screen%20Shot%202020-07-16%20at%2012.13.58%20PM.png)
쏘이지