package main

import (
	"fmt"
	"os"
	"os/user"
	"path/filepath"
	"runtime"

	"github.com/aditya-sutar-45/interpreter/repl"
)

func main() {
	// resolve banana.txt relative to the source file location,
	// so it works regardless of the working directory.
	_, srcFile, _, _ := runtime.Caller(0)
	rootDir := filepath.Join(filepath.Dir(srcFile), "..", "..")
	artPath := filepath.Join(rootDir, "banana.txt")

	art, err := os.ReadFile(artPath)
	if err != nil {
		// fallback: try current working directory
		art, err = os.ReadFile("banana.txt")
		if err != nil {
			panic(err)
		}
	}

	user, err := user.Current()
	if err != nil {
		panic(err)
	}

	fmt.Println(string(art))
	fmt.Printf("Hello %s!\n", user.Username)
	fmt.Println("Type any command!")

	repl.Start(os.Stdin, os.Stdout)
}
