.PHONY: help
.DEFAULT_GOAL:=help
help:	## display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-8s\033[0m %s\n", $$1, $$2 } END{print ""}' $(MAKEFILE_LIST)

run:  ## Run server from container on port 8000
	docker-compose up --build

.PHONY: test_server test_client
test_server:  ## Run server unittests from container
	docker-compose --file docker-compose.yml --file docker-compose.test.yml up --build server_test
test_client:  ## Run client/cypress tests from container
	docker-compose --file docker-compose.yml --file docker-compose.test.yml up --build client_test

