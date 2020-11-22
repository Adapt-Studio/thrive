import Layout from "../components/layout";
import Hero from "../components/hero";
import Gallery from "../components/gallery";
import Button from "../components/button";
import Map from "../components/map";
import Form from "../components/form";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <section id="food" className="w-screen h-screen bg-green-100 pt-8">
        <img
          className="w-32 h-24 mx-auto"
          src="/icons/open-blk.png"
          alt="Open Sign"
        />
        <div className="w-5/6 h-5/6 flex justify-center space-x-16 items-center mx-auto font-thin">
          <Gallery />
          <div className="flex flex-col space-y-6 w-96 leading-relaxed text-xl text-white font-body">
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
        className="w-screen h-screen flex flex-col justify-evenly items-center relative"
      >
        <h1 className="text-5xl">Feeling Hungry Yet?</h1>
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl">We offer delivery + click and collect!</h2>
          <Button text="Order Here" url="#" />
        </div>
        <img
          className="w-36 self-end mr-32 -my-16"
          src="/icons/coffee-blk.png"
          alt="Coffee Icon"
        />
        <div className="flex items-center space-x-3">
          <img
            className="w-32 h-32"
            src="/delivery/deliveroo-sm.png"
            alt="Deliveroo"
          />
          <img className="w-32 h-32" src="/delivery/uber-sm.png" alt="Uber" />
        </div>
      </section>
      <section
        id="times"
        className="w-screen h-screen bg-green-100 text-white dark:text-black flex flex-col justify-evenly items-center"
      >
        <div className="flex flex-col items-center space-y-4 font-body font-thin">
          <h1 className="text-5xl">Our Opening Times</h1>
          <p>(During Covid-19)</p>
        </div>
        <ul className="text-lg space-y-4 text-center font-thin font-body">
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
        className="w-screen h-screen flex flex-col justify-evenly items-center bg-green-100 text-white"
      >
        <h1 className="text-5xl">Contact Us</h1>
        <Form />
      </section>
    </Layout>
  );
}
