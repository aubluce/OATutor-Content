var hints = [{id: "a10b60arealnumbers12b-h1", type: "hint", dependencies: [], title: "Quotient Propert", text: "If the fraction inside the radical can't be simplified, you can split it into two radicals, since $$\\sqrt{n, \\frac{a}{b}}$$ is equivalent to $$\\frac{\\sqrt{n, a}}{\\sqrt{n, b}}$$", variabilization: {}}, {id: "a10b60arealnumbers12b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\sqrt{4, 48x^{10}}}{\\sqrt{4, y^8}}$$"], dependencies: ["a10b60arealnumbers12b-h1"], title: "Quotient Property", text: "Split the radical $$\\sqrt{3, \\frac{48x^{10}}{y^8}}$$ into a quotient with a radical in the numerator and in the denominator", variabilization: {}}, {id: "a10b60arealnumbers12b-h3", type: "hint", dependencies: ["a10b60arealnumbers12b-h2"], title: "Simplifying Radicals in a Quotient", text: "Once the radical is split into a quotient with a radical in the numerator and denominator, you can simplify each radical as best as possible and return the quotient", variabilization: {}}, {id: "a10b60arealnumbers12b-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(2*x**2)*sqrt(4,3*x**2)"], dependencies: ["a10b60arealnumbers12b-h3"], title: "Simplifying the Numerator", text: "Simplify $$\\sqrt{4, 48x^{10}}$$", variabilization: {}}, {id: "a10b60arealnumbers12b-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$48x^{10}$$"], dependencies: ["a10b60arealnumbers12b-h4"], title: "Simplifying the Numerator", text: "What is $${\\left(2x^2\\right)}^4 3x^2$$", variabilization: {}}, {id: "a10b60arealnumbers12b-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$y^2$$"], dependencies: ["a10b60arealnumbers12b-h5"], title: "Simplifying the Denominator", text: "Simplify $$\\sqrt{4, y^8}$$", variabilization: {}}, ]; export {hints};