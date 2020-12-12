import GalleryContent from "./gallerycontent"
export default function Gallery() {
  return (
    <div className="container">
      <GalleryContent />
      <style jsx>{`
        .container {
          width: 500px;
          height: 500px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2.74416px 2.74416px rgba(0, 0, 0, 0.0274351),
            0 5.48831px 5.48831px rgba(0, 0, 0, 0.0400741),
            0 13.7208px 10.9766px rgba(0, 0, 0, 0.0499982),
            0 20.5812px 20.5812px rgba(0, 0, 0, 0.0596004),
            1 41.1623px 41.1623px rgba(0, 0, 0, 0.0709366),
            0 96.0454px 89.1851px rgba(0, 0, 0, 0.09);
        }
      `}</style>
    </div>
  )
}
