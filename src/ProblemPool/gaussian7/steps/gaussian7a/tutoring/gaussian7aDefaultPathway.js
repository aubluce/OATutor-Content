var hints = [{id: "gaussian7a-h1", type: "hint", dependencies: [], title: "Augumented Matrix", text: "First, write the system of equations as an augumented matrix.", variabilization: {}}, {id: "gaussian7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} 0 & 0 & 0 & 6 & 8 & 24 \\end{bmatrix}$$"], dependencies: ["gaussian7a-h1"], title: "Try to obtain 1", text: "Multiply the second row by $$\\frac{\\left(-1\\right)}{2}$$ and add it to row 1. What is the new matrix?", subHints: [{id: "gaussian7a-h2-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\begin{bmatrix} 0 & 0 & 0 & 6 & 8 & 24 \\end{bmatrix}$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian7a-h3", type: "hint", dependencies: ["gaussian7a-h2"], title: "Interpret", text: "After interchanging the rows, there are all zeroes in the second one. This means $$0y=0$$. Thus, there are an $$infinite$$ number of solutions and the system is classified as dependent.", variabilization: {}}, {id: "gaussian7a-h4", type: "hint", dependencies: ["gaussian7a-h3"], title: "Find the generic solution", text: "To find the generic solution, return to one of the original equations and solve for y.", variabilization: {}}, {id: "gaussian7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(3\\right)-\\frac{\\left(3\\right) x}{4}$$"], dependencies: ["gaussian7a-h4"], title: "Find y in terms of x", text: "What does y equal when solving one of the original equations?", subHints: [{id: "gaussian7a-h5-s1", type: "hint", dependencies: [], title: "Answer", text: "The answer is $$\\left(3\\right)-\\frac{\\left(3\\right) x}{4}$$.", variabilization: {}}], variabilization: {}}, {id: "gaussian7a-h6", type: "hint", dependencies: ["gaussian7a-h5"], title: "Answer", text: "Therefore, the answer to the system of equations is $$(x,\\left(3\\right)-\\frac{\\left(3\\right) x}{4})$$.", variabilization: {}}, ]; export {hints};