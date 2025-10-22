import Image from "next/image";

export default function ArticleCard() {
  return (
    <div role="gridcell">
      <Image
        width={100}
        height={100}
        className="w-full rounded-2xl"
        src="/assets/images/cs.jpg"
        alt="image"
      />
      <div className="pt-2">
        <h3 className="text-xl font-semibold mb-1.5">
          Personal branding becomes a new literacy for individuals
        </h3>
        <div className="text-lg text-gray-500">Brenda Reichel</div>
        <div className="text-lg text-gray-500">Sep 13, 2025 in #Lifestyle</div>
      </div>
    </div>
  );
}
