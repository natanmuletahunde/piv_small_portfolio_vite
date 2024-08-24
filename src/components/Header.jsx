const Header = () => {
    return (
      <header className="bg-blue-900 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  