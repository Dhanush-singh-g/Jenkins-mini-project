#!/bin/bash

ENV=$1

if [ "$ENV" = "dev" ]; then
  PORT=3000
  NAME="mern-app-dev"
elif [ "$ENV" = "staging" ]; then
  PORT=3001
  NAME="mern-app-staging"
elif [ "$ENV" = "prod" ]; then
  PORT=3002
  NAME="mern-app-prod"
fi

docker stop $NAME || true
docker rm $NAME || true

docker run -d -p $PORT:3000 --name $NAME mern-jenkins-app
