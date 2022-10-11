module.exports = {
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
            "bool": "bool"
        },
        ">=": {
            "int": "bool",
            "bool": "bool"
        },
        "<": {
            "int": "bool",
            "bool": "bool"
        },
        "<=": {
            "int": "bool",
            "bool": "bool"
        },
        "==": {
            "int": "bool",
            "bool": "bool"
        },
        "!=": {
            "int": "bool",
            "bool": "bool"
        },
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
            "bool": "bool"
        },
        ">=": {
            "int": "bool",
            "bool": "bool"
        },
        "<": {
            "int": "bool",
            "bool": "bool"
        },
        "<=": {
            "int": "bool",
            "bool": "bool"
        },
        "==": {
            "int": "bool",
            "bool": "bool"
        },
        "!=": {
            "int": "bool",
            "bool": "bool"
        },
    },
    "bool": {
        "&": {
            "bool": "bool"
        },
        "|": {
            "bool": "bool"
        },
    }
}