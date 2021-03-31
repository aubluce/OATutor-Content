var hints = [{id: "addand17a-h1", type: "hint", dependencies: [], title: "Substitute", text: "Substitute 9 for x, -18 for y, and -6 for z in the expression."}, {id: "addand17a-h2", type: "hint", dependencies: ["addand17a-h1"], title: "Substitute", text: "We get $$\\frac{\\left(9\\right)+\\left(-1\\right)8}{\\left(-6\\right)}$$ after the substitution."}, {id: "addand17a-h3", type: "hint", dependencies: ["addand17a-h2"], title: "Numerator", text: "Add in the numerator first."}, {id: "addand17a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9"], dependencies: ["addand17a-h3"], title: "Numerator", text: "What do we get for the numerator after adding the two together?"}, {id: "addand17a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3/2"], dependencies: ["addand17a-h4"], title: "Simplify", text: "What do we get after simplifying the fraction?"}, ]; export {hints};