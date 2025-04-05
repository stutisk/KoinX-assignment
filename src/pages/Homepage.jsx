import { Home } from "../components/Home";
import { SideNavbar } from "../components/SideNavbar";

export const Homepage = () => {
  return (
    <div className="grid grid-cols-[1fr_min(940px,_100%)_1fr] px-24  ">
      <div></div>
      <div className="">
        {" "}
        <Home />
      </div>
      <div>
    
      </div>
    </div>
  );
};
