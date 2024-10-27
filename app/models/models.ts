export interface Episode {
    id: number,
    title: string,
    video_url: string,
    source_code: string,
}

export interface CodeType {
    type: string, // Text of the type e.g. "string" or "List" or "IEnumerable", etc.
    is_list: boolean, // If the type has "[]" right after declaration, e.g. "string[]" 
    children: CodeType[], // If type is compound, e.g. "List", "Dictionary", "IEnumerable", etc. Write each type inside them in this array
    suffix?: string // Don't use it at all.
}

export interface Parameter {
    name: string, // Name of the parameter
    type: CodeType,
    extended?: boolean, // Don't use it at all
}

export interface Constructor {
    scope: string, // e.g. "public" or "internal sealed" etc.
    description: string,
    delegated: string[], // e.g. Convert this: "this:(var1, var1, var2)" to this: ["var1", "var1", "var2"]
    body: string, // Code inside the constructor body separated by \n and \t. If there is an empty line in the original code make sure to keep it also here
    parameters: Parameter[]
}

export interface Property {
    scope: string,  // e.g. "public" or "internal sealed" etc.
    name: string,
    assignment: string, // e.g. "= new List<string>()" or "=> _diagnostics" or "{ get; }", etc.
    custom?: string, // Don't use it at all
    description: string,
    type: CodeType
}

export interface Method {
    scope: string, // e.g. "public" or "internal sealed" etc.
    signature: string, // e.g. "NextToken" - just the name of method
    body: string, // Code inside the method separated by \n and \t, if there is an empty line in the original code make sure to keep it also here
    description: string, // It should be as short as possible and easy to read. Max 2 sentences long.
    suffix: string, // Leave as ""
    parameters: Parameter[],
    return_type: CodeType
}

export interface CodeChange {
    title: string, // e.g. "Lexer"
    class_scope: string, // e.g. "internal sealed"
    extends?: string, // e.g. "BoundExpression"
    description: string, // It should be as short as possible and easy to read. Max 3-4 sentences long.
    changes?: string, // Only if there is a change compared to the previous code. It should be as short as possible and easy to read.
    episode: number[], // Leave as [0]
    constructors: Constructor[],
    properties: Property[], // Write variables also as properties (private also)
    methods: Method[]
}

export interface WikiPage {
    episodes: CodeChange[] 
}

export interface EnumTableItem {
    name: string,
    color: string,
    hint?: string,
}

export interface EnumTable {
    title: string,
    items: EnumTableItem[]
}

export interface Enum {
    title: string,
    description: string,
    episode: number[],
    class_scope: string,
    tables: EnumTable[]
}

export interface EnumWiki {
    episodes: Enum[]
}

export const episodes: Episode[] = [
    {
        id: 0,
        title: '',
        video_url: '',
        source_code: ''
    },
    {
        id: 1,
        title: 'A basic expression evaluator',
        video_url: 'https://youtu.be/wgHIkdUQbp0?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: 'https://github.com/terrajobst/minsk/commit/40d952499093fb354fd98242efa307c73d369237#diff-9265e30cc90b1f4b403400f7a212189adb5c170d8c1b30d2d30bdbcf1b828c68'
    },
    {
        id: 2,
        title: 'More operators',
        video_url: 'https://youtu.be/3XM9vUGduhk?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: ''
    },
    {
        id: 3,
        title: 'Assignments & Variables',
        video_url: 'https://youtu.be/61dLQNgd9o8?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: ''
    },
    {
        id: 4,
        title: 'Making testing a blast',
        video_url: 'https://youtu.be/xF-8rWeqV1A?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: ''
    },
    {
        id: 5,
        title: 'Line numbers and clean-up',
        video_url: 'https://youtu.be/EEzuO9XWmUY?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: ''
    },
    {
        id: 6,
        title: 'Statements, Variables, and Scoping',
        video_url: 'https://youtu.be/M0mEvzfObN0?list=PLRAdsfhKI4OWNOSfS7EUu5GRAVmze1t2y',
        source_code: ''
    }
]