---
title: RN 에러노트🔥) This app could not be installed at this time.
date: "2020-07-27T01:47:18+09:00"
template: "post"
draft: false
slug: "error-note-3/"
category: "에러노트"
tags:
description: "안녕하세용 도디예용 오늘도 새로운 에러를 마주쳤어용ㅎㅎㅎㅎ 에러가 발생한 배경 앱 아이콘을 바꾸고..."
socialImage: "/media/42-line-bible.jpg"
---

안녕하세용 도디예용   
오늘도 새로운 에러를 마주쳤어용ㅎㅎㅎㅎ    
![](https://images.velog.io/images/dody_/post/f392ef57-1d4f-45bc-ae6d-ee5f42e09d58/d.png)

### 🔥 에러가 발생한 배경
앱 아이콘을 바꾸고 나서, Xcode로 프로젝트를 실행했는데   
This app could not be installed at this time. 이라는 에러를 띄워주며   
온몸으로 프로젝트 start를 거부하더군요.   
   
다른 블로그 글에 따르면, 링크 과정에서 특정 리소스가 엉킨 상태인듯하다.   
라고 예측하시더군요. 이런 엉키는 상황이 정말 자주 있습니다.   
에러노트의 바로 전 [작성글](https://velog.io/@dody_/React-Native-에러노트-No-bundle-URL-present)만 해도 build로 인해 꼬인 코드를 해결하기 위해    iOS/build를 리셋하는 방법에 대해 글을 작성했었더랬죠...   



### 🚒 에러 해결법
#### (1) 시뮬레이터 리셋
<img src="https://images.velog.io/images/dody_/post/ad689afc-c119-4a32-bd77-9cefa44057c0/Screen%20Shot%202020-07-15%20at%204.59.14%20PM.png" width="300px" title="" alt=""></img>
Device > Erase All Content and Settings...   
를 눌러 리셋합니다. 저는 이거 하니까 해결 됐어용.

#### (2) xcode 프로젝트 clean 
<img src="https://images.velog.io/images/dody_/post/15691449-a18b-4926-ac6f-86f860dbbdff/Screen%20Shot%202020-07-15%20at%206.04.00%20PM.png" width="300px" title="" alt=""></img>
Xcode > Clean Build Folder   
로 ios/build 폴더를 리셋. 

시뮬레이터 리셋, xcode 프로젝트 clean 하면 대부분 해결된다 하더라구요.   
쏘이지~~~   
