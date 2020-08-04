---
title: RN) iOS 배포를 위한 Info.plist 공부하기
date: "2020-08-04T15:20:06+09:00"
template: "post"
draft: false
slug: "react-native-8/"
category: "React Native"
tags:
description: "안녕하세요 도디예요. 오늘은 react native에서 앱을 배포할때 실제 기기에서 가로모드에도 세로로 앱이..."
---

안녕하세요 도디예요. 
오늘은 iOS 배포를 위해 꼭 필요한 단계인 Info.plist 세팅에 대해 정리해보려 해요.   

[RN 에러노트🔥) 시뮬레이터 깨짐? Info.plist에 대하여](/posts/error-note-5/) 에서도 Info.plist에 대해 언급하기로 했는데요.   
이번 글에서는 완전히 배포와 개발모드를 위한 세팅에 대해서만 정리를 해봅니다.   

🏃‍♂️🏃‍♂️🏃‍♂🏃‍♂️🏃‍♂️🏃‍♂️렛츠꼬🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍🏃‍♂️   

---
# 개발 모드를 위한 Info.plist

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>ko_KR</string>
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
	<string>$(MARKETING_VERSION)</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>$(CURRENT_PROJECT_VERSION)</string>
	<key>LSRequiresIPhoneOS</key>
	<false/>
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
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>

```

# 배포를 위한 Info.plist

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>ko_KR</string>
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
	<string>$(MARKETING_VERSION)</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>$(CURRENT_PROJECT_VERSION)</string>
	<key>LSRequiresIPhoneOS</key>
	<false/>
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
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>

```

---

# 추가하고 삭제한 사항에 대해

### HTTPS 통신 설정 (배포 시 삭제)
애플에서 어플이 외부와 HTTP 통신을 할때는 HTTPS로 통신을 하지 않으면 통신이 불가하도록 설정하는 기능을 넣었다고 합니다.   
하지만 RN(react native)를 개발할때는 로컬에 개발 서버를 띄우고 개발 서버와 통신하여 어플을 기동하므로   
RN(react native)는 이 기능을 기본적으로 사용하지 않도록 설정해놨습니다.   
하지만 실제 빌드하여 제공할 때는 개발 서버를 이용하지 않으므로 이 부분을 제거할 필요가 있습니다.   
다시 개발을 할 경우에는 이부분을 복원해야합니다. 위에서 설명했지만 개발시 개발 서버(localhost)와 통신은 HTTP로 하기 때문입니다.   

```
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
```


### Location 권한 설명 추가

```
<key>NSLocationWhenInUseUsageDescription</key>
<string></string>
```
위의 코드는 location과 관련된 설정이다.    
사용을 하지 않는 분들은 삭제해도 되지만, 광고에서 위치 정보를 하는 경우 아래와 같이 수정해야 한다.   
이부분을 수정하지 않으면 앱을 앱스토어 커넥터(Appstore Connector)에 업로드할시 문제가 발생한다.    

```
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>$(PRODUCT_NAME) needs Location access for useful advertisement</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>$(PRODUCT_NAME) needs Location access for useful advertisement</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>$(PRODUCT_NAME) needs Location access for useful advertisement</string>
```