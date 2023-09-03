import { Outlet } from 'react-router-dom';
import { LayoutContainer, OutletContainer, PathHeader } from '../styles';
import { useAppSelector } from '../app/hooks';

import AsideNavBar from '../components/asidenavbar';
import Header from '../components/header';




export default function Layout() {

  const { isMenuShown } = useAppSelector(state => state.setTheme);

  const findLocation = () => {
    switch (location.pathname) {
      case '/pomodoro': return 'Pomodoro';
      case '/stopwatch': return 'Cronômetro';
      case '/': return 'Temporizador';
    }
  }

  const path = findLocation();

  return (
    <LayoutContainer >
      <Header />
      {!isMenuShown && <PathHeader>{path}</PathHeader>}
      <AsideNavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
}
