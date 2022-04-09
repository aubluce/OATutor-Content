var hints = [{id: "a28448cslope23a-h1", type: "hint", dependencies: [], title: "Solve the second equation for y", text: "$$x-5y=5$$ \\n $$-5y=-x+5$$ \\n $$\\frac{\\left(-5y\\right)}{-5}=\\frac{\\left(-x+5\\right)}{-5}$$ \\n $$y=\\frac{1}{5} x-1$$", variabilization: {}}, {id: "a28448cslope23a-h2", type: "hint", dependencies: ["a28448cslope23a-h1"], title: "Slope-Intercept Form", text: "Both equations are now in slope-intercept form: $$y=-5x-4$$, $$y=\\frac{1}{5} x-1$$", variabilization: {}}, {id: "a28448cslope23a-h3", type: "hint", dependencies: ["a28448cslope23a-h2"], title: "Slope", text: "Identify the slope of both lines.", variabilization: {}}, {id: "a28448cslope23a-h4", type: "hint", dependencies: ["a28448cslope23a-h3"], title: "Slope-Intercept Form of an Equation of the First Line", text: "Compare the first equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=-5x-4$$", variabilization: {}}, {id: "a28448cslope23a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5"], dependencies: ["a28448cslope23a-h4"], title: "Identify the Slope of First Line", text: "What is m in the first equation?", variabilization: {}}, {id: "a28448cslope23a-h6", type: "hint", dependencies: ["a28448cslope23a-h5"], title: "Slope-Intercept Form of an Equation of Second Line", text: "Compare the second equation to the slope-intercept form of the equation. \\n $$y=m x+b$$ \\n $$y=\\frac{1}{5} x-1$$", variabilization: {}}, {id: "a28448cslope23a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{5}$$"], dependencies: ["a28448cslope23a-h6"], title: "Identify the Slope of Second Line", text: "What is m in the second equation?", variabilization: {}}, {id: "a28448cslope23a-h8", type: "hint", dependencies: ["a28448cslope23a-h7"], title: "Perpendicular Lines", text: "Perpendicular lines have slopes that are negative reciprocals of each other. We check by multiplying the slopes and see if it equals -1.", variabilization: {}}, {id: "a28448cslope23a-h9", type: "hint", dependencies: ["a28448cslope23a-h5", "a28448cslope23a-h7", "a28448cslope23a-h8"], title: "Checking if perpendicular", text: "$$m_1 m_2$$ \\n $$-5\\frac{1}{5}=-1$$", variabilization: {}}, {id: "a28448cslope23a-h10", type: "hint", dependencies: ["a28448cslope23a-h9"], title: "Perpendicular Lines", text: "The slopes are negative reciprocals of each other, so the lines are perpendicular.", variabilization: {}}, ]; export {hints};