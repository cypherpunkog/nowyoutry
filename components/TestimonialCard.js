export default function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-lg italic mb-4">&quot;{quote}&quot;</p>
      <p className="text-right font-semibold">- {author}</p>
    </div>
  );
}