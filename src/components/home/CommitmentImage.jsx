import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT } from '../../lib/motion-presets'

function CommitmentImage({ image, alt = '', className, containerClassName, fullWidth = false }) {
  const reduce = useReducedMotion()

  if (!image) return null

  return (
    <section className={clsx('bg-white', className)}>
      <div
        className={clsx(
          'w-full pb-12 sm:pb-16 md:pb-20',
          fullWidth ? 'max-w-none' : 'mx-auto max-w-[1920px]',
          containerClassName,
        )}
      >
        <div className="group aspect-1920/720 w-full overflow-hidden">
          <motion.img
            src={image}
            alt={alt}
            className="size-full object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            initial={reduce ? false : { opacity: 0, scale: 1.05 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : 0.85, ease: EASE_OUT }}
          />
        </div>
      </div>
    </section>
  )
}

export default CommitmentImage
