import './App.css';
import Counter from "./Counter";
import {CounterProvider} from "./CounterContext";

function App() {
  return (
      <CounterProvider>
        <div className="App">
          <Counter/>
        </div>
      </CounterProvider>

  );
}

export default App;
