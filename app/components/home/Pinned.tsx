import { FaBookmark } from "react-icons/fa";

export default function Pinned() {
  return (
    <section className="flex flex-col gap-y-6 py-5 border-t border-t-gray-200">
      <h2 className="text-xl">Pinned area</h2>
      <div className="bg-[#f4f2f1] px-8 py-10 rounded-4xl flex items-center justify-center">
        <p className="font-normal text-[27.5px]">
          Click{" "}
          <span className="text-2xl bg-[#e5e5e5] py-2 px-4 rounded-4xl">
            Pin this article <FaBookmark size={20} className="inline-block" />
          </span>{" "}
          on any article and your favorites will appear here
        </p>
      </div>
    </section>
  );
}
