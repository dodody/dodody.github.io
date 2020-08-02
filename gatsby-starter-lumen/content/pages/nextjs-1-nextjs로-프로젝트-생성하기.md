---
title: "1. Next.js로 프로젝트 생성하기"
template: "page"
socialImage: "/media/image-4.jpg"
---


자 본격적으로 Next.js로 프로젝트를 만들어보자.    

## ☄️Next.js 시작하기

1. 노드 버전 확인 

노드 버전 10.13 이상이 필요하다. next.js를 하러 오신분들 치고 Node.js 설치 안되어있는 사람 없을 듯 하다.   
일단 본인 버전 확인은 하고 가자. 나는 v12.8.1 이더라

```
node -v

```

1. next 프로젝트 설치

```
npx create-next-app
// or
yarn create next-app
```

중간에 프로젝트 이름을 뭘로 할지 정하라고 한다. 자기 프로젝트 이름 알아서 적으면 된다.    
내 프로젝트 이름은 nextjs-default-setting로 했다.   

```
What is your project named? nextjs-default-setting
```
프로젝트를 시작해보자

```
cd nextjs-default-setting
yarn dev
```