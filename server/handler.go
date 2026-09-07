package server

import (
	"encoding/json"
	"net/http"

	"github.com/aditya-sutar-45/interpreter/utils"
)

type RunCodeRequest struct {
	Code string `json:"code"`
}

type RunResponse struct {
	Output string   `json:"output"`
	Errors []string `json:"errors"`
}

func runCode(w http.ResponseWriter, r *http.Request) {
	var req RunCodeRequest

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "invalid request body")
		return
	}

	output := run(req.Code)

	utils.RespondWithJSON(w, http.StatusOK, output)
}
