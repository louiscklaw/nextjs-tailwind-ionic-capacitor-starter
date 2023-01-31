#!/usr/bin/env bash

set -ex

export ANDROID_SDK_ROOT=$HOME/Android/Sdk

# npm i -D

# sudo ln -s /usr/bin/jlink ./jlink
# sudo ln -s /usr/bin/javac ./javac
# sudo ln -s /usr/bin/jmod ./jmod

rm -rf ./.next

npm run build
npm run export

npx cap sync

npx cap run android
