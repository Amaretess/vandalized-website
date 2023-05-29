import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from './config/routesConfig';

function App() {
  return (
    <Routes>
      {routesConfig.map((route) => <Route key={route.id} path={route.path} element={route.element} />) }
    </Routes>
  );
}

export default App;
