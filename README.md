- What is JSX, and why is it used?

  jsx means javaScript xml. It allow us to write html in js file. In the { } we can declare dynamic type also.

- What is the difference between State and Props?

  State is like a variable. It stores data based on condition. It can be changed on the other hand props is like property. We can pass data from parent to child using props . We cant modify props

- What is the useState hook, and how does it work?

  useState hook returns 2 things,the current state value and a function to update the value. If value changed it will render automatically

- How can you share state between components in React?

  We can share state between components in js using Lift State Up,Context API and also have some libraries. In lift state up we have to pass data unidirectional that means grandparent to parent to child

- How is event handling done in React?

  we can declare function on event like this
  <button onClick={sayHello}>Greet</button>;
  if i need to pass parameter then i have to write like this <button onClick={() => {sayHello("Imtiaz")}>Greet</button>
