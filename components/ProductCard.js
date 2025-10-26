export default function ProductCard({ image, title, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a
          href={link}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-2 inline-block hover:bg-blue-700"
          onClick={() => {
            window.gtag('event', 'click', {
              event_category: 'Product',
              event_label: `View ${title}`,
            });
          }}
        >
          Shop on eBay
        </a>
      </div>
    </div>
  );
}