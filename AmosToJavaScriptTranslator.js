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
      const keyMapping = {
        1: "Escape",
        2: "Digit1",
        3: "Digit2",
        4: "Digit3",
        5: "Digit4",
        6: "Digit5",
        7: "Digit6",
        8: "Digit7",
        9: "Digit8",
        10: "Digit9",
        11: "Digit0",
        12: "Minus",
        13: "Equal",
        14: "Backspace",
        15: "Tab",
        16: "KeyQ",
        17: "KeyW",
        18: "KeyE",
        19: "KeyR",
        20: "KeyT",
        21: "KeyY",
        22: "KeyU",
        23: "KeyI",
        24: "KeyO",
        25: "KeyP",
        26: "BracketLeft",
        27: "BracketRight",
        28: "Enter",
        29: "ControlLeft",
        30: "KeyA",
        31: "KeyS",
        32: "KeyD",
        33: "KeyF",
        34: "KeyG",
        35: "KeyH",
        36: "KeyJ",
        37: "KeyK",
        38: "KeyL",
        39: "Semicolon",
        40: "Quote",
        41: "Backquote",
        42: "ShiftLeft",
        43: "Backslash",
        44: "KeyZ",
        45: "KeyX",
        46: "KeyC",
        47: "KeyV",
        48: "KeyB",
        49: "KeyN",
        50: "KeyM",
        51: "Comma",
        52: "Period",
        53: "Slash",
        54: "ShiftRight",
        55: "NumpadMultiply",
        56: "AltLeft",
        57: "Space",
        58: "CapsLock",
        59: "F1",
        60: "F2",
        61: "F3",
        62: "F4",
        63: "F5",
        64: "F6",
        65: "F7",
        66: "F8",
        67: "F9",
        68: "F10",
        69: "Pause",
        70: "ScrollLock",
        71: "Numpad7",
        72: "Numpad8",
        73: "Numpad9",
        74: "NumpadSubtract",
        75: "Numpad4",
        76: "Numpad5",
        77: "Numpad6",
        78: "NumpadAdd",
        79: "Numpad1",
        80: "Numpad2",
        81: "Numpad3",
        82: "Numpad0",
        83: "NumpadDecimal",
        84: "IntlBackslash",
        85: "F11",
        86: "F12",
        87: "NumpadEqual",
        88: "F13",
        89: "F14",
        90: "F15",
        91: "F16",
        92: "F17",
        93: "F18",
        94: "F19",
        95: "F20",
        96: "F21",
        97: "F22",
        98: "F23",
        99: "F24",
        100: "NumpadComma",
        101: "Lang1",
        102: "Lang2",
        103: "NumpadEnter",
        104: "ControlRight",
        105: "NumpadDivide",
        106: "PrintScreen",
        107: "AltRight",
        108: "NumLock",
        109: "Home",
        110: "ArrowUp",
        111: "PageUp",
        112: "ArrowLeft",
        113: "ArrowRight",
        114: "End",
        115: "ArrowDown",
        116: "PageDown",
        117: "Insert",
        118: "Delete",
        119: "MetaLeft",
        120: "MetaRight",
        121: "ContextMenu",
        122: "Power",
        123: "AudioVolumeMute",
        124: "AudioVolumeDown",
        125: "AudioVolumeUp",
        126: "MediaTrackNext",
        127: "MediaTrackPrevious",
        128: "MediaStop",
        129: "MediaPlayPause",
        130: "LaunchMail",
        131: "MediaSelect",
        132: "LaunchApp1",
        133: "LaunchApp2",
        134: "LaunchApp3",
        135: "LaunchApp4",
        136: "BrowserSearch",
        137: "BrowserHome",
        138: "BrowserBack",
        139: "BrowserForward",
        140: "BrowserStop",
        141: "BrowserRefresh",
        142: "BrowserFavorites",
        143: "Lang3",
        144: "Lang4",
        145: "Lang5",
        146: "Lang6",
        147: "Lang7",
        148: "Lang8",
        149: "Lang9",
        150: "Lang10",
        151: "BrightnessDown",
        152: "BrightnessUp",
        153: "Eject",
        154: "Sleep",
        155: "WakeUp",
        156: "ScreenLock",
        157: "DisplaySwitch",
        158: "KbdIllumToggle",
        159: "KbdIllumDown",
        160: "KbdIllumUp",
        161: "SendMessage",
        162: "Reply",
        163: "Forward",
        164: "Save",
        165: "Documents",
        166: "Pictures",
        167: "Music",
        168: "Movies",
        169: "Calendar",
        170: "Calculator",
        171: "Memo",
        172: "ToDoList",
        173: "Phone",
        174: "Voicemail",
        175: "Contacts",
        176: "Mail",
        177: "MediaLibrary",
        178: "Search",
        179: "HomePage",
        180: "LogOff",
        181: "LockScreen",
        182: "TaskManager",
        183: "Next",
        184: "Previous",
        185: "EndCall",
        186: "AnswerCall",
        187: "MuteCall",
        188: "HoldCall",
        189: "ConferenceCall",
        190: "VolumeUp",
        191: "VolumeDown",
        192: "ZoomIn",
        193: "ZoomOut",
        194: "ScrollUp",
        195: "ScrollDown",
        196: "RotateLeft",
        197: "RotateRight",
        198: "FlipHorizontal",
        199: "FlipVertical",
        200: "Mirror",
        201: "PictureInPicture",
        202: "PictureMode",
        203: "ScreenShare",
        204: "VideoCall",
        205: "VoiceSearch",
        206: "AssistiveTouch",
        207: "Dictate",
        208: "LanguageSwitch",
        209: "Accessibility",
        210: "InputMethod",
        211: "EmojiPicker",
        212: "Camera",
        213: "PhotoLibrary",
        214: "FaceUnlock",
        215: "FingerprintScan",
        216: "IrisScan",
        217: "SmartLock",
        218: "DoNotDisturb",
        219: "NightMode",
        220: "PrivacyMode",
        221: "FlightMode",
        222: "PowerOff",
        223: "Restart",
        224: "Shutdown",
        225: "Hibernate",
        226: "RestartToBootloader",
        227: "SafeMode",
        228: "DeveloperOptions",
        229: "TakeScreenshot",
        230: "RecordScreen",
        231: "VideoPlayback",
        232: "MediaPause",
        233: "MediaRewind",
        234: "MediaFastForward",
        235: "MediaPlay",
        236: "MediaStop",
        237: "MediaRecord",
        238: "PlayPause",
        239: "PlayStop",
        240: "MediaNext"
      }`
    this.output += `
    let currentTimer = Date.now();
  let Ink = "black";
  let currentPressedKey = null;
  let isPressed = false;
 const keyCodes = () => {
  document.addEventListener('keydown', function (e) {

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
  this.output += `
  function clearDivs(idtarget) {
  const screenDiv = document.getElementById(idtarget);
  if (screenDiv) {
 screenDiv.remove(); 

  }
}
  `;
  
  }

  // Helper function to return the current indentation
  indent() {
    return "  ".repeat(this.indentLevel); // Each level indents by two spaces
  }
/* ADDED A GREY BACKGROUND FOR VISUAL PURPOSE */
  enterScreen_open(ctx) {
    const colorMapping = {
      1: "black",
      2: "white",
      3: "red",
      5: "green",
      8: "rgb(160, 64, 0)",
    };
    const width = ctx.children[3]?.getText();
    const height = ctx.children[5]?.getText();
    const color = ctx.children[7]?.getText();
    const colortarget = colorMapping[color] || "white";
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
${this.indent()}document.getElementById('amos-screen').style.backgroundColor = "${colortarget}";
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
    let x1 = ctx.expression1(0)?.getText();
    let y1 = ctx.expression2(0)?.getText();
    let x2 = ctx.expression1(1)?.getText();
    let y2 = ctx.expression2(1)?.getText();
    
    this.output += `
    const x1 = ${x1};
    const x2 = ${x2};
    const y1 = ${y1};
    const y2 = ${y2};
    const width = x2 - x1;
    const height = y2 - y1;
    const IdCreator = x1 + x2 + y1 + y2;
    const idBar = "Bar" + IdCreator.toString();

    let screenBarDiv = document.getElementById(idBar);

    if (screenBarDiv) {
        // If the div exists, update its properties
        screenBarDiv.style.backgroundColor = Ink;
        screenBarDiv.style.left = x1 + 'px';
        screenBarDiv.style.top = y1 + 'px';
        screenBarDiv.style.width = width + 'px';
        screenBarDiv.style.height = height + 'px';
       
    } else {
        // If the div doesn't exist, create it
        screenBarDiv = document.createElement('div');
        screenBarDiv.style.position = 'absolute';
        screenBarDiv.id = idBar;
        screenBarDiv.style.backgroundColor = Ink;
        screenBarDiv.style.left = x1 + 'px';
        screenBarDiv.style.top = y1 + 'px';
        screenBarDiv.style.width = width + 'px';
        screenBarDiv.style.height = height + 'px';
        document.getElementById('amos-screen').appendChild(screenBarDiv);
        
    }
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
    let lastTime${name} = 0; 
    let timeoutId${name} = null; // Track the timeout ID
${this.indent()}const ${name} = (${props}) => {
  const currentTime = Date.now();
  const timeSinceLastCall = currentTime - lastTime${name};
  
  if (timeSinceLastCall < 16) {
    if (timeoutId${name}) clearTimeout(timeoutId${name}); // Clear any existing timeout
    timeoutId${name} = setTimeout(() => {
      ${name}(${props}); 
    }, 100 - timeSinceLastCall);
    return;
  }

  lastTime${name} = currentTime;
  timeoutId${name} = null; // Clear the timeout ID after execution
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
  currentTimer = Date.now();

        `;
    this.indentLevel++; // Increase indentation inside the loop
  }
  /* WAIT KEY FUNCTION */
/*   enterWait_key_break(ctx) {
    this.output += `
${this.indent()}if (!isPressed) {
${this.indent()}return;
${this.indent()}}
        `;
  } */
  exitDo_loop(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the loop
    this.output += `
${this.indent()}}, 16);`;
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

    if (leftExpression.includes('$')) {
        // Extract the hexadecimal value from the expression
        let hexValueMatch = leftExpression.match(/\$[0-9A-Fa-f]+/);
        
        if (hexValueMatch) {
            let hexValue = parseInt(hexValueMatch[0].replace('$', ''), 16);

            // Check if the leftExpression is just a hexadecimal value
            if (hexValueMatch[0] === leftExpression) {
                // If it's only a hex value, convert it to a key mapping lookup
                leftExpression = `keyMapping[${hexValue}]`;
            } else {
                let variable = leftExpression.split('$')[0];
                console.log(variable);
                // If it's a variable or expression with a hex part, construct it accordingly
                leftExpression = leftExpression.replace(/\$[0-9A-Fa-f]+/, `keyMapping[${hexValue}`);
            }
        }
    }

    this.output += `
    
${this.indent()}if (currentPressedKey === ${leftExpression}]) {
   

  `;
    this.indentLevel++; // Increase indentation for nested blocks
}


exitIf_statement_key_state(ctx) {
    this.indentLevel--; // Decrease indentation after exiting the if block
    this.output += `
${this.indent()}
}`;
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
