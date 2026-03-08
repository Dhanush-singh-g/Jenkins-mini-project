#!/bin/bash

ENV=$1
echo "Deploying to $ENV environment..."

docker stop mern-app-$ENV || true
docker rm mern-app-$ENV || true

docker run -d -p 3000:3000 --name mern-app-$ENV mern-jenkins-app
