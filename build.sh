#!/usr/bin/env bash

set -ex

export ANDROID_SDK_ROOT=$HOME/Android/Sdk

# npm i -D

npm run build
npm run export

npx cap sync

# npx cap run android
