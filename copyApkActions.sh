#!/usr/bin/env bash

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SOURCE="/Users/runner/work/android_github_mac_ubuntu/android_github_mac_ubuntu/demo_app/android/app/build/outputs/apk/release/app-release.apk"

DESTINATION="/Users/runner/work/android_github_mac_ubuntu/android_github_mac_ubuntu/tests/app/android"

echo $SOURCE
echo $DESTINATION
echo -e "${GREEN}Copying apk...${NC}"

mkdir -p $DESTINATION

cp -r $SOURCE $DESTINATION

echo -e "${GREEN}Copy complete.${NC}"
