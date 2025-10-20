import Image from 'next/image';

export default function Tag({
  src = '',
  alt = '',
  text,
  bg,
  textColor,
}: {
  src?: string;
  alt?: string;
  text: string;
  bg: string;
  textColor: string;
}) {
  return (
    <div
      role="gridcell"
      className={`${bg} max-w-fit flex ${!src ? 'rounded-4xl' : 'rounded-lg'}`}
    >
      {src && (
        <Image
          width={50}
          height={50}
          src={src}
          alt={alt}
          className="rounded-lg"
        />
      )}
      <p className={`${textColor} py-3 px-2`}>{text}</p>
    </div>
  );
}
