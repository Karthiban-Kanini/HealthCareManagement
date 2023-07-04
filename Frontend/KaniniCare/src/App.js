import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((item) => (
            <Route path={item.pathName} element={item.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
