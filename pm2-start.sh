#!/usr/bin/env bash

alias pm2='authbind --deep pm2'

echo "cleaning up"
pm2 del api
rm -f ~/.pm2/dump*.pm2
rm -f ~/.pm2/logs/api-*.log
pm2 update

echo "cleaning up done"

echo "start app"
pm2 start ./config/ecosystem.config.js
