import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-2xl font-black tracking-tight"
            >
              Step<span className="text-red-500">X</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              Discover premium sneakers and iconic footwear designed to take
              your everyday style to the next level. Find your perfect pair
              and step into something better.
            </p>

            <Link
              to="/footwears"
              className="mt-6 inline-flex rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Shop Footwear
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/footwears"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Footwears
                </Link>
              </li>

              <li>
                <a
                  href="#featured"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Featured Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Customer Care
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  Returns & Exchanges
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-red-500"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-500">
            © {new Date().getFullYear()} StepX. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition hover:text-red-500"
            >
              Facebook
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition hover:text-red-500"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition hover:text-red-500"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
