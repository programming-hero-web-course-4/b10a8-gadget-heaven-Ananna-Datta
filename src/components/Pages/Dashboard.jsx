import { Link, Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="gap-4 mt-10 text-center items-center">
        <div className="bg-[#9538E2] text-center text-white text-2xl mb-11 pb-11 pt-12">
          <h1>Dashboard</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the <br /> coolest accessories, we have
            it all!
          </p>
          {/* Use NavLink for active link styling */}
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "border rounded-full mt-5 px-5 mr-5 bg-white text-[#9538E2]"
                : "border rounded-full mt-5 px-5 mr-5 bg-[#9538E2] text-white"
            }
          >
            Card
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              isActive
                ? "border rounded-full mt-5 px-5 mr-5 bg-white text-[#9538E2]"
                : "border rounded-full mt-5 px-5 mr-5 bg-[#9538E2] text-white"
            }
          >
            Wishlist
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
