#!/usr/bin/env bash

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

SOURCE="/Users/runner/work/android_github_mac_ubuntu/android_github_mac_ubuntu/android/app/build/outputs/apk/release/app-release.apk"
DESTINATION="/Users/runner/work/android_github_mac_ubuntu/android_github_mac_ubuntu/app/android"

echo -e "${GREEN}Copying apk...${NC}"

# Создаем целевую директорию, если она не существует
mkdir -p "$DESTINATION"

# Копируем файл APK
if [ -f "$SOURCE" ]; then
    cp "$SOURCE" "$DESTINATION/app-release.apk"
    echo -e "${GREEN}Copy complete.${NC}"
else
    echo -e "${RED}Source file does not exist.${NC}"
fi
