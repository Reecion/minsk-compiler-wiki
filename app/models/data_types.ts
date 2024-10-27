const project_url = '/minsk'

const t_data = [
    {
        name: "int"
    },
    {
        name: "string"
    },
    {
        name: "char"
    },
    {
        name: "void"
    },
    {
        name: "object"
    },
    {
        name: "Type"
    },
    {
        name: "AssignmentExpressionSyntax",
        link: project_url + "/assignment_expression_syntax"
    },
    {
        name: "BinaryExpressionSyntax",
        link: project_url + "/binary_expression_syntax"
    },
    {
        name: "BoundExpression",
        link: project_url + "/bound_expression"
    },
    {
        name: "BoundUnaryOperator",
        link: project_url + "/bound_unary_operator"
    },
    {
        name: "BoundBinaryOperator",
        link: project_url + "/bound_binary_operator"
    },
    {
        name: "BoundUnaryOperatorKind",
        link: project_url + "/bound_unary_operator_kind"
    },
    {
        name: "BoundBinaryOperatorKind",
        link: project_url + "/bound_binary_operator_kind"
    },
    {
        name: "BoundNodeKind",
        link: project_url + "/bound_node_kind"
    },
    {
        name: "Diagnostic",
        link: project_url + "/diagnostic"
    },
    {
        name: "DiagnosticBag",
        link: project_url + "/diagnostic_bag"
    },
    {
        name: "EvaluationResult",
        link: project_url + "/evaluation_result"
    },
    {
        name: "ExpressionSyntax",
        link: project_url + "/expression_syntax"
    },
    {
        name: "LiteralExpressionSyntax",
        link: project_url + "/literal_expression_syntax"
    },
    {
        name: "NameExpressionSyntax",
        link: project_url + "/name_expression_syntax"
    },
    {
        name: "ParenthesizedExpressionSyntax",
        link: project_url + "/parenthesized_expression_syntax"
    },
    {
        name: "SyntaxKind",
        link: project_url + "/syntax_kind"
    },
    {
        name: "SyntaxToken",
        link: project_url + "/syntax_token"
    },
    {
        name: "SyntaxTree",
        link: project_url + "/syntax_tree"
    },
    {
        name: "SyntaxNode",
        link: project_url + "/syntax_node"
    },
    {
        name: "TextSpan",
        link: project_url + "/text_span"
    },
    {
        name: "UnaryExpressionSyntax",
        link: project_url + "/unary_expression_syntax"
    },
    {
        name: "VariableSymbol",
        link: project_url + "/variable_symbol"
    },
]

const s_data = [
    {
        name: "private"
    },
    {
        name: 'private static'
    },
    {
        name: "public"
    },
    {
        name: "public abstract"
    },
    {
        name: "public override"
    },
    {
        name: 'public static'
    }
]

const c_data = [
    {
        name: "Dictionary"
    },
    {
        name: "List"
    },
    {
        name: 'IReadOnlyList'
    },
    {
        name: "ImmutableArray"
    },
    {
        name: 'IEnumerable'
    },
    {
        name: 'IEnumerator'
    }
]

export const type_data = t_data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (b.name.toLowerCase() < a.name.toLowerCase()) ? 1 : 0)
export const scope_data = s_data.sort((a, b) => (a.name < b.name) ? -1 : (b.name < a.name) ? 1 : 0)
export const compound_data = c_data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (b.name.toLowerCase() < a.name.toLowerCase()) ? 1 : 0)