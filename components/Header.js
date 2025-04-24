export default function Header() {
  return (
    <header className="bg-red-600 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <span className="mr-4">📞 +961 81 708 706</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mr-4">
            <i className="fab fa-tiktok"></i>
          </a>
          <span>EN | AR</span>
        </div>
      </div>
    </header>
  );
}
