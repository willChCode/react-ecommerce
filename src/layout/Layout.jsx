import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
