package main

import (
	"fmt"
	"os"
	"os/user"

	"github.com/aditya-sutar-45/interpreter/repl"
)

func main() {
	user, err := user.Current()
	if err != nil {
		panic(err)
	}

	fmt.Printf("Hello %s!\n", user.Username)
	fmt.Println("Type any command!")

	repl.Start(os.Stdin, os.Stdout)
}
