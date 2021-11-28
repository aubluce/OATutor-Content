var hints = [{id: "a1f0162sequences18c-h1", type: "hint", dependencies: [], title: "Substitution", text: "Substitute $$n=3$$ into the formula", variabilization: {}}, {id: "a1f0162sequences18c-h2", type: "hint", dependencies: ["a1f0162sequences18c-h1"], title: "Simplification", text: "Calculate the expression $$\\frac{{\\left(-1\\right)}^3 3^2}{3+1}$$", variabilization: {}}, {id: "a1f0162sequences18c-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-9"], dependencies: ["a1f0162sequences18c-h2"], title: "Calculate the numerator", text: "What is $${\\left(-1\\right)}^3 3^2$$", variabilization: {}}, {id: "a1f0162sequences18c-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["4"], dependencies: ["a1f0162sequences18c-h3"], title: "Calculate the denominator", text: "What is $$3+1$$", variabilization: {}}, {id: "a1f0162sequences18c-h5", type: "hint", dependencies: ["a1f0162sequences18c-h4"], title: "Putting It Together", text: "Put the numerator and denominator together to create a fraction", variabilization: {}}, ]; export {hints};