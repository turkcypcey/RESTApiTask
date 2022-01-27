
run:
	docker-compose up --build

.PHONY: test_server test_client
test_server:
	docker-compose --file docker-compose.yml --file docker-compose.test.yml up --build server_test
test_client:
	docker-compose --file docker-compose.yml --file docker-compose.test.yml up --build client_test

