import Image from "next/image";
import { motion } from "motion/react";

export default function Tag({
  src = "",
  alt = "",
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
      whileHover={{ scale: 1.1, transition: { delay: 0 }, cursor: "pointer" }}
      transition={{
        delay: index ? index * 0.09 : 0,
      }}
      role="gridcell"
      className={`${bg} max-w-fit flex ${!src ? "rounded-4xl" : "rounded-lg"}`}
    >
      {src && (
        <Image
          width={80}
          height={80}
          src={src}
          alt={alt}
          className="rounded-lg"
        />
      )}
      <p
        className={`${textColor} text-center text-[clamp(15px, 5vw, 20px)] overflow-hidden font-medium py-5 ${
          src ? "pl-2 pr-6" : "pl-5 pr-5"
        }`}
        title={text}
      >
        {text}
      </p>
    </motion.div>
  );
}
