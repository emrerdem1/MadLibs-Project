//hotkeys, second assignment
let blankSpaces = document.querySelectorAll(".inputs");
let inputCount;
document.addEventListener("keydown", function(e){
  for(let i=0; i < blankSpaces.length; i++) {
    blankSpaces[i].index = i;
    inputCount = parseInt(e.target.index);
   
  }

  if(e.key === "Enter"){
    if(inputCount>=blankSpaces.length-1){
      inputCount=-1;
    }
    blankSpaces[++inputCount].focus();
  } 

});
//-------------------------------------------------------\\
//live update, forth assignment
function set(el,text){
 while(el.firstChild)el.removeChild(el.firstChild);
 el.appendChild(document.createTextNode(text))}
 
function setupUpdater(){
 let input=document.getElementsByTagName('input')[0], orig=document.getElementById('original'),
           oldText=input.value, timeout=null;
  function handleChange(){
  let newText=input.value;
  if (newText==oldText) return; else oldText=newText;
  set(orig, newText);
 }
 function eventHandler(){
  if(timeout) clearTimeout(timeout);
  timeout=setTimeout(handleChange, 50);
 }
  input.onkeydown=input.onkeyup=input.onclick=eventHandler;
}
setupUpdater();
document.getElementsByTagName('input')[0].focus();
//-------------------------------------------------------\\
/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
});

//:enabled 	input:enabled 	Selects every enabled <input> element
//focus 	The event occurs when an element gets focus