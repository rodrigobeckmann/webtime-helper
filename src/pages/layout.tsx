import { Outlet } from 'react-router-dom';

import AsideNavBar from '../components/asidenavbar';
import Header from '../components/header';

import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <AsideNavBar />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </div>
  );
}
