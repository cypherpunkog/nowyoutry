export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; 2025 NowYouTry. All rights reserved.</p>
      <div className="mt-2">
        <a href="/privacy-policy" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
        <a href="/terms-of-service" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
        <a href="mailto:now@gmx.co.uk" className="text-blue-400 hover:underline mx-2">Contact</a>
      </div>
    </footer>
  );
}