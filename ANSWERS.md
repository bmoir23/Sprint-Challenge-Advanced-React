- [ ] Why would you use class component over function components (removing hooks from the question)?
* you can use more methods within class components that you arent able to with Functional components. You can also get to the state when passing from a parent to child components 
- [ ] Name three lifecycle methods and their purposes.
1) Mounting - component is being built 
2)Updating - setState is used to to change state with render(), and shouldComponentUpdate will stop a component from calling render
- [ ] What is the purpose of a custom hook?
* Custom hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
- [ ] Why is it important to test our apps?
* testing is important because it will show you any bugs and faults in your code prior to launching it into production. 