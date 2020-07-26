---
title: React Native) 안드로이드 버전 수정하기
date: "2020-07-27T02:31:05+09:00"
template: "post"
draft: false
slug: "react-native-4/"
category: "React Native"
tags:
description: "안녕하세요 도디예용 오늘은 안드로이드 버전 수정하기 짧게 공유드릴게용. 이번에 firebase에 app distribution에..."
---

안녕하세요 도디예용   
오늘은 안드로이드 버전 수정하기 짧게 공유드릴게용.   
이번에 firebase에 app distribution에 새로운 버전의 테스트앱을 배포하기 위해서   
[안드로이드 스튜디오 도큐먼트](https://developer.android.com/studio/publish/versioning?hl=ko#appversioning) 를 찾아서 공부해봤습니다.   

## 안드로이드 버전 업 하기
android/app/build.gradle 파일을 수정해야 합니다.

```
android {
	defaultConfig {
    	versionCode 2
        versionName "1.0.1"
    }
}
```

위의 코드는 버전을 1.0.1로 올리는 코드입니다.   
여기서 주목해야 할 점은 versionCode, versionName 두가지 입니다.    

### versionCode
양의 정수이며 내부 버전 번호로 사용됩니다.   
이 번호는 가지고 있던 앱 버전과 비교해 최신인지 여부를 판단하는데만 사용되며,   
번호가 높을 수록 최신 버전입니다. 사용자에게는 표시되지 않습니다.   
안드로이드의 시스템이 version를 사용하여 사용자가 원래의 버전보다 낮은 apk를    
설치하지 못하게 함으로 다운그레이드를 방지합니다.   

### versionName
사용자에게 표시되는 버번 번호로 사용됩니다. 


쏘이지~~~~~
참고로 제 [프로젝트의 버전 관리에 대한 쓴 글](https://velog.io/@dody_/RN-개발기-앱-버전-관리는-어떻게-할까)도 있으니 읽어보세용 ㅎㅎ

