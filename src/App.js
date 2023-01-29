
import './App.css';
import PureClass from './pure component/PureClass';
import PureFunction from './pure component/PureFunction';
import Component1 from './HOC/Component1';
import Component2 from './HOC/Component2';

function App() {
  return (
    <div className="App">
      <h1>Pure Component</h1>
      <PureClass/>
      <PureFunction/>

      <h1>Higher order component</h1>
      <Component1/>
      <Component2/>
   
    </div>
  );
}

export default App;
