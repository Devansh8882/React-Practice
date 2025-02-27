import { Outlet , NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <NavLink to="/" style={({isActive}) => ({color : isActive ? "red" : "orange"})} >sarv </NavLink> 
      <NavLink to="/foot" style={({ isActive }) => ({color: isActive ? 'red' : 'green',})} >foot </NavLink>
      <NavLink to="/header" style={({ isActive }) => ({color: isActive ? 'red' : 'blue',})} >head </NavLink>
      <div>Layout is rendering</div>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
