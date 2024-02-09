#!/usr/bin/env bash

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Copying apk...${NC}"

APKDIR="$PWD/app/android"

if [ -d "$APKDIR" ]; then
    rm -r "$APKDIR"
    echo -e "${RED}File removed.${NC}"    
fi

echo "Creating app directory..."
mkdir -p $APKDIR
cp -r /Users/runner/work/android_github_mac_ubuntu/android_github_mac_ubuntu/android/app/build/outputs/apk/release/app-release.apk $APKDIR

echo -e "${GREEN}Copy complete.${NC}"