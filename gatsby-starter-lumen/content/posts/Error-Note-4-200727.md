---
title: RN 에러노트🔥) No bundle URL present.
date: "2020-07-27T01:53:58+09:00"
template: "post"
draft: false
slug: "error-note-4/"
category: "에러노트"
tags: 
  - " "
description: "안녕하세용 도디예용 배포를 위해 이것저것 만지다가 프로젝트를 빌드했더니 아래의 에러가 나타났어용 ..."
socialImage: "/media/42-line-bible.jpg"
---

안녕하세용 도디예용   
배포를 위해 이것저것 만지다가 프로젝트를 빌드했더니 아래의 에러가 나타났어용   

![](https://images.velog.io/images/dody_/post/654cff52-f473-4ed1-aea7-f38a1304820a/Screen%20Shot%202020-07-13%20at%203.58.41%20PM.png)

위의 [리액트 네이비트 깃헙 이슈](https://github.com/facebook/react-native/issues/26331)에서도 정말 많은 의견이 오갔는데,   
결론은 ios/build 폴더 삭제 를 삭제하면 됩니당. 프로젝트 루트 디렉토리로 가서 아래 명령어를 치세요.   
```
rm -rf ios/build
```

다른 방법으로는 xcode에서 **product > clean build foler** 로 build 폴더를 리셋할수있어용 쏘 이지   
![](https://images.velog.io/images/dody_/post/b857f337-6a00-49e7-b680-43d18d64c48d/Screen%20Shot%202020-07-14%20at%2012.58.18%20PM.png)

