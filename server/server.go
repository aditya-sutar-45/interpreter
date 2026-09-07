// Package server
package server

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type Server struct {
	Port string
}

func NewServer(port string) *Server {
	return &Server{
		Port: port,
	}
}

func (s *Server) Start() error {
	log.Println("INFO starting server on port", s.Port)

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Post("/v1/run", runCode)

	err := http.ListenAndServe(s.Port, r)

	return err
}
