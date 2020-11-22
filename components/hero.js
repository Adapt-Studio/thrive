import GhostBtn from "./ghostbtn";
export default function Hero() {
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly items-center">
      <div className="flex justify-evenly items-center space-x-4">
        <img
          className="w-32 h-32"
          src="/delivery/thrive-collect.png"
          alt="Thrive Collect"
        />
        <img
          className="w-32 h-32"
          src="/delivery/deliveroo.png"
          alt="Deliveroo Logo"
        />
        <img className="w-32 h-32" src="/delivery/uber.png" alt="Uber Logo" />
      </div>
      <GhostBtn text="View Our Menu" url="#" />
    </div>
  );
}
