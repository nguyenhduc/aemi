TAG?=16-alpine
PORT?=8000
APP_DIR?=app

.PHONY: clean docker run

clean:
	rm -rf .pnpm-store
	rm -rf ${APP_DIR}/node_modules
	rm -f ${APP_DIR}/pnpm-lock.yaml
docker:
	docker build \
		docker-config/ \
		-t aemi/aemi-test:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
	docker container run \
		--name aemi-build-dev \
		--rm \
		-t \
		-v "${CURDIR}":/app \
		-e APP_DIR=${APP_DIR} \
		aemi/aemi-test:${TAG} \
		docker-config/docker.sh
run:
	docker container run \
		--name aemi-test \
		--rm \
		-t \
		-p ${PORT}:${PORT} \
		-v "${CURDIR}":/app \
		aemi/aemi-test:${TAG} \
		-c "cd /app/${APP_DIR} && pnpm $(filter-out $@,$(MAKECMDGOALS))"
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
