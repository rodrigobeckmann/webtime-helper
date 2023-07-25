import { Route, Routes } from 'react-router-dom';
import { analytics } from './firebase';
import { useEffect } from 'react';

import Layout from './pages/layout';
import Timer from './pages/timer';
import StopWatch from './pages/stopwatch';

function App() {

  useEffect(() => {
    analytics.app.automaticDataCollectionEnabled = true;
    console.log(analytics)
  }, [])

  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Timer} />
        <Route path="stopwatch" Component={StopWatch} />
      </Route>
    </Routes>
  );
}

export default App;
