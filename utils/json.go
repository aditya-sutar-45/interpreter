// Package utils
package utils

import (
	"encoding/json"
	"log"
	"net/http"
)

func RespondWithJSON(w http.ResponseWriter, code int, payload any) {
	data, err := json.Marshal(payload)
	if err != nil {
		log.Println("failed to marshal json response:", payload)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	if _, err := w.Write(data); err != nil {
		log.Println("error writing response: ", err)
	}
}

func RespondWithError(w http.ResponseWriter, code int, msg string) {
	if code > 499 {
		log.Println("Responding with 500 level error: ", msg)
	}

	type ErrorResponse struct {
		Error string `json:"error"`
	}

	RespondWithJSON(w, code, ErrorResponse{
		Error: msg,
	})
}
