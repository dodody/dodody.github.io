---
title: RN 에러노트🔥) 시뮬레이터 깨짐? Info.plist에 대하여
date: "2020-07-27T01:53:58+09:00"
template: "post"
draft: false
slug: "error-note-4/"
category: "에러노트"
tags: 
description: "안녕하세요! 도디예요! 오늘의 에러노트는 제가 엄청난 삽질로 이뤄진 에러스토리를 공유하려합니다. ..."
socialImage: "/media/42-line-bible.jpg"
---

# 👋개요
안녕하세요! 도디예요!   
오늘의 에러노트는 제가 엄청난 삽질로 이뤄진 에러스토리를 공유하려합니다.   

아직 앱스토어, 플레이스토어 배포 전의 **회사앱**이기 때문에 제대로 보이진않지만,   
아래처럼 나와야 하는데 위처럼 뷰가 내가 원하는 것처럼 나오지 않는 것이다!!! 제발 이러지 말아달라구..    
나는 이 현상을 시뮬레이터가 깨져보인다 라고 말하고 다녔다..   

<img src="https://images.velog.io/images/dody_/post/a2304613-ee6d-401f-81a1-05326d243249/Screen%20Shot%202020-07-29%20at%209.13.46%20PM%20copy.png" width="30%"></img>

시뮬레이터를 업데이트 하기도 했고, 시뮬레이터는 처음에 Xcode설치하면 같이 설치가 되기 때문에 Xcode도 다시 설치해봤다.    
달라지는건 없었고, 빌드 할때 나오는 오류에 대해 찬찬히  찾아보기 시작했다.   
몇십개의 해결책이라는 방법들로 빌드 파일을 클린해보기도 하고, 시뮬레이터도 리셋도 몇십번을 해봣다.   

> 결론은 Info.plist 파일이 잘못되었던 것이다. 풕..

rn 작업을 하면서 Info.plist 건들이라는건 이리저리 많이 봤는데, 솔직히 이 폴더가 뭘 의미하는지도 모르면서 글자를 수정하기만 했다.   
이번 기회에 Info.plist를 깊게 살펴보고자 한다.

# 👋Info.plist, 안녕?
ios>프로젝트명>Info.plist 에 위치해 있는 Info.plist는 Xcode에서도 정보를 확인해볼 수 있다.   

![](https://images.velog.io/images/dody_/post/f557f862-342a-479d-b28d-42c706c649cb/Screen%20Shot%202020-07-30%20at%2011.18.14%20AM.png)

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>ko</string>
	<key>CFBundleDisplayName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
		<key>NSExceptionDomains</key>
		<dict>
			<key>localhost</key>
			<dict>
				<key>NSExceptionAllowsInsecureHTTPLoads</key>
				<true/>
			</dict>
		</dict>
	</dict>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>armv7</string>
	</array>
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>

```
코드는 이렇게 생겼다. 으.. 별로 친해지고 싶게 안생겼지만. 친해져보자.    
모든 아이폰 어플리케이션은 Info.plist를 가지고 있다. Info.plist는 어플리케이션의 이름이나 앱 아이콘.. 등의 기본정보를 가지고 있다.   
자세하게 **어떤 기본정보들이 있고, 어떻게 컨트롤이 가능한지** 하나하나 천천히 살펴보도록 하자.    

# 🚥하나하나 살펴보기


```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	// 번들의 주 언어 또는 주 지역 (type: string)
	<key>CFBundleDevelopmentRegion</key>
	<string>ko</string>
    
	// 아이콘과 같이 보이는 앱 이름 (type: string)
	<key>CFBundleDisplayName</key>
	<string>$(PRODUCT_NAME)</string>
    
	// ??
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
    
	// 어플리케이션 고유 식별자, 일반적으로 com.회사명.프로젝트명으로 구성 (type: string)
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
    
	// Info.plist 형식의 버전 (type: string)
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
    
	// 어플리케이션의 실제 이름 (type: string)
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
    
	// 애플리케이션 실행 OS 코드, 번들 종류를 나타내는 코드 (type: string)
	<key>CFBundlePackageType</key>
	<string>AAAA</string>
    
	// 번들의 릴리즈 버전 (type: string)
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
    
	// 네글자로 이뤄진 번들 식별 코드, 애플리케이션 개발자의 OS 코드
	<key>CFBundleSignature</key>
	<string>????</string>
    
	// 번들의 릴리즈 버전
	<key>CFBundleVersion</key>
	<string>1</string>
    
	// iOS에서만 실행할 번들인지
	<key>LSRequiresIPhoneOS</key>
	<true/>
    
	// 배포시에 지워야 하는것, 
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
		<key>NSExceptionDomains</key>
		<dict>
			<key>localhost</key>
			<dict>
				<key>NSExceptionAllowsInsecureHTTPLoads</key>
				<true/>
			</dict>
		</dict>
	</dict>
    
	//위치 정보에 접근해야 하는 이유 (권한 요청 대화 상자에 표시된다)
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
    
	// ? 
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
    
	// 앱 실행에 필요한 요구조건들
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>armv7</string>
	</array>
    
	// 앱이 지원하는 인터페이스 방향, 가로버전, 세로버전 지원하는지 안하는지
	// 자세한 수정은 아래를 참고
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>

```

# 🚥더 자세히 살펴보기

### UISupportedInterfaceOrientations
앱이 지원하는 인터페이스 방향, 가로버전, 세로버전 지원하는지 안하는지   
나는 디바이스를 가로로 해도 세로만 보이게 하고 싶었다. 그렇다면 아래처럼 코드를 수정하면 된다.   

```
// before

<key>UISupportedInterfaceOrientations</key>
<array>
	<string>UIInterfaceOrientationPortrait</string>
	<string>UIInterfaceOrientationLandscapeLeft</string>
	<string>UIInterfaceOrientationLandscapeRight</string>
</array>

// after
<key>UISupportedInterfaceOrientations</key>
<array>
	<string>UIInterfaceOrientationPortrait</string>
</array>

```
참고로 portrait와 landscape의 차이를 위해 이미지를 하나 첨부한다.

![](https://images.velog.io/images/dody_/post/a35bed46-edf5-4d80-9fa0-043af27d432c/Screen%20Shot%202020-07-30%20at%2012.52.49%20PM.png)




# 🚥더 알아두면 좋을 Info.plist Key, value

...


여기까지고, 프로젝트 상황에 맞는 설정을 해주어야 사용자의 경험과 신뢰도와 연결이 된다.   
정확한 정보를 파악하고 잘 세팅해서 좀더 완성도 높은 앱개발을 하자~~~











