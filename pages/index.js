import Layout from "../components/layout"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import Button from "../components/button"
import Map from "../components/map"
import Form from "../components/form"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <section id="food" className="w-screen py-8 bg-green-100 md:h-screen">
        <img
          className="w-32 h-24 mx-auto mb-8 md:mb-0"
          src="/icons/open-blk.png"
          alt="Open Sign"
        />
        <div className="flex flex-col items-center justify-center w-5/6 mx-auto font-thin md:flex-row md:h-5/6 md:space-x-16">
          <Gallery />
          <div className="flex flex-col mt-8 text-xl leading-relaxed text-white space-y-6 md:w-11/12 md:w-96 font-body md:mt-0">
            <p>
              We’re a small business based in Southampton who believe good food
              shouldn’t cost the Earth.
            </p>

            <p>
              Our entire menu is plant based with plenty of gluten free and soy
              free options.
            </p>

            <p>
              All of our tea and coffee is Fairtrade, Organic and Rainforest
              Alliance Certified. We only use compostable, plant based take away
              cup and containers.
            </p>
          </div>
        </div>
      </section>
      <section
        id="order"
        className="relative flex flex-col items-center w-screen h-screen text-center justify-evenly md:text-left"
      >
        <h1 className="text-5xl">Feeling Hungry Yet?</h1>
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-2xl">We offer delivery + click and collect!</h2>
          <Button
            text="Order Here"
            url="https://goodeats.io/cafethrivesouthampton"
          />
        </div>
        <img
          id="coffee"
          className="self-end mr-32 md:-my-16 w-36"
          src="/icons/coffee-blk.png"
          alt="Coffee Icon"
        />
        <div className="flex items-center space-x-3">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://deliveroo.co.uk/menu/southampton/southampton-city-centre/thrive-to-go"
          >
            <img
              className="delivery"
              src="/delivery/deliveroo-sm.png"
              alt="Deliveroo"
            />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.ubereats.com/gb/portsmouth/food-delivery/cafe-thrive/ZfYxc2ObQamnhLKDsarq2A?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
          >
            <img className="delivery" src="/delivery/uber-sm.png" alt="Uber" />
          </a>
        </div>
      </section>
      <section
        id="times"
        className="flex flex-col items-center w-screen h-screen text-white bg-green-100 dark:text-black justify-evenly"
      >
        <div className="flex flex-col items-center font-thin space-y-4 font-body">
          <h1 className="text-5xl text-center">Our Opening Times</h1>
          <p>(During Covid-19)</p>
        </div>
        <ul className="text-lg font-thin text-center space-y-4 font-body">
          <li>Monday: 12:00pm to 8pm</li>
          <li>Tuesday: 12:00pm to 8pm</li>
          <li>Wednesday: 12:00pm to 8pm</li>
          <li>Thursday: 12:00pm to 8pm</li>
          <li>Friday: 12:00pm to 9pm</li>
          <li>Saturday: 11:00pm to 9pm</li>
          <li>Sunday: 11:00pm to 8pm</li>
        </ul>
      </section>
      <Map />
      <section
        id="contact"
        className="flex flex-col items-center w-screen h-screen text-white bg-green-100 justify-evenly"
      >
        <h1 className="text-5xl">Contact Us</h1>
        <Form />
      </section>
    </Layout>
  )
}
