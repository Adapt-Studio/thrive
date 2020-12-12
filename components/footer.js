import { Facebook, Twitter, Instagram, Mail } from "react-feather"
export default function footer() {
  return (
    <footer className="flex flex-col items-end justify-between w-screen py-4 font-thin font-body">
      <div className="flex justify-between w-screen px-8">
        <div className="flex flex-col justify-start">
          <p>Cafe Thrive</p>
          <p>18 Hannover Buildings</p>
          <p>SO14 1JK</p>
        </div>
        <div className="flex flex-col text-right space-y-1">
          <p>Call Us: 023 80 338 708</p>
          <p>Follow Us:</p>
          <div className="flex items-center justify-end space-x-3">
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
      <div className="w-screen text-center">
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
