import { Route, Routes } from 'react-router-dom';

import Layout from './pages/layout';
import Timer from './pages/timer';

function App() {

  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Timer} />
      </Route>
    </Routes>
  );
}

export default App;
