package eval

import "github.com/aditya-sutar-45/interpreter/object"

// len()

var builtins = map[string]*object.Builtin{
	"len":  {Fn: builtinLen},
	"head": {Fn: builtinHead},
	"tail": {Fn: builtinTail},
	"rest": {Fn: builtinRest},
	"push": {Fn: builtinPush},
}

func builtinLen(args ...object.Object) object.Object {
	if len(args) != 1 {
		return newError("wrong number of arguments. got=%d, want=1", len(args))
	}

	switch arg := args[0].(type) {
	case *object.String:
		return &object.Integer{Value: int64(len(arg.Value))}
	case *object.Array:
		return &object.Integer{Value: int64(len(arg.Elements))}
	default:
		return newError("argument to `len` not supported, got %s",
			args[0].Type())
	}
}

func builtinHead(args ...object.Object) object.Object {
	if len(args) != 1 {
		return newError("wrong number of arguments. got=%d, want=1", len(args))
	}

	if args[0].Type() != object.ArrayOBJ {
		return newError("argument to `head` must be %s, got %s", object.ArrayOBJ, args[0].Type())
	}

	arr := args[0].(*object.Array)
	if len(arr.Elements) > 0 {
		return arr.Elements[0]
	}

	return NULL
}

func builtinTail(args ...object.Object) object.Object {
	if len(args) != 1 {
		return newError("wrong number of arguments. got=%d, want=1", len(args))
	}

	if args[0].Type() != object.ArrayOBJ {
		return newError("argument to `tail` must be %s, got %s", object.ArrayOBJ, args[0].Type())
	}

	arr := args[0].(*object.Array)
	if len(arr.Elements) > 0 {
		return arr.Elements[len(arr.Elements)-1]
	}

	return NULL
}

func builtinRest(args ...object.Object) object.Object {
	if len(args) != 1 {
		return newError("wrong number of arguments. got=%d, want=1", len(args))
	}

	if args[0].Type() != object.ArrayOBJ {
		return newError("argument to `rest` must be %s, got %s", object.ArrayOBJ, args[0].Type())
	}

	arr := args[0].(*object.Array)
	size := len(arr.Elements)
	if size > 0 {
		newArr := make([]object.Object, size-1)
		copy(newArr, arr.Elements[1:size])

		return &object.Array{Elements: newArr}
	}

	return NULL
}

func builtinPush(args ...object.Object) object.Object {
	if len(args) != 2 {
		return newError("wrong number of arguments. got=%d, want=2", len(args))
	}

	if args[0].Type() != object.ArrayOBJ {
		return newError("argument to `push` must be %s, got %s", object.ArrayOBJ, args[0].Type())
	}

	arr := args[0].(*object.Array)
	size := len(arr.Elements)

	newArr := make([]object.Object, size+1)
	copy(newArr, arr.Elements)
	newArr[size] = args[1]

	return &object.Array{Elements: newArr}
}
