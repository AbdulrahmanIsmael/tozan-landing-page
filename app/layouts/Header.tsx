import ArrowDownIcon from '@/app/ui/svgs/ArrowDown';
import SparklesIcon from '@/app/ui/svgs/Sparkles';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3">
      <h1 className="text-4xl font-extrabold">tozan.</h1>
      <nav className="flex items-center gap-x-3.5">
        <ul className="flex items-center gap-x-6">
          <li className="cursor-pointer flex items-center gap-x-0.5">
            <span>Members</span>
            <ArrowDownIcon />
          </li>
          <li className="cursor-pointer flex items-center gap-x-0.5">
            <span>Archive</span>
            <ArrowDownIcon />
          </li>
          <li className="cursor-pointer flex items-center gap-x-0.5">
            <span>Resources</span>
            <ArrowDownIcon />
          </li>
          <li className="cursor-pointer flex items-center gap-x-1">
            <span>Top authors</span>
            <SparklesIcon />
            <ArrowDownIcon />
          </li>
        </ul>
        <a href=".">Get Theme</a>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="py-1.5 bg-gray-50 w-30 focus:outline-0 rounded-4xl placeholder:text-center"
        />
        <button
          type="button"
          className="px-6 py-1 rounded-4xl bg-[#D4FF00] text-lg"
        >
          Join
        </button>
      </nav>
    </header>
  );
}
