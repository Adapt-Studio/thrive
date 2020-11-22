export default function footer() {
  return (
    <footer className="w-screen flex flex-col justify-between font-body font-thin items-end py-4">
      <div className="w-screen flex justify-between px-8">
        <div className="flex flex-col justify-start">
          <p>Cafe Thrive</p>
          <p>18 Hannover Buildings</p>
          <p>SO14 1JK</p>
        </div>
        <div className="flex flex-col justify-end text-right">
          <p>Call Us: 023 80 338 708</p>
          <p>Follow Us:</p>
          <div className="flex space-x-3 items-center"></div>
        </div>
      </div>
      <div className="w-screen text-center">
        <a rel="noopener noreferrer" href="https://adaptstudio.co.uk">
          &copy;adaptstudio
        </a>
      </div>
    </footer>
  );
}
