#!/usr/bin/env bash

echo "cleaning up"
pm2 del all
rm -f ~/.pm2/dump*.pm2
rm -f ~/.pm2/logs/*.log

echo "cleaning up done"

echo "start app"
pm2 start --watch dist ./config/ecosystem.config.js
