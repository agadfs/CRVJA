import AMOSListener from "./AMOSListener";

class AmosToJavaScriptTranslator extends AMOSListener {
  constructor() {
    super();
    this.output = "";
    this.indentLevel = 0; // Track current indentation level
    this.id = 0;
    this.current_Ink = "black";
    this.functionStarters = "";
    this.output += `
  let Ink = "black";
  let currentPressedKey = null;
  let isPressed = false;
 const keyCodes = () => {
  document.addEventListener('keydown', function (e) {
   console.log(e.code);
    isPressed = true;
    currentPressedKey = e.code;
  });
  document.addEventListener('keyup', function (e) {
    isPressed = false;
    currentPressedKey = null;
});
};

keyCodes();
  `;
  
  }

  // Helper function to return the current indentation
  indent() {
    return "  ".repeat(this.indentLevel); // Each level indents by two spaces
  }
/* ADDED A GREY BACKGROUND FOR VISUAL PURPOSE */
  enterScreen_open(ctx) {
    const width = ctx.children[3]?.getText();
    const height = ctx.children[5]?.getText();

    this.output += `
${this.indent()}const screenDiv = document.createElement('div');
${this.indent()}screenDiv.style.width = '${width}px';
${this.indent()}screenDiv.style.height = '${height}px';
${this.indent()}screenDiv.style.border = '1px solid red';
${this.indent()}screenDiv.style.overflow = 'hidden'; 
${this.indent()}screenDiv.style.padding = '0'; 
${this.indent()}screenDiv.style.position = 'relative'; 
${this.indent()}screenDiv.id = 'amos-screen'; 
${this.indent()}document.getElementById('game-container').appendChild(screenDiv);
${this.indent()}document.getElementById('amos-screen').style.backgroundColor = 'grey';
        `;
  }

  enterCurs_off(ctx) {
    this.output += `
${this.indent()}document.getElementById('amos-screen').style.cursor = 'none';   
        `;
  }

  enterCurs_on(ctx) {
    this.output += `
${this.indent()}document.getElementById('amos-screen').style.cursor = 'auto';
        `;
  }

  enterInk(ctx) {
    const colorIndex = ctx.children[1]?.getText();
    const colorMapping = {
      1: "black",
      2: "white",
      3: "red",
      5: "green",
    };
    const color = colorMapping[colorIndex] || "black";
    this.current_Ink = color;
    this.output += `Ink = "${color}";`;
  }
  
  enterBar(ctx) {
    this.id++;
    let x1 = ctx.expression1(0)?.getText();
    let y1 = ctx.expression2(0)?.getText();
    let x2 = ctx.expression1(1)?.getText();
    let y2 = ctx.expression2(1)?.getText();

    this.output += `
${this.indent()}const screenBarDiv${this.id} = document.createElement('div');
${this.indent()}screenBarDiv${this.id}.style.position = 'absolute';
${this.indent()}document.getElementById('amos-screen').appendChild(screenBarDiv${
      this.id
    });
    const x1 = ${x1};
    const x2 = ${x2};
    const y1 = ${y1};
    const y2 = ${y2};
    const width = x2 - x1;
    const height = y2 - y1;
${this.indent()}screenBarDiv${this.id}.style.backgroundColor = Ink;
${this.indent()}screenBarDiv${this.id}.style.left = x1 + 'px';
${this.indent()}screenBarDiv${this.id}.style.top = y1 + 'px';
${this.indent()}screenBarDiv${this.id}.style.width = width + 'px';
${this.indent()}screenBarDiv${this.id}.style.height = height + 'px';
${this.indent()}
        `;
  }
  /* FIX WHILE, RIGHT NOW IS NOT WORKING */
  enterWhile_wend(ctx) {
    this.output += `
${this.indent()}while (false) {
        `;
  }
  exitWhile_wend(ctx) {
    this.output += `
${this.indent()}}`;
  }
  enterVariable_starter(ctx) {
    let name = ctx.children[0]?.getText() || "";
    let value = ctx.children[2]?.getText() || 0;
    this.output += `
${this.indent()}let ${name} = ${value};
        `;
  }
  enterProcedure(ctx) {
    this.id++;
    let name = ctx.children[1]?.getText();
    let props = "";
    for (let i = 3; i < ctx.children.length; i++) {
      if (ctx.children[i]?.getText() === "]") {
        break;
      }
      props += ctx.children[i]?.getText();
      if (ctx.children[i + 1]?.getText() !== "]") {
        props += " ";
        props += ",";
      }
    }

    this.output += `
${this.indent()}const ${name} = (${props}) => {
  
        `;
    this.indentLevel++;
  }

