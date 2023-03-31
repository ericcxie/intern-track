import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { NavBar, BigSidebar, SmallSidebar } from "../../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <NavBar />
          <div className="div dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
