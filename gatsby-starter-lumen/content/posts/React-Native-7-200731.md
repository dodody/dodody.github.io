---
title: RN) react native iOS, Andriod 가로모드 막아버리기, 세로모드만 지원하기
date: "2020-07-31T00:19:02+09:00"
template: "post"
draft: false
slug: "react-native-7/"
category: "React Native"
tags:
description: "안녕하세요 도디예요. 오늘은 react native에서 앱을 배포할때 실제 기기에서 가로모드에도 세로로 앱이..."
---

안녕하세요 도디예요. 
오늘은 react native에서 앱을 배포할때 실제 기기에서 가로모드에도 세로로 앱이 보이도록 막는법에 대해 알아보도록합니다.   

참고로 앱에서 사용되는 가로모드, 세로모드의 속성에 대한 이미지 입니다.   
일반적인 가로모드는 Portrait입니다.   

![portrait](media/posts/portrait.png)

# Android에서 가로모드 막기
**android/app/src/main/AndroidManifest.xml**에서 컨트롤을 합니다.   
어플리케이션 정보를 안드로이드 시스템에 알려주는 파일입니다.   

하단 코드 위치에
android:screenOrientation="portrait"를 추가하면 됩니다.

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.bp.oheadline">
    <uses-permission android:name="android.permission.INTERNET" />
    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"

        // ↓ 여기에 코드를 추가합니다.
        android:screenOrientation="portrait"

        android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>
</manifest>
```



# iOS에서 가로모드 막기
**ios/projectname/Info.plist**에서 컨트롤을 합니다.   
iOS 어플리케이션 정보를 담고있는 파일입니다.   

```
...
  <dict>
    ...

    // 이 key의 value를 수정합니다. default가 3줄이 있을텐데 그중 두줄을 지우면 세로모드만 지원합니다.
    <key>UISupportedInterfaceOrientations</key>
    <array>
      <string>UIInterfaceOrientationPortrait</string>
    </array>
    ...
  </dict>
...
```
