DOCKER_IMAGE:=restapi

run: build
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
run_shell: build
	docker run --rm -it --publish 8000:8000 --entrypoint /bin/sh ${DOCKER_IMAGE}
build:
	docker build --tag ${DOCKER_IMAGE} .


run_local: node_modules
	node server.js
node_modules:  # requires `choco install node` or `sudo apt-get install npm`
	npm install

clean:
	rm -rf \
		node_modules \
		package-lock.json