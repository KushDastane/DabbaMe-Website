import { motion } from 'framer-motion';
import { IllustrationFrame } from './IllustrationFrame';

/**
 * StoryScene Component
 *
 * Renders an individual scene in the storybook timeline:
 * - Numbered gold circle badge (01, 02, 03…)
 * - Editorial serif title & compact sans-serif body
 * - Illustration clipped inside an organic watercolor blob shape
 * - Alternating desktop layout (image-left / text-right and vice versa)
 */
export function StoryScene({
  sceneNumber,
  imageSrc,
  imageAlt,
  title,
  paragraphs = [],
  reverse = false,
}) {
  const formattedNumber = String(sceneNumber).padStart(2, '0');
  // Cycle through different blob shapes per scene (offset by 1 since hero uses blob 0)
  const blobIndex = sceneNumber % 5;

  return (
    <section
      id={`scene-${sceneNumber}`}
      className="relative py-8 sm:py-12"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* ── ILLUSTRATION COL ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className={`w-full flex justify-center ${
              reverse
                ? 'md:order-2 md:col-span-6 md:justify-end'
                : 'md:order-1 md:col-span-6 md:justify-start'
            }`}
          >
            <IllustrationFrame
              src={imageSrc}
              alt={imageAlt}
              isHero={false}
            />
          </motion.div>

          {/* ── TEXT COL WITH NUMBERED BADGE ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex flex-col items-start text-left ${
              reverse
                ? 'md:order-1 md:col-span-6 md:pr-4'
                : 'md:order-2 md:col-span-6 md:pl-4'
            }`}
          >
            {/* Numbered circle badge */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-7 rounded-full border border-[#D49B00] bg-[#FFFBF2] text-[#B87F1B] font-mono font-bold text-xs flex items-center justify-center">
                {formattedNumber}
              </span>
            </div>

            {/* Editorial title */}
            <h2 className="font-editorial font-bold text-xl sm:text-2xl lg:text-[28px] text-[#2B231D] leading-tight mb-3">
              {title}
            </h2>

            {/* Body paragraphs */}
            <div className="font-sans text-sm sm:text-base text-[#5D554D] leading-relaxed space-y-2 max-w-sm">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
