Exercise
========

Build an expandable text component named `ExpandableText.tsx` in this folder. 
- Pass the text to render as prop along with maxlength. If maxlength is not provided, keep a default value of 100 chars. 
- Maintain a state variable for whether the text is expanded or not. If this variable is true show full text else show trimmed text with a `...` at end
- For now don't worry about handling expanding text. We will cover that in event handling topic. 
- Add a button at the end of text which shows different label like `More` if text is not expanded and `Less` if text is expanded. Don't worry about button click for now.
- Try changing the expandable state variable and see the label change on the screen