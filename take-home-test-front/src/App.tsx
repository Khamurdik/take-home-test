import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/Dashboard'
import { useAppContext } from './store/context/ApplicationContext'


const saveContextToLocalStorage = (currentContext) => {
  return () => {
    // TODO: test this behavior on different browsers
    e.preventDefault();
    localStorage.setItem('application_context', JSON.stringify({ value: currentContext.value }));
    e.returnValue = undefined;
    // return undefined;
  };
}

function App() {
  const [count, setCount] = useState(0);
  const context = useAppContext();

  useEffect(() => {
    window.addEventListener("beforeunload", saveContextToLocalStorage(context));
    return () => {
      window.removeEventListener("beforeunload", saveContextToLocalStorage(context));
    };
  }, [context]);

  return (
    <>
      <div>
        <Dashboard />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
