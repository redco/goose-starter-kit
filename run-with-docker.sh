#!/bin/sh -ex

DOCKER_BUILD_NAME="goose-starter-kit"
docker build -t ${DOCKER_BUILD_NAME} .
docker run -it --rm ${DOCKER_BUILD_NAME}
