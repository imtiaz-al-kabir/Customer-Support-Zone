- What is JSX, and why is it used?
  jsx means javaScript xml.it allow us to write html in js file.in { } we can declare dynamic type also

- What is the difference between State and Props?
  state is like a variable.it stores data based on condition.it can be changed on the other hand props is like property.we can pass data from parent to child using props .we cant modify props

- What is the useState hook, and how does it work?
  useState hook returns 2 things,the current state value and a function to update the value.if value changed it will render automatically

- How can you share state between components in React?
  we can share state between components in js using Lift State Up,Context API and also have some libraries. In lift state up we have to pass data unidirectional that means grandparent to parent to child

- How is event handling done in React?
  we can declare function on event like this
  <button onClick={sayHello}>Greet</button>;
  if i need to pass parameter then i have to write like this <button onClick={() => {sayHello("Imtiaz")}>Greet</button>
