---
title: React 라이브러리📚) Momentjs fromNow(), locale 한국 시간으로 수정
date: "2020-07-27T20:29:02+09:00"
template: "post"
draft: false
slug: "react-library-1/"
category: "React 라이브러리"
tags:
description: "안녕하세용 도디예용 오늘은 momentjs 가져왔어용! 시간관련된 작업은 momentjs를 안 쓸수 없죠. 저도 예전..."
---

안녕하세용 도디예용   
오늘은 momentjs 가져왔어용! 시간관련된 작업은 momentjs를 안 쓸수 없죠.   
저도 예전부터 많이 써왔던 라이브러리인데 오늘은 momentjs에서 locale setting에 대해 말해보려해요.   
momentjs의 locale 기본값은 'en'인데 이걸 한국 값인 'ko'로 바꿔주어야 합니다.   
fromNow()도 같이 사용해서 예제를 보여드리겠습니다.   

>참고
[momentjs 문서 [Time from now]](https://momentjs.com/docs/#/displaying/fromnow/)
[momentjs 문서 [Changing locale global]](https://momentjs.com/docs/#/i18n/changing-locale/)

## locale 세팅하기
---
```
import moment from 'moment';
console.log(moment().fromNow());

// console.log 결과값
// a few seconds ago
```
---
나는 a few seconds ago 말고 한글로 몇초전을 원한담말이다. 

---
```
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
console.log(moment().fromNow());

// console.log 결과값
// 몇 초 전
```
---

```
import 'moment/locale/ko';
```
요거 한줄 추가하면 locale이 ko로 바뀌게 됩니당! 쏘이지

## fromNow()
---
```
import moment from 'moment';
import 'moment/locale/ko'; // 이줄 추가
console.log(moment([2020, 07, 21, 11, 15]).fromNow());

// console.log 결과값
// 하루 전
```
---

년도, 월, 일, 시간, 초 단위로 배열에 넣으면 fromNow()가 계산 됩니다.   
쏘이지~~