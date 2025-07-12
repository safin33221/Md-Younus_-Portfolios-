
import { Link } from 'react-scroll';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-gray-500 mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1400px] mx-auto hidden">
        <p className="text-3xl text-gray-100 ">DM Younus </p>
        <ul className="flex gap-4 text-gray-500 text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1400px] mx-auto text-center sm:text-right mt-2 pb-12 text-sm text-gray-500">
        © {new Date().getFullYear()} DM Younus | All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer;