module.exports =  
{
    "parser":  "@typescript-eslint/parser",
    "extends":  
    [
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions":  
    {
        "ecmaVersion":  2018,
        "sourceType":  "module",
    },
    "rules":  
    {
        "@typescript-eslint/explicit-function-return-type": 2,
        "@typescript-eslint/no-parameter-properties":2,
        "@typescript-eslint/interface-name-prefix":0,
        "@typescript-eslint/explicit-member-accessibility":0,
        "@typescript-eslint/no-object-literal-type-assertion":0,
        "brace-style":2,
        "indent": ["error", 4]
    },
};
