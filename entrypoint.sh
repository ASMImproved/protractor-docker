#! /bin/bash

cd sc-*-linux
./bin/sc --user $SAUCE_USER --api-key $SAUCE_ACCESS_KEY --readyfile /sauce_is_ready &

while [ ! -e /sauce_is_ready ]; do sleep 1; done

echo "sauce is ready"

cat /conf.js

exec protractor /conf.js
