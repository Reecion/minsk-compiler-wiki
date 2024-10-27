import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

export interface MenuItem {
    name: string,
    episodes: number[],
    url?: string,
    children?: MenuItem[],
    isLabel?: boolean,
    Icon?: IconType,
}

const sub_dir = '/minsk'
const ep_sub_dir = sub_dir + '/episodes'

const spacer: MenuItem = {
    name: 'Spacer',
    episodes: [0],
    isLabel: true
}
const label_links: MenuItem = {
    name: 'Links',
    episodes: [0],
    isLabel: true
}
const label_general: MenuItem = {
    name: 'General',
    episodes: [0, 30],
    isLabel: true
}
const label_minsk: MenuItem = {
    name: 'Minsk Core',
    episodes: [0, 30],
    isLabel: true
}
const label_tests: MenuItem = {
    name: 'Tests',
    episodes: [4, 30],
    isLabel: true
}

/* --------- General --------- */

const official_github: MenuItem = {
    name: 'Official Github',
    episodes: [0],
    url: 'https://github.com/terrajobst/minsk',
    Icon: FaGithub
}

const sorted_github: MenuItem = {
    name: 'Clone by episode',
    episodes: [0],
    url: '/',
    Icon: FaGithub
}

const intro: MenuItem = {
    name: 'Intro',
    episodes: [0, 30],
    url: '/'
}

const episode1: MenuItem = {
    name: 'Episode 1',
    episodes: [1, 1],
    url: ep_sub_dir + '/ep1'
}

const episodes_list: MenuItem = {
    name: 'Episodes',
    episodes: [0, 30],
    children: [
        episode1
    ]
}

/* --------- Minsk Core --------- */

const evaluator: MenuItem = {
    name: 'Evaluator',
    episodes: [1, 30],
    url: sub_dir + '/evaluator'
}
const evaluation_result: MenuItem = {
    name: 'Evaluation Result',
    episodes: [5, 30],
    url: sub_dir + '/evaluation_result'
}
const compilation: MenuItem = {
    name: 'Compilation',
    episodes: [3, 30],
    url: sub_dir + '/compilation'
}
const diagnostic: MenuItem = {
    name: 'Diagnostic',
    episodes: [3,30],
    url: sub_dir + '/diagnostic'
}
const diagnostic_bag: MenuItem = {
    name: 'DiagnosticBag',
    episodes: [3, 30],
    url: sub_dir + '/diagnostic_bag'
}

/* --------- Syntax --------- */

const lexer: MenuItem = {
    name: 'Lexer',
    episodes: [1, 30],
    url: sub_dir + '/lexer'
}
const parser: MenuItem = {
    name: 'Parser',
    episodes: [1, 30],
    url: sub_dir + '/parser'
}
const syntax_tree: MenuItem = {
    name: 'SyntaxTree',
    episodes: [1, 30],
    url: sub_dir + '/syntax_tree'
}
const syntax_token: MenuItem = {
    name: 'SyntaxToken',
    episodes: [1, 30],
    url: sub_dir + '/syntax_token'
}
const syntax_kind: MenuItem = {
    name: 'SyntaxKind',
    episodes: [1, 30],
    url: sub_dir + '/syntax_kind'
}
const syntax_node: MenuItem = {
    name: 'SyntaxNode',
    episodes: [1, 30],
    url: sub_dir + '/syntax_node'
}
const syntax_facts: MenuItem = {
    name: 'SyntaxFacts',
    episodes: [2, 30],
    url: sub_dir + '/syntax_facts'
}
const expression_syntax: MenuItem = {
    name: 'ExpressionSyntax',
    episodes: [1, 7],
    url: sub_dir + '/expression_syntax'
}
const assignment_expression_syntax: MenuItem = {
    name: 'AssignmentExpressionSyntax',
    episodes: [3, 30],
    url: sub_dir + '/assignment_expression_syntax'
}
const binary_expression_syntax: MenuItem = {
    name: 'BinaryExpressionSyntax',
    episodes: [1, 30],
    url: sub_dir + '/binary_expression_syntax'
}
const unary_expression_syntax: MenuItem = {
    name: 'UnaryExpressionSyntax',
    episodes: [2, 30],
    url: sub_dir + '/unary_expression_syntax'
}
const number_expression_syntax: MenuItem = {
    name: 'NumberExpressionSyntax',
    episodes: [1, 1],
    url: sub_dir + '/number_expression_syntax'
}
const name_expression_syntax: MenuItem = {
    name: 'NameExpressionSyntax',
    episodes: [3, 30],
    url: sub_dir + '/name_expression_syntax'
}
const literal_expression_syntax: MenuItem = {
    name: 'LiteralExpressionSyntax',
    episodes: [2, 30],
    url: sub_dir + '/literal_expression_syntax'
}
const parenthesised_expression_syntax: MenuItem = {
    name: 'ParenthesisedExpressionSyntax',
    episodes: [1, 7],
    url: sub_dir + '/parenthesised_expression_syntax'
}
const expression_syntax_list: MenuItem = {
    name: 'Expression Syntax',
    episodes: [0],
    children: [
        expression_syntax,
        assignment_expression_syntax,
        unary_expression_syntax,
        binary_expression_syntax,
        number_expression_syntax,
        name_expression_syntax,
        literal_expression_syntax,
        parenthesised_expression_syntax
    ]
}
const syntax: MenuItem = {
    name: 'Syntax',
    episodes: [0],
    children: [
        lexer,
        parser,
        syntax_tree,
        syntax_token,
        syntax_node,
        syntax_kind,
        syntax_facts,
        expression_syntax_list
    ]
} as const;

