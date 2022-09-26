import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './pages/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
