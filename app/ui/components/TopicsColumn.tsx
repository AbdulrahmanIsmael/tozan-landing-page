import TopicCard from "./TopicCard";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function TopicsColumn({
  bg = "bg-initial",
  label,
}: {
  bg: string;
  label: string;
}) {
  return (
    <div
      className={`${bg} flex flex-col items-center gap-y-4 justify-between p-4 rounded-4xl w-full`}
    >
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <a
        className="hover:underline font-normal text-[22px] flex items-center gap-x-1"
        href="."
      >
        See all <strong>#{label}</strong>
        <IoIosArrowRoundForward size={25} />
      </a>
    </div>
  );
}
