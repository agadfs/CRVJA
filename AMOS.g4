grammar AMOS;

// Lexer rules
SCREENOPEN: 'Screen Open'; 
NUMBER: '-'? [0-9]+;
LOWRES: 'Lowres'; 
HIRES: 'Hires'; 
COMMA: ','; 
COMMENT: '\'' ~[\n\r]* -> skip; 
WS: [ \t\n\r]+ -> skip; 
CURSOFF: 'Curs Off'; 
CURSON: 'Curs On'; 
INK: 'Ink'; 
TEXT: 'Text'; 
STRING: '"' (~["])* '"'; 
DO: 'Do'; 
LOOP: 'Loop'; 
FOR: 'For'; 
TO: 'To'; 
NEXT: 'Next'; 
IF: 'If'; 
ELSE: 'Else'; 
ENDIF: 'End If'; 
WHILE: 'While'; 
WEND: 'Wend'; 
PLAY: 'Play'; 
PROC: 'Procedure'; 
ENDPROC: 'End Proc'; 
BAR: 'Bar'; 
WAITKEY: 'Wait Key'; 
KEYSTATE: 'Key State'; 
IDENTIFIER: [a-zA-Z_] [a-zA-Z_0-9]*;
COMPARISON: '=' | '<>' | '>=' | '>' | '<=' | '<'; // Comparison operators
BRACKETOPEN_PROP: '(';
BRACKETCLOSE_PROP: ')';
BRACKETOPEN_ARRAY: '[';
BRACKETCLOSE_ARRAY: ']';
BRACKETOPEN_FUNCTION: '{';
BRACKETCLOSE_FUNCTION: '}';
HECADECIMAL: '$';
// Operators for arithmetic
MULTIPLY: '*';
DIVIDE: '/';
ADD: '+';
SUBTRACT: '-';

// Expression captures more complex expressions
expression2:
    term ((ADD | SUBTRACT) term)* // Handle addition and subtraction
    ;
expression1:
    term ((ADD | SUBTRACT) term)* // Handle addition and subtraction
    ;

term:
    factor ((MULTIPLY | DIVIDE) factor)* // Handle multiplication and division
    ;

factor:
    NUMBER                     // A number
    | IDENTIFIER                // A variable
    | '(' expression1 ')'        // Parentheses for grouping

    ;


// Parser rules

program:
    (statement)* EOF 
    ;

statement:
    procedure
    | screen_open
    | curs_off
    | curs_on
    | ink
    | text
    | do_loop
    | for_loop
    | if_statement_key_state
    | if_statement
    | bar
    | function_call_or_array_access // Nova regra para chamadas de função ou acesso a array
    | variable_starter
    ;

variable_starter:
    IDENTIFIER '=' expression1 // Agora captura apenas atribuições de variáveis
    ;

function_call_or_array_access:
    IDENTIFIER BRACKETOPEN_ARRAY expression1 BRACKETCLOSE_ARRAY // Acesso a array
    | IDENTIFIER BRACKETOPEN_PROP expression1? (COMMA expression1)* BRACKETCLOSE_PROP // Chamadas de função com ou sem parâmetros
    ;


screen_open:
    SCREENOPEN NUMBER COMMA NUMBER COMMA NUMBER COMMA NUMBER COMMA (LOWRES | HIRES)
    ; 

curs_off:
    CURSOFF
    ;

curs_on:
    CURSON
    ;

ink:
    INK NUMBER
    ;

text:
    TEXT NUMBER COMMA NUMBER COMMA STRING
    ;

do_loop:
    DO
    (statement)*
    LOOP
    ;

for_loop:
    FOR IDENTIFIER '=' NUMBER TO NUMBER
    (statement)*
    NEXT IDENTIFIER // Match IDENTIFIER, not NUMBER
    ;

// If-End If statement that compares a variable to an expression
if_statement:
    IF expression1 ('=' | '<>' | '>=' | '>' | '<=' | '<') expression2
    (statement)* 
    (ELSE (statement)*)? 
    ENDIF
    ;

// If-End If statement for key state comparison
if_statement_key_state:
    IF 'Key' 'State' COMPARISON expression2
    (statement)*
    ENDIF
    ;

bar:
    BAR expression1 COMMA expression2 'To' expression1 COMMA expression2
    ;

procedure:
    PROC IDENTIFIER BRACKETOPEN_ARRAY IDENTIFIER? BRACKETCLOSE_ARRAY // Modified to properly capture the brackets and optional parameter
    (statement)* 
    ENDPROC
    ;


