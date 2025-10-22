'use client';
import Tag from '@/app/ui/components/Tag';
import { tags } from '@/app/lib/placeholder-data';
import { motion, stagger } from 'motion/react';

export default function Showcase() {
  const text = 'Your journey is here';
  const textInArray = text.split('');
  return (
    <section className="py-10 flex flex-col gap-y-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            transition: {
              delayChildren: stagger(0.05),
            },
          },
          visible: {
            transition: {
              delayChildren: stagger(0.05),
            },
          },
        }}
        role="heading"
        className="text-5xl md:text-8xl max-md:text-center font-semibold"
      >
        {textInArray.map((l, i) =>
          l === ' ' ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{ display: 'inline-block' }}
            >
              {l}
            </motion.span>
          )
        )}
      </motion.div>
      <div
        role="grid"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
      >
        {tags.map((tag, index) => (
          <Tag {...tag} index={index} />
        ))}
      </div>
    </section>
  );
}
