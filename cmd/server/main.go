package main

import (
	"log"

	"github.com/aditya-sutar-45/interpreter/server"
)

func main() {
	s := server.NewServer(":3000")

	if err := s.Start(); err != nil {
		log.Fatal("failed to start server: ", err)
	}

	log.Println("INFO server stopped")
}
