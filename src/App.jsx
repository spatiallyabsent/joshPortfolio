import { Outlet } from 'react-router-dom';
//bellow is where we importated our navtabs We need to make a footer similar to this
import Nav from './components/NavTabs';
import FootIcons from './components/FootIcons';
// used example from 20-React/23-Ins_React-Router
function App() {
    return (
      <>
        <Nav />
        <main>
          <Outlet />
        </main>
        <FootIcons />
      </>
    );
  }

  export default App;