.PHONY: install start stop restart test

install:
	docker-compose exec node npm install

start:
	docker-compose up --detach

stop:
	docker-compose down --volumes --remove-orphans --timeout 0

restart: stop start

test:
	docker-compose exec node npm test