/* --------- Binding --------- */

const binder: MenuItem = {
    name: 'Binder',
    episodes: [2, 30],
    url: sub_dir + '/binder'
}
const bound_node: MenuItem = {
    name: 'BoundNode',
    episodes: [2, 30],
    url: sub_dir + '/bound_node'
}
const bound_node_kind: MenuItem = {
    name: 'BoundNodeKind',
    episodes: [2, 30],
    url: sub_dir + '/bound_node_kind'
}
const bound_expression: MenuItem = {
    name: 'BoundExpression',
    episodes: [2, 30],
    url: sub_dir + '/bound_expression'
}
const bound_assignment_expression: MenuItem = {
    name: 'BoundAssignmentExpression',
    episodes: [3, 30],
    url: sub_dir + '/bound_assignment_expression'
}
const bound_binary_expression: MenuItem = {
    name: 'BoundBinaryExpression',
    episodes: [2, 30],
    url: sub_dir + '/bound_binary_expression'
}
const bound_unary_expression: MenuItem = {
    name: 'BoundUnaryExpression',
    episodes: [2, 30],
    url: sub_dir + '/bound_unary_expression'
}
const bound_literal_expression: MenuItem = {
    name: 'BoundLiteralExpression',
    episodes: [2, 30],
    url: sub_dir + '/bound_literal_expression'
}
const bound_variable_expression: MenuItem = {
    name: 'BoundVariableExpression',
    episodes: [3, 30],
    url: sub_dir + '/bound_variable_expression'
}
const bound_binary_operator: MenuItem = {
    name: 'BoundBinaryOperator',
    episodes: [2, 30],
    url: sub_dir + '/bound_binary_operator'
}
const bound_unary_operator: MenuItem = {
    name: 'BoundUnaryOperator',
    episodes: [2, 30],
    url: sub_dir + '/bound_unary_operator'
}
const bound_binary_operator_kind: MenuItem = {
    name: 'BoundBinaryOperatorKind',
    episodes: [2, 30],
    url: sub_dir + '/bound_binary_operator_kind'
}
const bound_unary_operator_kind: MenuItem = {
    name: 'BoundUnaryOperatorKind',
    episodes: [2, 30],
    url: sub_dir + '/bound_unary_operator_kind'
}
const bound_expression_list: MenuItem = {
    name: 'Bound Expressions',
    episodes: [0],
    children: [
        bound_expression,
        bound_assignment_expression,
        bound_binary_expression,
        bound_literal_expression,
        bound_variable_expression,
        bound_unary_expression
    ]
}
const binding: MenuItem = {
    name: 'Binding',
    episodes: [0],
    children: [
        binder,
        bound_node,
        bound_node_kind,
        bound_unary_operator,
        bound_binary_operator,
        bound_unary_operator_kind,
        bound_binary_operator_kind,
        bound_expression_list
    ]
}

/* --------- Symbols --------- */

const variable_symbol: MenuItem = {
    name: 'VariableSymbol',
    episodes: [3, 30],
    url: sub_dir + '/variable_symbol'
}

const symbols_list: MenuItem = {
    name: 'Symbols',
    episodes: [0],
    children: [
        variable_symbol,
    ]
}

/* --------- Text --------- */

const text_span: MenuItem = {
    name: 'TextSpan',
    episodes: [3, 30],
    url: sub_dir + '/text_span'
}

const text_list: MenuItem = {
    name: 'Text',
    episodes: [0],
    children: [
        text_span,
    ]
}

/* --------- Lowering --------- */

/* --------- Tests --------- */

const asserting_enumerator: MenuItem = {
    name: 'AssertingEnumerator',
    episodes: [6, 9],
    url: sub_dir + '/asserting_enumerator'
}
const lexer_tests: MenuItem = {
    name: 'LexerTests',
    episodes: [6, 9],
    url: sub_dir + '/lexer_tests'
}
const parser_tests: MenuItem = {
    name: 'ParserTests',
    episodes: [6, 9],
    url: sub_dir + '/parser_tests'
}
const syntax_tests: MenuItem = {
    name: 'Syntax Tests',
    episodes: [0],
    children: [
        asserting_enumerator,
        lexer_tests,
        parser_tests
    ]
}

const annotated_text: MenuItem = {
    name: 'Annotated Text',
    episodes: [6, 9],
    url: sub_dir + '/annotated_text'
}

/* --------- Menu --------- */

export const menu_items: readonly MenuItem[] = [
    label_links,
    official_github,
    sorted_github,
    label_general,
    intro,
    episodes_list,
    label_minsk,
    syntax,
    binding,
    symbols_list,
    text_list,
    compilation,
    evaluator,
    evaluation_result,
    diagnostic,
    diagnostic_bag,
    label_tests,
    syntax_tests,
    annotated_text

] as const;
