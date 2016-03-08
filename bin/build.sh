#!/usr/bin/env bash

echo "installing dependencies..."
rm -rf node_modules > /dev/null 2>&1
npm install
node_modules/typings/dist/bin/typings.js install

echo "running build..."
gulp build:prod