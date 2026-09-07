# Interpreter Makefile

BINARY_NAME := interpreter
CMD_PATH    := ./cmd/interpreter
BUILD_DIR   := ./bin

.PHONY: all build run test clean fmt vet

## all: build the binary (default target)
all: build

## build: compile the interpreter binary into bin/
build:
	@mkdir -p $(BUILD_DIR)
	go build -o $(BUILD_DIR)/$(BINARY_NAME) $(CMD_PATH)
	@echo "Built $(BUILD_DIR)/$(BINARY_NAME)"

## run: build and run the interpreter
run: build
	$(BUILD_DIR)/$(BINARY_NAME)

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
