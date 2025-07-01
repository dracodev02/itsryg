import Logo from "./logo";
import Navigator from "./navigator";

const Header = () => {
  return (
    <div className="max-w-[1440px] px-9 max-md:px-2 mx-auto py-2 flex justify-between fixed top-0 z-10 backdrop-blur-lg w-full left-1/2 -translate-x-1/2">
      <Logo />
      <Navigator />
    </div>
  );
};

export default Header;
