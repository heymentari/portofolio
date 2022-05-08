import { useState, useEffect} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    });
  
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setSticky(true);
      } else if (window.scrollY < 90) {
        setSticky(false);
      }
    }
    
 return(
     <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
         <div className="container">
             <div className="flex-item-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-lg text-primary block py-6">suryaningmentari</a>
                </div>
                <div className="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4${sticky ? ' sticky' : ''}`} >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
             </div>
         </div>
     </header>
 )
}

export default Header