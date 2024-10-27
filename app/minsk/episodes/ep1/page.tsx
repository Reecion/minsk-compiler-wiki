import Layout from '@/app/components/layout/layout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lexer_png from '@/public/lexer.png'
import parser_png from '@/public/parser.png'
import syntax_node_png from '@/public/syntax_node.png'

const Page = () => {
    return (
        <Layout>
            <div className='max-w-full'>
                <h1>Episode 1<span className='c-fg-2 text-lg'> - A basic expression evaluator</span></h1>

                <p className='whitespace-pre-wrap'>In the first episode, Immo Landwerth builds the foundations of a basic expression evaluator that can parse and compute simple arithmetic expressions like “1 + 2”.{'\n'}Currently the program supports only: <span className='c-fg-0 px-1'>+</span>, <span className='c-fg-0 px-1'>-</span>, <span className='c-fg-0 px-1'>*</span> and <span className='c-fg-0 px-1'>/</span> operations.{'\n'}In this episode few main classes are created:</p>

                <hr className='big-hr'></hr>

                <h2><Link href={'/minsk/lexer'}>Lexer</Link></h2>

                <p className='whitespace-pre-wrap'>Converts the input string into a list of tokens, which are the individual elements (like numbers or operators) of the expression.</p>
                <br/>
                <Image src={lexer_png} alt={'Lexer graph'} className='w-3/4 mx-auto' />

                <hr className='big-hr'></hr>

                <h2><Link href={'/minsk/parser'}>Parser</Link></h2>

                <p className='whitespace-pre-wrap'>Takes the tokens and builds a syntax tree, organizing them hierarchically so that they can be evaluated in the correct order, i.e. when parsing "1 + 2 * 3" parser should create this tree:</p>
                <br/>
                <Image src={parser_png} alt={'Parser graph'} className='w-3/4 mx-auto' />

                <p className='whitespace-pre-wrap'>Leaf nodes are evaluated first, so in this tree evaluator would first evaluate 2 * 3 expression and then addition.</p>

                <hr className='big-hr'></hr>

                <h2><Link href={'/minsk/syntax_node'}>Syntax Node</Link></h2>

                <p className='whitespace-pre-wrap'>Acts as the building block of the syntax tree that the Parser creates. It represents each component of the expression, such as numbers and operators, and organizes them into a hierarchy that respects mathematical precedence.</p>
                <br/>
                <Image src={syntax_node_png} alt={'Syntax Node graph'} className='w-3/4 mx-auto' />

                <hr className='big-hr'></hr>

                <h2><Link href={'/minsk/evaluator'}>Evaluator</Link></h2>

                <p className='whitespace-pre-wrap'>Traverses the syntax tree from SyntaxNode to calculate the final result of the expression. It processes each node based on its type (like addition or multiplication), producing an answer from the organized tree structure.</p>
                <br/>

                <hr className='big-hr'></hr>

                <h2>Program.cs</h2>

                <p className='whitespace-pre-wrap'>To write type code and instantly see the results the basic <span className='c-fg-0'>REPL</span> is created (Read-Eval-Print Loop).</p>
                <br/>

            </div>
        </Layout>
    )
}

export default Page