  exitProcedure(ctx) {
    this.indentLevel--;
    this.output += `
${this.indent()}}`;
  }

  enterText(ctx) {
    const x = ctx.children[1]?.getText();
    const y = ctx.children[3]?.getText();
    const text = ctx.children[5]?.getText().replace(/\"/g, "");

    this.output += `
${this.indent()}const textDiv${x}${y} = document.createElement('div');
${this.indent()}textDiv${x}${y}.innerText = '${text}';
${this.indent()}textDiv${x}${y}.style.position = 'absolute';
${this.indent()}textDiv${x}${y}.style.left = '${x}px';
${this.indent()}textDiv${x}${y}.style.top = '${y}px';
${this.indent()}textDiv${x}${y}.style.fontSize = '14px';
${this.indent()}textDiv${x}${y}.style.color = 'black';
${this.indent()}document.getElementById('amos-screen').appendChild(textDiv${x}${y});
        `;
  }

  // Handle DO loop
  enterDo_loop(ctx) {
    this.output += `
${this.indent()}setInterval(() => {

        `;
    this.indentLevel++; // Increase indentation inside the loop
  }
  enterWait_key_break(ctx) {
    this.output += `
${this.indent()}if (!isPressed) {
${this.indent()}return;
${this.indent()}}
        `;
  }
  exitDo_loop(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the loop
    this.output += `
${this.indent()}}, 100);`;
  }

  enterFor_loop(ctx) {
    let variable;
    let start;
    let end;
    variable = ctx.children[1]?.getText();
    start = ctx.children[3]?.getText();
    end = ctx.children[5]?.getText();
    this.output += `
${this.indent()}for (let ${variable} = ${start}; ${variable} <= ${end}; ${variable}++) {
        `;
    this.indentLevel++; // Increase indentation inside the loop
  }

  exitFor_loop(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the loop
    this.output += `
${this.indent()}}`;
  }

  enterIf_statement(ctx) {
    let leftExpression;
    let comparator;
    let rightExpression = "";

    // Get the left-hand side expression (e.g., PRESSEDKEYNUMBER)
    leftExpression = ctx.expression1(0)?.getText();

    // Get the comparison operator (e.g., =, <>)
    comparator = ctx.children[2]?.getText();
    if (comparator === "=") {
      comparator = "==";
    }
    if (comparator === "<>") {
      comparator = "!=";
    }

    // Get the right-hand side expression (e.g., 2 * I + 1)
    rightExpression = ctx.expression2(0)?.getText();

    // Output the if statement
    this.output += `
    
${this.indent()}if (${leftExpression} ${comparator} ${rightExpression}) {
        `;
    this.indentLevel++; // Increase indentation for nested blocks
  }

  exitIf_statement(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the if block
    this.output += `
${this.indent()}}`;
  }

  enterFunction_starter(ctx) {

    let name = ctx.children[0]?.getText() || "";
    let value = ctx.children[2]?.getText() || 0;
    if(this.indentLevel == 0){
      this.functionStarters += `
  ${this.indent()}${name}(${value}); // Function call
          `;
    }else{
      this.output += `
  ${this.indent()}${name}(${value}); // Function call
          `;
    }
  }
  enterIf_statement_key_state(ctx) {
    let leftExpression = ctx.current_Key_State(0)?.expression1(0)?.getText();
    // Check if the leftExpression contains a `$` and adjust accordingly
    if (leftExpression.includes('$')) {
        // Remove the '$' and parse the remaining string as a hexadecimal number
        let hexValue = parseInt(leftExpression.replace('$', ''), 16);
        // Add 6 to the hexadecimal value
       
        if (hexValue + 6 == 22) {
          leftExpression = "KeyD";
        }else{
          
          leftExpression = (hexValue + 6).toString();
        }
    }
    
    this.output += `
${this.indent()}if (currentPressedKey === "${leftExpression}") {
  `;
    this.indentLevel++; // Increase indentation for nested blocks
}
exitIf_statement_key_state(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the if block
    this.output += `
${this.indent()}}`;
}

  enterElse_statement(ctx) {
    this.output += `}else {`;
    this.indentLevel++;
  }
  exitElse_statement(ctx) {
    this.indentLevel--;
    this.output += ``;
  }
  getJavaScript() {
    return this.output + this.functionStarters;
  }
}

export default AmosToJavaScriptTranslator;
