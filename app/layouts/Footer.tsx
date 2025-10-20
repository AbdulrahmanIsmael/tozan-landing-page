import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaBluesky, FaThreads } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-8 border-t border-t-gray-200 py-3">
      <div className="flex items-center flex-col sm:flex-row justify-between gap-y-3">
        <h1 className="text-4xl font-extrabold">tozan.</h1>
        <ul className="flex items-center gap-x-3">
          <li>
            <a href=".">
              <FaFacebook size={25} />
            </a>
          </li>
          <li>
            <a href=".">
              <FaXTwitter size={20} />
            </a>
          </li>
          <li>
            <a href=".">
              <FaThreads size={20} />
            </a>
          </li>
          <li>
            <a href=".">
              <FaTiktok size={25} />
            </a>
          </li>
          <li>
            <a href=".">
              <FaInstagram size={25} />
            </a>
          </li>
          <li>
            <a href=".">
              <FaBluesky size={25} />
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full flex flex-wrap justify-between gap-3 mx-auto">
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">About</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Style Guide
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Features
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Get Theme
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">Resources</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Demos
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Docs
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Showcase
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">Features</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Demo &apos;Classic&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Demo &apos;Dark&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Demo &apos;Sepia&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Demo &apos;Vibe&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              404
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Search
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">Members</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Plans &apos;Focus&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Plans &apos;Choice&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Plans &apos;Cards&apos;
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Sign in
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Sign up
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Portal
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">Archive</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Tags
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Authors
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Featured
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-black text-lg mb-2">Contact</span>
          <span>
            <a href="." className="text-[16px] font-normal">
              Contact
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              All themes
            </a>
          </span>
          <span>
            <a href="." className="text-[16px] font-normal">
              fueko.net
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
