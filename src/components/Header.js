const Header = () => (
    <header className="p-4 bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Full-Stack Task</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;