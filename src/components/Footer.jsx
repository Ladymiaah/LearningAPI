import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="py-4 mt-32">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
                AIKI
                <div className="text-lg font-semibold">
                    2025 MyWebsite
                </div>

                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-blue-400">
                        <FaFacebook className="fab fa-facebook"></FaFacebook>
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaInstagram className="fab fa-instagram"></FaInstagram>
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <FaTwitter className="fab fa-twitter"></FaTwitter>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;