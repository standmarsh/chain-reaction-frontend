import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAtom } from 'jotai';

import PrivateRoute from './components/Routes/PrivateRoute';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import { Login, Register } from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Play from './pages/Play';

import { useUser } from './utils/queries/query';
import { userData } from './store/store';
import GameProvider from './contexts/GameContext';

function App() {
  const [user, setUserJotai] = useAtom(userData);

  useEffect(() => {
    refetch();
  }, []);

  const { data, refetch } = useUser();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <GameProvider>
          <PrivateRoute path="/play" exact component={Play} />
        </GameProvider>
      </Switch>
    </Router>
  );
}

export default App;
