import { Navbar } from "../components/navbar";
import { SideNavbar } from "../components/SideNavbar";

export const Homepage = () => {
  return (
    <div className="grid grid-cols-[1fr_min(640px,_100%)_1fr] px-32">
      <div ></div>
      <div >    <Navbar /></div>
      <div ><SideNavbar/></div>
  
    </div>
  );
};
