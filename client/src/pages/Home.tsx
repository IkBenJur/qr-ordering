import { FC, Fragment } from "react";

interface homeProps {}

const Home: FC<homeProps> = ({}) => {
  return (
    <Fragment>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen bg-slate-500"
      >
        <ul>
          <li>Tables</li>
          <li>Orders</li>
          <li>Menu</li>
        </ul>
      </aside>
      <main></main>
    </Fragment>
  );
};

export default Home;
