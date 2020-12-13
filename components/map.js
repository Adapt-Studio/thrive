export default function Map() {
  return (
    <section className="flex items-center justify-center w-screen h-screen">
      <iframe
        width="85%"
        height="80%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Cafe%20Thrive&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </section>
  )
}
