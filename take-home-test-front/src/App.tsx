import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Dashboard from './components/Dashboard'
import { ApplicationContextType, useAppContext } from './store/context/ApplicationContext'
import Sidebar from './components/Sidebar'


const saveContextToLocalStorage = (currentContext: ApplicationContextType) => {
  return () => {
    // e: React.ChangeEvent<HTMLInputElement>
    // TODO: test this behavior on different browsers
    // e.preventDefault();
    localStorage.setItem('application_context', JSON.stringify({ value: currentContext.value }));
    // e.returnValue = undefined;
    // return undefined;
  };
}

function App() {
  // const [count, setCount] = useState(0);
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
        <Sidebar />
        {/* <Dashboard /> */}
      </div>
      {/* <h1>Vite + React</h1>
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
      </p> */}
    </>
  )
}

export default App
