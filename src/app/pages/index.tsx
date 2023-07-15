import { Outlet } from 'react-router-dom';
import Header from '../../libs/components/header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
