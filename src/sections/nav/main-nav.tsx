import { useState } from "react";
import ChipButton from "../../components/ChipButton";

export default function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed z-50 text-white w-full py-4 shadow-[0px_1px_0px_0px_#FFFFFF40] bg-opacity-30 bg-black">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className=" font-bold ml-5 ">
                    <img src={"./assets/images/logo/thalia-logo-1.png"} alt="Logo" className=" w-[220px] hidden md:block " />

                    <img src={"./assets/images/logo/thalia-logo-1-mini.png"} alt="Logo" className="md:hidden" />
                </div>

                {/* Navigation Links */}
                <div className={`md:flex md:space-x-8 ${isOpen ? "block p-7 " : "hidden"} absolute md:static top-[100%] left-0 w-full md:w-auto  bg-opacity-90 bg-black md:bg-transparent text-center md:text-left`}>
                    <a href="#game-industry" className="block md:inline-block hover:text-yellow-green py-2 md:py-0">Game Industry</a>
                    <a href="#blockchain" className="block md:inline-block hover:text-yellow-green py-2 md:py-0">Blockchain</a>
                    <a href="#branding" className="block md:inline-block hover:text-yellow-green py-2 md:py-0">Branding</a>
                    <a href="#about-us" className="block md:inline-block hover:text-yellow-green py-2 md:py-0">About us</a>
                </div>

                <div className="flex-center gap-5">
                    <ChipButton title="Contact" pathIcon="./assets/images/icon/contact-black.png" />

                    {/* Hamburger Icon */}
                    <div className="md:hidden mr-5 flex-center  ">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                            </svg>
                        </button>
                    </div>


                </div>


            </div>

        </nav>
    );
}
