import { Facebook, Twitter, Instagram, Mail } from "react-feather"
export default function footer() {
  return (
    <footer className="flex flex-col items-end justify-between w-screen py-4 font-thin font-body">
      <div className="flex flex-col items-center justify-center w-screen px-8 text-center md:items-start md:justify-between md:flex-row md:text-left">
        <div className="flex flex-col justify-start">
          <p>Cafe Thrive</p>
          <p>18 Hannover Buildings</p>
          <p>SO14 1JK</p>
        </div>
        <div className="flex flex-col mt-4 text-center md:text-right space-y-4 md:mt-0 md:space-y-1">
          <p>Call Us: 023 80 338 708</p>
          <p>Follow Us:</p>
          <div className="flex items-center justify-center md:justify-end space-x-3 md:-mt-0 -mt-2">
            <a href="https://www.facebook.com/cafethrive">
              <Facebook />
            </a>
            <a href="https://twitter.com/cafe_thrive">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/cafethrivesouthampton/">
              <Instagram />
            </a>
            <a href="mailto:contact@cafethrive.co.uk">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen mt-8 text-center md:mt-0">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://adaptstudio.co.uk"
        >
          &copy;adaptstudio
        </a>
      </div>
    </footer>
  )
}
