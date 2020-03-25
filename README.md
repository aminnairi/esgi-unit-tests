# esgi-unit-tests

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](gnu.org/software/make/)

## Installation

```console
$ git clone https://github.com/aminnairi/esgi-unit-tests.git ~/github/aminnairi/esgi-unit-tests
$ cd ~/github/aminnairi/esgi-unit-tests
```

## Start

```console
$ make start
```

*This will start the Docker Compose services.*

## Installation

```console
$ make install
```

*This will install the Node.js development dependencies.*

## Test

```console
$ make test
```

*This will test the source-code in the [`src`](./src) folder.*

## Restart

```console
$ make restart
```

*This will restart the Docker Compose services.*

## Stop

```console
$ make stop
```

*This will stop the Docker Compose services.*
