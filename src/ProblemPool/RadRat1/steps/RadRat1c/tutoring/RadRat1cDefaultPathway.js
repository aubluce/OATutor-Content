var hints = [{id: "RadRat1c-h1", type: "hint", dependencies: [], title: "Parentheses", text: "The first step is to simplify the parentheses."}, {id: "RadRat1c-h2", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["169"], dependencies: ["RadRat1c-h1"], title: "What is $25+144$?", text: "0.0"}, {id: "RadRat1c-h3", type: "hint", dependencies: ["RadRat1c-h2"], title: "Simplify", text: "Simlify the expression: $\\sqrt{25+144}$=$\\sqrt{169}$"}, {id: "RadRat1c-h4", type: "hint", dependencies: ["RadRat1c-h3"], title: "Principal Square Root", text: "The principal square root of a is the nonnegative number that, when multiplied by itself, equals a. It is written as a radical expression, with a symbol called a radical over the term called the radicand: $\\sqrt{a}$."}, {id: "RadRat1c-h5", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["13"], dependencies: ["RadRat1c-h4"], title: "Principal Square Root", text: "What number multiplied by itself equals 169?"}, ]; export {hints};