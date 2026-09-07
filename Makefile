# Interpreter Makefile

BINARY_NAME        := interpreter
SERVER_BINARY_NAME := server
CMD_PATH           := ./cmd/interpreter
SERVER_CMD_PATH    := ./cmd/server
BUILD_DIR          := ./bin

.PHONY: all build build-server run run-server test clean fmt vet

## all: build both binaries (default target)
all: build build-server

## build: compile the interpreter binary into bin/
build:
	@mkdir -p $(BUILD_DIR)
	go build -o $(BUILD_DIR)/$(BINARY_NAME) $(CMD_PATH)
	@echo "Built $(BUILD_DIR)/$(BINARY_NAME)"

## build-server: compile the server binary into bin/
build-server:
	@mkdir -p $(BUILD_DIR)
	go build -o $(BUILD_DIR)/$(SERVER_BINARY_NAME) $(SERVER_CMD_PATH)
	@echo "Built $(BUILD_DIR)/$(SERVER_BINARY_NAME)"

## run: build and run the interpreter
run: build
	$(BUILD_DIR)/$(BINARY_NAME)

## run-server: build and run the server
run-server: build-server
	$(BUILD_DIR)/$(SERVER_BINARY_NAME)

## test: run all tests
test:
	go test ./...

## fmt: format all Go source files
fmt:
	go fmt ./...

## vet: run go vet on all packages
vet:
	go vet ./...

## clean: remove build artifacts
clean:
	rm -rf $(BUILD_DIR)
	@echo "Cleaned build artifacts"

## help: print this help message
help:
	@echo "Available targets:"
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/## /  /'
