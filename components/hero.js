import GhostBtn from "./ghostbtn";
export default function Hero() {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-evenly">
      <div className="flex items-center justify-evenly space-x-4">
        <a
          rel="noreferrer noopener"
          href="https://goodeats.io/cafethrivesouthampton"
        >
          <img
            className="w-32 h-32"
            src="/delivery/thrive-collect.png"
            alt="Thrive Collect"
          />
        </a>
        <a
          rel="noopener noreferrer" target="_blank"
          href="https://deliveroo.co.uk/menu/southampton/southampton-city-centre/thrive-to-go"
        >
          <img
            className="w-32 h-32"
            src="/delivery/deliveroo.png"
            alt="Deliveroo Logo"
          />
        </a>
        <a
          rel="noopener noreferrer" target="_blank"
          href="https://www.ubereats.com/gb/portsmouth/food-delivery/cafe-thrive/ZfYxc2ObQamnhLKDsarq2A?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
        >
          <img className="w-32 h-32" src="/delivery/uber.png" alt="Uber Logo" />
        </a>
      </div>
      <GhostBtn text="View Our Menu" url="#" />
    </div>
  );
}
