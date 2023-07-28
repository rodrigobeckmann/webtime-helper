import { Outlet } from 'react-router-dom';
import { LayoutContainer, OutletContainer } from '../styles';

import AsideNavBar from '../components/asidenavbar';
import AdSense from '../components/adSense';



export default function Layout() {
  return (
    <LayoutContainer>
      <AsideNavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <AdSense />
    </LayoutContainer>
  );
}
