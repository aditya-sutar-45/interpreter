package server

import (
	"bytes"
	"os"

	"github.com/aditya-sutar-45/interpreter/eval"
	"github.com/aditya-sutar-45/interpreter/lexer"
	"github.com/aditya-sutar-45/interpreter/object"
	"github.com/aditya-sutar-45/interpreter/parser"
)

func run(input string) RunResponse {
	l := lexer.New(input)
	p := parser.New(l)

	program := p.ParseProgram()

	if len(p.Errors()) != 0 {
		return RunResponse{
			Errors: p.Errors(),
		}
	}

	// capture print() output into a buffer
	var buf bytes.Buffer
	eval.Stdout = &buf
	defer func() { eval.Stdout = os.Stdout }()

	env := object.NewEnvironment()
	evaluated := eval.Eval(program, env)

	if evaluated != nil && evaluated.Type() == object.ErrorOBJ {
		return RunResponse{
			Errors: []string{evaluated.Inspect()},
		}
	}

	output := buf.String()
	if output == "" && evaluated != nil {
		output = evaluated.Inspect()
	}

	return RunResponse{
		Output: output,
	}
}

