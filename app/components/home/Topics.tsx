import TopicsColumn from "@/app/ui/components/TopicsColumn";
export default function Topics() {
  return (
    <section className="flex flex-col gap-y-10 py-5 border-t border-t-gray-200">
      <h2 className="text-xl">Explore curated Topics</h2>
      <div
        role="grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5"
      >
        <TopicsColumn bg="bg-[#ffecd5]" label="Future" />
        <TopicsColumn bg="bg-[#ffa5b1]" label="Innovation" />
        <TopicsColumn bg="bg-[#98f5af]" label="Health" />
      </div>
    </section>
  );
}
