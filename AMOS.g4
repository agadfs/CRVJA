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
STATEMENT_SEPARATOR: ':';
FINISH_AND_ADD_OTHER_STATEMENT: ';';
DOT: '.';
HASHTAG: '#';
PERCENT: '%';
QUESTION: '?';


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
array_index_get:
    IDENTIFIER BRACKETOPEN_PROP (expression1) BRACKETCLOSE_PROP
    ;
factor:
    NUMBER                     // A number
    | array_index_get
    | sin_function
    | cos_function
    | IDENTIFIER                // A variable
    | '(' expression1 ')'        // Parentheses for grouping
    | (HECADECIMAL (NUMBER | IDENTIFIER))

    ;


// Parser rules

program:
    (statement)* EOF
    
    ;

statement:
    procedure
    | screen_open
    | curs_off
    | array_update
    | curs_on
    | ink
    | text
    | do_loop
    | for_loop
    | if_then
    | if_statement_key_state
    | if_statement
    | function_starter
    | bar
    | function_call_or_array_access // Nova regra para chamadas de função ou acesso a array
    | variable_starter
    | while_wend
    | wait_key_break
    | play_sound
    | 'End'
    | STATEMENT_SEPARATOR
    | array_create
    | print_something
    | flash_off
    | flash_on
    | hide
    | degree
    | paper
    | cls
    | palette
    | pen
    | double_buffer
    | autoback
    | blitter_copy
    | blitter_fill
    | blitter_clear
    | add
    | locate
    | turbo_draw
    | global
    | set_buffer
    | repeat_key
    | btst
    | open_out_readfile
    | close_file
    | open_in_writefile
    | input_variable
    | loadBank
    | loadBankImgToSprite
    | led_off
    | sam_bank
    | sam_loop
    | key_speed 
    | label_title
    | set_rainbow
    | use_rainbow
    | bob_off
    | clear_key
    | bob_update_on
    | gosub
    | goto_label



    
    ;

    goto_label:
    'Goto' IDENTIFIER
    ;
    gosub:
    'Gosub' IDENTIFIER
    ;

    bob_update_on:
    'Bob' 'Update' 'On'
    ;


    clear_key:
    'Clear' 'Key'
    ;

    bob_off:
    'Bob' 'Off'
    ;

    set_rainbow:
    'Set' 'Rainbow' (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA (NUMBER | STRING)? COMMA? (NUMBER | STRING)?
    ;

    use_rainbow:
    'Rainbow' (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA (NUMBER | STRING) COMMA? (NUMBER | STRING)? COMMA? (NUMBER | STRING)?
    ;
    label_title:
    IDENTIFIER ':'
    ;
    key_speed:
    'Key' 'Speed' NUMBER COMMA NUMBER
    ;
    sam_loop:
    'SAM' 'LOOP' 'OFF'
    ;
    sam_bank:
    'SAM' 'BANK' NUMBER
    ;
    led_off:
    'LED' 'OFF'
    ;

    loadBank:
    'Load' STRING
    ;
    
    loadBankImgToSprite:
    'Sprite' (NUMBER COMMA (IDENTIFIER | NUMBER) COMMA (IDENTIFIER | NUMBER) COMMA (IDENTIFIER | NUMBER) | 'Off' )
    ;
    if_then:
    IF expression1 ('=' | '<>' | '>=' | '>' | '<=' | '<')? expression2 'then' statement
    ;
    open_out_readfile:
    'Open' 'Out' NUMBER COMMA IDENTIFIER
    ;
    open_in_writefile:
    'Open' 'In' NUMBER COMMA IDENTIFIER
    ;
    close_file:
    'Close' NUMBER
    ;

    input_variable:
    'Input' HASHTAG NUMBER COMMA IDENTIFIER HECADECIMAL?
    ;


    btst:
    'Btst' BRACKETOPEN_PROP expression1 COMMA expression1 BRACKETCLOSE_PROP
    ;
    repeat_key:
    'Repeat'
    (statement)*
    'Until' 'Mouse' 'Key' '=' NUMBER
    ;
    set_buffer:
    'Set' 'Buffers' NUMBER
    ;
    global:
    'Global' (array_structure | IDENTIFIER) (COMMA (array_structure | IDENTIFIER))*?
    ;
    turbo_draw:
    'Turbo' 'Draw' expression1 COMMA expression1 'To' expression1 COMMA expression1 COMMA expression1 COMMA expression1
    ;
    locate:
    'Locate' NUMBER COMMA? NUMBER?
    ;
    add:
    'Add' IDENTIFIER COMMA expression1 (COMMA expression1 'To' 'NUMBER')?
    ;
    blitter_copy:
    'Blitter' 'Copy'  'Limit'? NUMBER COMMA NUMBER 'To' NUMBER COMMA NUMBER
    ;
     blitter_fill:
    'Blitter' 'Fill' NUMBER COMMA NUMBER (COMMA expression1 COMMA expression1 COMMA expression1 COMMA expression1)?
    ;
     blitter_clear:
    'Blitter' 'Clear'  NUMBER COMMA NUMBER (COMMA expression1 COMMA expression1 'To' expression1 COMMA expression1)?
    ;
    autoback:
    'Autoback' NUMBER
    ;
    palette:
    'Palette' (HECADECIMAL (NUMBER | IDENTIFIER) COMMA?)*
    ;
    double_buffer:
    'Double' 'Buffer'
    ;
    pen:
    'Pen' NUMBER
    ;
    cls:
    'Cls'
    ;

    paper:
    'Paper' NUMBER
    ;

    degree:
    'Degree'
    ;

    hide:
    'Hide' 'On'?
    ;

    flash_off:
    'Flash' 'Off'
    ;

     flash_on:
    'Flash' 'On'
    ;

sin_function:
    'Sin' BRACKETOPEN_PROP (NUMBER | IDENTIFIER | expression1) BRACKETCLOSE_PROP
    ;

cos_function:
    'Cos' BRACKETOPEN_PROP (NUMBER | IDENTIFIER | expression1) BRACKETCLOSE_PROP
    ;

play_sound:
    'Play' ((HECADECIMAL NUMBER) | expression1 | IDENTIFIER) COMMA NUMBER
    ;
wait_key_break:
    WAITKEY
    ;
variable_starter:
    IDENTIFIER '=' (btst | expression1) // Agora captura apenas atribuições de variáveis
    ;
function_starter:
    IDENTIFIER BRACKETOPEN_ARRAY (NUMBER | IDENTIFIER) BRACKETCLOSE_ARRAY
    ;

function_call_or_array_access:
    IDENTIFIER BRACKETOPEN_ARRAY expression1 BRACKETCLOSE_ARRAY // Acesso a array
    | IDENTIFIER BRACKETOPEN_PROP expression1? (COMMA expression1)* BRACKETCLOSE_PROP // Chamadas de função com ou sem parâmetros
    ;
array_structure:
  IDENTIFIER BRACKETOPEN_PROP ((NUMBER | expression1) COMMA? (NUMBER | expression1)?) BRACKETCLOSE_PROP
  ;
array_create:
    'Dim' array_structure (COMMA? array_structure)*
    ;

array_update:
    IDENTIFIER BRACKETOPEN_PROP (NUMBER | IDENTIFIER | expression1) BRACKETCLOSE_PROP '=' expression1
    
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
while_wend:
    WHILE current_Key_State
    (statement)*
    WEND;

for_loop:
    FOR IDENTIFIER '=' NUMBER TO NUMBER
    (statement)*
    (NEXT IDENTIFIER | NEXT) 
    ;

// If-End If statement that compares a variable to an expression
if_statement:
    IF expression1 ('=' | '<>' | '>=' | '>' | '<=' | '<') expression2
    (statement)* 
    (('End' 'if') | else_statement | ENDIF )
    ;
else_statement:
    ELSE
    (statement)*
    ENDIF
    ;
// If-End If statement for key state comparison
if_statement_key_state:
    IF current_Key_State
    (statement)*
    (else_statement | ENDIF )
    ;

bar:
    BAR expression1 COMMA expression2 'To' expression1 COMMA expression2
    ;

procedure:
    PROC IDENTIFIER BRACKETOPEN_ARRAY IDENTIFIER? BRACKETCLOSE_ARRAY // Modified to properly capture the brackets and optional parameter
    (statement)* 
    ENDPROC
    ;

current_Key_State:
    KEYSTATE BRACKETOPEN_PROP expression1 BRACKETCLOSE_PROP
    ;
print_options:
    expression1
    | STRING
    | HASHTAG NUMBER
    ;
print_something:
    'Print' print_options ((COMMA | FINISH_AND_ADD_OTHER_STATEMENT) print_options)*?
    ;

