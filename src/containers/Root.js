import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SubReddits from './SubReddits';

export default function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <aside>
        <SubReddits />
      </aside>
    </>
  );
}
