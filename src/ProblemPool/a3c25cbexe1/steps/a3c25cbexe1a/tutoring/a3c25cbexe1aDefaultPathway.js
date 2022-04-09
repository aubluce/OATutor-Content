var hints = [{id: "a3c25cbexe1a-h1", type: "hint", dependencies: [], title: "Find Two Factors", text: "In the form $${ax}^2+bx+c$$, find 2 numbers that multiply to c and add up to b (Note: This only works when $$a=1)$$", variabilization: {}}, {id: "a3c25cbexe1a-h2", type: "hint", dependencies: ["a3c25cbexe1a-h1"], title: "Two Factors", text: "The two factors that match these rules are 100 and 1", variabilization: {}}, {id: "a3c25cbexe1a-h3", type: "hint", dependencies: ["a3c25cbexe1a-h2"], title: "Plug into factored form", text: "The factored form is $$\\left(x+y\\right) \\left(x+z\\right)$$. The value of x can vary depending on the equation (could be u, y, f, etc) and the values of y and z are the two factors.", variabilization: {}}, ]; export {hints};