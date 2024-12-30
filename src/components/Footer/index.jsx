import Logo  from "../../assets/images/footer-logo.png";
import FaceBook  from "../../assets/images/_Facebook.svg";
import Google  from "../../assets/images/_Google.svg";
import Instagram  from "../../assets/images/_Instagram.svg";


export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-10 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2 w-full">
                    <img src={Logo} alt="Logo" className="mb-5 w-36" />
                    <ul className="flex flex-col md:flex-row gap-4">
                        <li><a href="#home" className="hover:text-primary">Home</a></li>
                        <li><a href="#services" className="hover:text-primary">Services</a></li>
                        <li><a href="#about" className="hover:text-primary">About Us</a></li>
                        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                <div className="md:w-1/2 w-full">
                    <p className="mb-4">
                        Subscribe to our newsletter to receive the latest updates, news, and offers!
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-md text-black"
                        />
                        <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

        
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-50 pt-6">
                <ul className="flex gap-6 mb-4 md:mb-0">
                    <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
                </ul>

                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FaceBook} alt="" />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <img src={Google} alt="" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    )
}