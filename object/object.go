// Package object
package object

import "fmt"

type ObjectType string

const (
	IntegerOBJ     = "INTEGER"
	BooleanOBJ     = "BOOLEAN"
	NullOBJ        = "NULL"
	ReturnValueOBJ = "RETURN_VALUE"
	ErrorOBJ       = "ERROR"
)

type Object interface {
	Type() ObjectType
	Inspect() string
}

type Integer struct {
	Value int64
}

func (i *Integer) Inspect() string  { return fmt.Sprintf("%d", i.Value) }
func (i *Integer) Type() ObjectType { return IntegerOBJ }

type Boolean struct {
	Value bool
}

func (b *Boolean) Type() ObjectType { return BooleanOBJ }
func (b *Boolean) Inspect() string  { return fmt.Sprintf("%t", b.Value) }

type Null struct{}

func (n *Null) Type() ObjectType { return NullOBJ }
func (n *Null) Inspect() string  { return "null" }

type ReturnValue struct {
	Value Object
}

func (rv *ReturnValue) Type() ObjectType { return ReturnValueOBJ }
func (rv *ReturnValue) Inspect() string  { return rv.Value.Inspect() }

type Error struct {
	Message string
}

func (e *Error) Type() ObjectType { return ErrorOBJ }
func (e *Error) Inspect() string  { return "ERROR: " + e.Message }
