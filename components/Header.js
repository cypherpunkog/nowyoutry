// components/Header.js
export default function Header() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 64; // Approximate header height (adjust if different)
      const offset = element.getBoundingClientRect().top + window.scrollY - headerHeight - 20; // 20px extra space
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-10 w-full">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="hover:text-gray-300" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="/images/logo.png" alt="NowYouTry Logo" className="h-10 w-auto" />
        </a>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
          <li><a href="#about" className="hover:text-gray-300" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
          <li><a href="#products" className="hover:text-gray-300" onClick={(e) => handleScroll(e, 'products')}>Products</a></li>
          <li><a href="#contacts" className="hover:text-gray-300" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}