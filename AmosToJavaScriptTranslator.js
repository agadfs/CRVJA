import AMOSListener from "./AMOSListener";

class AmosToJavaScriptTranslator extends AMOSListener {
  constructor() {
    super();
    this.output = "";
    this.indentLevel = 0; // Track current indentation level
    this.id = 0;
    this.current_Ink = "black";
  }

  // Helper function to return the current indentation
  indent() {
    return "  ".repeat(this.indentLevel); // Each level indents by two spaces
  }

  enterScreen_open(ctx) {
    const width = ctx.children[3].getText();
    const height = ctx.children[5].getText();

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
    const colorIndex = ctx.children[1].getText();
    const colorMapping = {
      1: "black",
      2: "white",
      3: "red",
    };
    const color = colorMapping[colorIndex] || "black";
   this.current_Ink = color;
  }
  /* FIX BAR CHECK LEFT TOP WIDTH AND HEIGHT AND SO ON */
  enterBar(ctx) {
    this.id++;
    let x1 = ctx.expression1(0).getText();
    let x2 = ctx.expression2(0).getText();
    let y1 = ctx.expression1(1).getText();
    let y2 = ctx.expression2(1).getText();

    this.output += `
${this.indent()}const screenBarDiv${this.id} = document.createElement('div');
${this.indent()}screenBarDiv${this.id}.style.backgroundColor = '${this.current_Ink}';
${this.indent()}screenBarDiv${this.id}.style.width = 100px;
${this.indent()}screenBarDiv${this.id}.style.height = 100px;
${this.indent()}screenBarDiv${this.id}.style.border = '1px solid ${this.current_Ink}';
${this.indent()}screenBarDiv${this.id}.style.overflow = 'hidden'; 
${this.indent()}screenBarDiv${this.id}.style.padding = '0'; 
${this.indent()}screenBarDiv${this.id}.style.position = 'absolute'; 
${this.indent()}screenBarDiv${this.id}.id = ${this.id}; 
${this.indent()}screenBarDiv${this.id}.style.left = '${x1}px';
${this.indent()}screenBarDiv${this.id}.style.top = '${y1}px';
${this.indent()}document.getElementById('amos-screen').appendChild(screenBarDiv${
      this.id
    });
        `;
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
    let name = ctx.children[1].getText();
    let props = "";
    for (let i = 3; i < ctx.children.length; i++) {
      if (ctx.children[i].getText() === "]") {
        break;
      }
      props += ctx.children[i].getText();
      if (ctx.children[i + 1].getText() !== "]") {
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
    const x = ctx.children[1].getText();
    const y = ctx.children[3].getText();
    const text = ctx.children[5].getText().replace(/\"/g, "");

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
${this.indent()}while (false) {
        `;
    this.indentLevel++; // Increase indentation inside the loop
  }

  exitDo_loop(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the loop
    this.output += `
${this.indent()}}`;
  }

  enterFor_loop(ctx) {
    let variable;
    let start;
    let end;
    variable = ctx.children[1].getText();
    start = ctx.children[3].getText();
    end = ctx.children[5].getText();
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
    leftExpression = ctx.expression1(0).getText();

    // Get the comparison operator (e.g., =, <>)
    comparator = ctx.children[2].getText();
    if (comparator === "=") {
      comparator = "==";
    }
    if (comparator === "<>") {
      comparator = "!=";
    }

    // Get the right-hand side expression (e.g., 2 * I + 1)
    rightExpression = ctx.expression2(0).getText();

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

  getJavaScript() {
    return this.output;
  }
}

export default AmosToJavaScriptTranslator;
