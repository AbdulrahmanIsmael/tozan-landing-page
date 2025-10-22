import ArticleCard from "@/app/ui/components/ArticleCard";

export default function Mission() {
  return (
    <section role="grid" className="my-5 grid grid-cols-3 gap-x-15">
      <div className="pt-3 border-t border-t-gray-200 col-span-2">
        <h3>Welcome</h3>
        <p className="text-4xl mt-5 pb-16 leading-12">
          Our mission is to <strong>create a community</strong> that inspires,
          informs, and empowers its members. Through a diverse range of
          articles, we delve into the realms of health, design, and web-related
          subjects.
        </p>
      </div>

      <div className="bg-[url('@/public/assets/images/cs.jpg')] row-span-2">
        something
      </div>

      <div className="py-3 border-t border-t-gray-200 col-span-2">
        <h3>What's new</h3>
        <div role="grid">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
}
