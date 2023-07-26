import { Route, Routes } from 'react-router-dom';
import { analytics } from './firebase';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../src/styles'
import { RootState } from './app/store';
import { useSelector } from 'react-redux';

import Layout from './pages/layout';
import Timer from './pages/timer';
import StopWatch from './pages/stopwatch';

function App() {

  const { isDarkMode } = useSelector((state: RootState) => state.setTheme);



  useEffect(() => {
    analytics.app.automaticDataCollectionEnabled = true;
  }, [])

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Timer} />
          <Route path="stopwatch" Component={StopWatch} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
