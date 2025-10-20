import Tag from '@/app/ui/components/Tag';
import { tags } from '@/app/lib/placeholder-data';

export default function Showcase() {
  return (
    <section className="py-6 flex flex-col gap-y-10">
      <div role="heading" className="text-8xl font-semibold">
        Your journey is here.
      </div>
      <div
        role="grid"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
      >
        {tags.map((tag) => (
          <Tag {...tag} />
        ))}
      </div>
    </section>
  );
}
