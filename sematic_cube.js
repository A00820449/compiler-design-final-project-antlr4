export default {
    "int": {
        "+": {
            "int": "int",
            "float": "float",
        },
        "-": {
            "int": "int",
            "float": "float",
        },
        "*": {
            "int": "int",
            "float": "float",
        },
        "/": {
            "int": "int",
            "float": "float",
        },
        "^": {
            "int": "int",
            "float": "float",
        },
        ">": {
            "int": "bool",
            "float": "bool"
        },
        ">=": {
            "int": "bool",
            "float": "bool"
        },
        "<": {
            "int": "bool",
            "float": "bool"
        },
        "<=": {
            "int": "bool",
            "float": "bool"
        },
        "==": {
            "int": "bool",
            "float": "bool"
        },
        "!=": {
            "int": "bool",
            "float": "bool"
        },
        "=": {
            "int": "int",
            "float": "int"
        }
    },
    "float": {
        "+": {
            "int": "float",
            "float": "float",
        },
        "-": {
            "int": "float",
            "float": "float",
        },
        "*": {
            "int": "float",
            "float": "float",
        },
        "/": {
            "int": "float",
            "float": "float",
        },
        "^": {
            "int": "float",
            "float": "float",
        },
        ">": {
            "int": "bool",
            "float": "bool"
        },
        ">=": {
            "int": "bool",
            "float": "bool"
        },
        "<": {
            "int": "bool",
            "float": "bool"
        },
        "<=": {
            "int": "bool",
            "float": "bool"
        },
        "==": {
            "int": "bool",
            "float": "bool"
        },
        "!=": {
            "int": "bool",
            "float": "bool"
        },
        "=": {
            "int": "float",
            "float": "float"
        }
    },
    "bool": {
        "&": {
            "bool": "bool"
        },
        "|": {
            "bool": "bool"
        },
        "=": {
            "bool": "bool"
        }
    }
}