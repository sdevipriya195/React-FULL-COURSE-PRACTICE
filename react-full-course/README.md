-> React is a Javascript library for building user interfaces.
-> React is first created by Facebook.
->React is open-source front-end JavaScript library.

React Dev Tools:
Elements: We can see styles and html code, we can play with the css here.
Console: We can log anything here to know the issues and the flow of application.
Network: We can see Api calls here
Lighthouse: We can check the performance of the page here.

Some Linux Basic commands:
cls/clear=> clear the command prompt
ls => Used to know the list of files available
history=> Shows the commands we have used until then
ls -l => It will show more information about the files along with the file names
cd => Used to change directory
pwd=> present working directory
uname=> Gives type of system
mkdir <DirectoryName>=> It will create folder
rm -r <DirectoryName>=> It will remove the folder
touch <fileName>=> It will create empty file
rm <fileName>=> IT will delete the file
cat <fileName>=> We can see the content of that file
date=>shows the today date
whoami=> Shows the laptop owner details
whereis <softwareName>=> It will show the location of that software
man <commandName>=> It will give the manual of that particular command name

npm: npm(node package manager) is package management tool 

package.json: It contains all the things we installed mentioned with their version names
package.lock.json: It contains more information about the package.json

babel: babel is a JavaScript compiler which converts ES6 into ES5 internally. React uses the babel internally.

Webpack: Webpack contains all the files as group, for suppose, all .js files will be there as a pack. React uses the webpack internally.

Virtual DOM: Virtual DOM is a lightweight JavaScript representation of the real DOM. When the state or props change, React creates a new Virtual DOM and compares it with the previous one (this process is called reconciliation). Based on the differences, React updates only the necessary parts of the real DOM instead of re-rendering the entire UI.

What is Reconcilation process?
->Reconciliation is the process React uses to update the UI efficiently. When state or props change, React creates a new Virtual DOM and compares it with the previous one using a diffing algorithm. Based on the differences, React updates only the changed parts in the real DOM instead of re-rendering the entire UI.

What are the phases of a React component lifecycle?
->React components go through three lifecycle phases: mounting, updating, and unmounting. Mounting happens when the component is created and added to the DOM, updating occurs when state or props change causing re-render, and unmounting happens when the component is removed from the DOM.
->In functional components, lifecycle phases are handled using hooks like useEffect.

What is props?
->Props in React are used to pass data from a parent component to a child component. They are read-only and help make components reusable and dynamic by allowing different data to be passed into them.    

Can we pass props from child to parent?
->Props cannot be passed directly from child to parent because React follows one-way data flow. However, we can pass a function from the parent to the child as a prop, and the child can call that function to send data back to the parent.

What does 'lifting state up' means?
->Lifting state up is the process of moving state from a child component to its nearest common parent so that the state can be shared between multiple components. This helps maintain a single source of truth and enables better data flow in React applications.

What is DeStructuring?
->Destructuring is a JavaScript feature that allows us to extract values from objects or arrays and assign them to variables in a concise way. It is commonly used in React to access props and state more cleanly.

What is Hooks?
->Hooks are functions in React that allow functional components to use state and lifecycle features. They were introduced to simplify component logic and avoid the need for class components.
Hooks follow certain rules like calling them only at the top level and only inside React functions.

Explain about the useState?
->useState is a React Hook used to manage state in functional components. It returns a state variable and a function to update that state. When the state changes, React re-renders the component to reflect the updated value.
syntax:const[name,setName]=useState();

Explain about the useEffect?
->useEffect is a React Hook used to handle side effects in functional components, such as API calls, subscriptions, or timers. It runs after the component renders and can be controlled using a dependency array. It also supports cleanup functions to manage unmounting or re-running effects.
syntax:useEffect(()=>{},[dependencies])
-> There are 4 cases based on the dependency, you can check in "images folder"

Explain about the async and promises?
->A Promise is an object that represents the result of an asynchronous operation and can be in pending, fulfilled, or rejected state. Async/await is a modern way to handle promises that makes asynchronous code easier to read and write by allowing us to write it in a synchronous style.

What is prop-drilling?
->Prop drilling is the process of passing props from a parent component to deeply nested child components through intermediate components that do not need the data. It can make the code harder to maintain, and it is usually avoided using Context API or state management libraries.

What is Context API?
->Context API is a feature in React used to share data globally between components without passing props manually at every level (avoids prop drilling).
Steps in Context API:
1️⃣ Create Context: const UserContext = React.createContext();
2️⃣ Provide Data: 
function App() {
  return (
    <UserContext.Provider value="Devipriya">
      <Child />
    </UserContext.Provider>
  );
}
3️⃣ Consume Data: By using useContext

What is useContext?
->useContext is a React Hook used to access or consume data from a Context created using the Context API.
Example:
import { useContext } from "react";

function Child() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}

What is useReducer?
-> useReducer is a React Hook used to manage state using a reducer function. It’s like useState, but for complex state logic.
-> It takes a reducer and initial state and returns the current state and a dispatch function. It is useful when state updates are complex or when multiple state values are involved.



Syntax: 
const [state, dispatch] = useReducer(reducer, initialState);







