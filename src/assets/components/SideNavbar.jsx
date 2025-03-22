export const SideNavbar = () => {
  return (
    <div>
      <ul className="text-xl font-bold  text-slate-300 mt-10 text-end ">
        <li className="leading-8 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">
          About Me
        </li>
        <li className="leading-8 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">Experience</li>
        <li className="leading-8 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="leading-8 transition-colors duration-300 hover:text-yellow-400 cursor-pointer">Contact </li>
      </ul>
    </div>
  );
};
