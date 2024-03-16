import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// used example from 20-React/23-Ins_React-Router
function App() {
    return (
      <>
        <Nav />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  export default App;