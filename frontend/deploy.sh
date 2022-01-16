#!/bin/bash
########################################
# Put this on a Server
# run chmod +x deploy_app.sh to make the script executable
# 
# Execute this script:  ./deploy_app.sh ariv3ra/python-circleci-docker:$TAG
# Replace the $TAG with the actual Build Tag you want to deploy
#
########################################

DOCKER_IMAGE="itmooc_frontend"
CONAINER_NAME="itmooc_frontend"
SERVICE_PORT=3000

#Check for running container & stop it before starting a new one
if [ $(docker inspect -f '{{.State.Running}}' $CONAINER_NAME) = "true" ]; then
    docker stop $CONAINER_NAME
fi

docker build -t $DOCKER_IMAGE .

docker run -d --rm=true -p $SERVICE_PORT:$SERVICE_PORT --name $CONAINER_NAME $DOCKER_IMAGE

docker ps -a