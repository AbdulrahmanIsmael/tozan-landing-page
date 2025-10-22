import Image from 'next/image';
import { motion } from 'motion/react';

export default function Tag({
  src = '',
  alt = '',
  text,
  bg,
  textColor,
  index = null,
}: {
  src?: string;
  alt?: string;
  text: string;
  bg: string;
  textColor: string;
  index?: number | null;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: index ? index * 0.09 : 0,
      }}
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
    </motion.div>
  );
}
