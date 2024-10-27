# TODO:

Menu search doesn't work

I'll give you part of a code from Minsk Compiler from youtube series by Immo Landwerth (terrajobst) - one class at a time. I want you to create json object from that code in that format. Leave the episode number for me. Fill the field with correct information from the code i will give you and write a short description in each description field, signature should be just a name of a method, if there is no delegated constructor then just leave empty array [], if there is no suffix in the type object don't write the field at all, is_list if true only when the type has '[]' right after declaration, like: string[] or int[], it is not for stuff like List or IEnumerable - use 'children' field for all types that are inside them. Write all variables as properties too. When creating suffixes for properties remember to add also the assignment symbol =, =>, etc. In the 'body' put the code from the body of the constructor / method. Make sure to make corrent indentation using \t and \n. If there is an empty line in the original code make sure to keep it also here. Descriptions should be very short and easy to read, because they will serve as wikipedia for the minsk compiler, only the first description after the title should be couple sentences longer. If I give you another the same class use previous code to deduct the changes and write them in 'changes' otherwise leave the changes as empty ''. Make sure the changes are short and easy to read. You can use \n\n to separate different changes, just make sure it's in one line so I can copy json properly. If you write changes then make sure that the descriptions are the same, unless the code for the field they describe has changed, then update them. Here is the JSON format:






I'll give you part of a code from Minsk Compiler from youtube series by Immo Landwerth (terrajobst) - one class at a time. I want you to create json object from that code in this format:
```
{
    "title": "Lexer",
    "description": "Description...",
    "episode": [
        0
    ],
    "class_scope": "internal sealed",
    "changes": "",
    "constructors": [
        {
            "scope": "public",
            "description": "some description",
            "delegated": [
                "var1",
                "var1",
                "var2"
            ],
            "body": "code from inside the constructor body",
            "parameters": [
                {
                    "name": "var1",
                    "type": {
                        "type": "string",
                        "is_list": false,
                        "children": [],
                        "suffix": "i.e. .builder after type declaration"
                    }
                },
                {
                    "name": "var2",
                    "type": {
                        "type": "Dictionary",
                        "is_list": false,
                        "children": [
                            {
                                "type": "int",
                                "is_list": false,
                                "children": []
                            },
                            {
                                "type": "int",
                                "is_list": false,
                                "children": []
                            }
                        ],
                        "suffix": "i.e. .builder after type declaration"
                    }
                }
            ]
        }
    ],
    "properties": [
        {
            "scope": "public",
            "name": "Var1",
            "assignment": "part after = symbol",
            "description": "some description",
            "type": {
                "type": "Dictionary",
                "is_list": false,
                "children": [
                    {
                        "type": "int",
                        "is_list": false,
                        "children": []
                    },
                    {
                        "type": "int",
                        "is_list": false,
                        "children": []
                    }
                ],
                "suffix": "i.e. .builder after type declaration"
            }
        }
    ],
    "methods": [
        {
            "scope": "public",
            "signature": "SomeMethod",
            "description": "some description",
            "body": "code from inside method body",
            "suffix": "this is part after arrow function, i.e. => _diagnostics just without =>",
            "return_type": { ... same as in propeties type
            },
            "parameters": [ ... list of parameters like in the constructor
            ]
        }
    ]
}```
1. Leave the episode number for me. 
2. Fill the field with correct information from the code i will give you and write a very short description in each description field, because they will serve as wikipedia for the minsk compiler, only the first description after the title should be couple sentences longer.
3. signature should be just a name of a method
4. if there is no delegated constructor then just leave empty array []
5. if there is no suffix in the type object don't write the field at all,
6. is_list if true only when the type has '[]' right after declaration, like: string[] or int[], it is not for compound types like List or IEnumerable - use 'children' field for all types that are inside them. 
7. Write all variables as properties, the private too. 
8. When writing 'assignment' for properties remember to add also the assignment symbol =, =>, etc. 
9. In the 'body' put the code from the body of the constructor / method. Make sure to make corrent indentation using \t and \n. If there is an empty line in the original code make sure to keep it also here. 
10. If I give you another of the same class use previous code to deduct the changes and write them in 'changes' otherwise leave the changes as empty ''. Make sure the changes are short and easy to read. You can use \n\n to separate different changes, just make sure it's in one line so I can copy json properly. 
11. If you write changes then make sure that the descriptions are the same as in the previous JSON object, unless the code for the field they describe has changed, then update them.