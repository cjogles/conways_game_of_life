# Planning and Research Phase

Conways Game of Life is a cellular automaton developed by a British Mathematician by the name of John Conway. He calls it a zero player game because it doesn't require any input beyone the inital setting of the cells. Once the initial cells are set, the cells grow or die according to a simple set of rules. The game is "turing complete" and can simulate a "universal constructor" or any other turing machine. Cellular automata are useful in real life because their nature has helped define the diciplines of thought behind some biological theory and artificial intelligence which help scientists, philosophers, and all sorts of other people reason and think about all sorts of ideas and problems. 

A note on being "turing complete":
- To be considered "turing complete", a programming language, an instruction set, or in this case, a cellular automaton, needs to be able to replicate any turing machine. This means that the system is able to **recognize or decide other data manipulation rule sets**. The concept is named after English Mathematician Alan Turing. In further detail, a turing machine can be thought of as a read and write head that looks up and down a arbitrarily long peice of tape with 0s and 1s. The read and write head will have the ability to look at the zero, and based on its state, do something with that value, and move on to another place in memory based on conditional branching rules as defined by the turing machine. Based on those data manipulation, the rule set continues to modify the tape until the computation set is complete! A turing machine can do anything that any programming language, or quantum computer can do. So long as it has enough tape (i.e. RAM). Though it might be less efficient. Also, technically, all computers have finite memory. So technically all computers are NOT QUITE Turing Machines.
- A universal constructor is a self replicating machine in a cellular automaton. It was designed in the 40's without the use of a computer. The designs were published in John Von Neumanns book Theory of Self-Reproducing Automata, completed by Arthur W. Brooks in 1966 after Neumann's death. 


## High Level Vision for My Game of Life

I'm going to use a React App to render the Cellular Automaton to the screen via the browser via an HTML canvas being repeadedly re-updated every generation or tick as the DOM gets updated according to the javascript I write. I plan on styling the cells grey and blue. I will have some presets set up to showcase some generic fun game of life structures, like the glider, guns etc. I will have an option present that lets the user speed up ticks to see more change as well. Also a button to clear the grid. I would like to style it after this one as much as possible. https://bitstorm.org/gameoflife/ and add a blog statement section where I can chat about the algorithim and how it works. 




