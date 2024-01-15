import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <aside>
        <h1>Something</h1>
      </aside>
    </>
  );
}
