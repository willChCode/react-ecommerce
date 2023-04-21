import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar/SideBar';
import Menu from '../components/Menu/Menu';

export default function Layout() {
  return (
    <main>
      <NavBar />
      <SideBar />
      <Menu />
      <Outlet />
      <Footer />
    </main>
  );
}
