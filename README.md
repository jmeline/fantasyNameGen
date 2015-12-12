Fantasy Name Generator
======================

Names can be generated through the Markov Process.

(http://www.doctornerve.org/nerve/pages/interact/markhelp.htm)
A Markov analysis looks at a sequence of events, and analyzes the tendency of one event to be followed by another. Using this analysis, you can generate a new sequence of random but related events, which will look similar to the original.

A Markov process is useful for analyzing dependent random events - that is, events whose likelihood depends on what happened last. It would NOT be a good way to model a coin flip, for example, since every time you toss the coin, it has no memory of what happened before. The sequence of heads and tails are not inter-related. They are independent events.

https://gillesleblanc.wordpress.com/2012/10/01/algorithm-to-generate-random-names/

Just stringing random letters together would give you something like "dwrtkpzxmq" and wouldn't be as interesting.

A better technique to building names is by parsing text files to create probability tables. These can determine the probability of a letter following another letter. Something like A has a 40% change of being followed by M, and 24% change of being followed by o


