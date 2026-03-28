import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import arrowRight from '../../assets/images/arrow_right.svg'
import { EASE_OUT } from '../../lib/motion-presets'
import { Reveal } from '../motion/Reveal'

const defaultTestimonials = [
  {
    quote:
      "Reliable everyday drinking water. We've been ordering this water for our family and it has become part of our daily routine. The bottles are clean, the water tastes pure, and delivery is always on time.",
    author: 'Business Customer',
  },
  {
    quote:
      'Our office switched to IONIX for meetings and daily hydration. The team appreciates the consistent quality and the responsive support whenever we adjust our delivery schedule.',
    author: 'Operations Lead',
  },
]

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5 sm:gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="size-4 shrink-0 text-[#EAB308] sm:size-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function CustomerTestimonialsSection({
  title = 'what our customers say',
  testimonials = defaultTestimonials,
  headingDecorationImage,
  headingDecorationImageAlt = '',
  stripBackgroundImage,
  quoteLeftImage,
  quoteLeftImageAlt = '',
  quoteRightImage,
  quoteRightImageAlt = '',
  className,
}) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const active = testimonials[index] ?? testimonials[0]

  const goNext = useCallback(() => {
    if (total <= 1) return
    setIndex((i) => (i + 1) % total)
  }, [total])

  const useQuoteImages = Boolean(quoteLeftImage || quoteRightImage)
  const showCssQuotes = !useQuoteImages && !stripBackgroundImage

  return (
    <section className={clsx('relative overflow-x-hidden bg-white pb-12 sm:pb-16 md:pb-20 xl:pb-28', className)}>
      {headingDecorationImage ? (
        <div
          className="pointer-events-none absolute right-0 top-0 z-0 h-[min(220px,48vw)] w-[min(72vw,420px)] max-w-none translate-x-[12%] sm:h-[min(300px,55vw)] sm:w-[min(75vw,520px)] sm:translate-x-[8%] md:top-2 md:h-[min(380px,62vw)] md:w-[min(78vw,600px)] md:translate-x-[5%] lg:top-4 lg:h-[min(460px,70vh)] lg:w-[min(72vw,680px)] lg:translate-x-[3%] xl:h-[520px] xl:w-[720px] xl:translate-x-[4%] min-[1920px]:h-[520px] min-[1920px]:w-[720px] min-[1920px]:translate-x-[4%]"
          aria-hidden
        >
          <img
            src={headingDecorationImage}
            alt={headingDecorationImageAlt}
            className="h-full w-full max-w-none object-contain object-right"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <>
          <div
            className="pointer-events-none absolute -right-[18%] top-0 h-[min(520px,85vw)] w-[min(95vw,920px)] rounded-[50%] bg-linear-to-bl from-[#FFE5D9]/95 via-[#FFD4C4]/60 to-transparent blur-2xl md:-right-[12%] md:top-8"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-[8%] top-24 h-[min(380px,70vw)] w-[min(70vw,640px)] rounded-[50%] bg-(--color-brand)/15"
            aria-hidden
          />
        </>
      )}

      <Reveal className="relative z-10 mx-auto w-full max-w-[1920px] px-4 text-center sm:px-6 md:px-10 xl:px-12" y={22}>
        <h2 className="mx-auto max-w-[min(100%,913px)] px-1 py-3 font-brand text-[clamp(2rem,7.2vw+0.25rem,140px)] leading-[1.08] text-(--color-primary) sm:py-4 md:leading-[1.06] 2xl:leading-[120px] 2xl:py-5">
          {title}
        </h2>
      </Reveal>

      <div className="relative z-10 mt-10 sm:mt-14 md:mt-20 xl:mt-[100px]">
        <div className="mx-auto w-full max-w-[1850px] px-4 sm:px-6 md:px-10 xl:px-12">
          <div className="relative w-full overflow-hidden py-6 sm:py-8 md:min-h-0 md:py-10 xl:min-h-[min(480px,55vh)] xl:rounded-[36px] xl:py-14 2xl:py-16">
            {showCssQuotes ? (
              <>
                <span
                  className="pointer-events-none absolute -left-2 bottom-0 top-0 z-1 select-none font-serif text-[clamp(8rem,28vw,22rem)] leading-none text-(--color-brand)/[0.14]"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <span
                  className="pointer-events-none absolute -right-2 bottom-0 top-0 z-1 select-none font-serif text-[clamp(8rem,28vw,22rem)] leading-none text-(--color-brand)/[0.14]"
                  aria-hidden
                >
                  &rdquo;
                </span>
              </>
            ) : null}

            <div
              className={clsx(
                'relative z-20 mx-auto flex w-full max-w-[1200px] items-center justify-center px-0 ',
                useQuoteImages
                  ? 'flex-col sm:flex-row'
                  : 'flex-col items-center justify-center py-2',
              )}
            >
              {useQuoteImages && quoteLeftImage ? (
                <img
                  src={quoteLeftImage}
                  alt={quoteLeftImageAlt}
                  className="pointer-events-none order-1 h-[clamp(48px,14vw,200px)] w-auto max-w-[min(32vw,120px)] shrink-0 object-contain object-center sm:order-0 sm:max-w-none sm:h-[clamp(72px,16vw,228px)] md:h-[clamp(96px,18vw,228px)]"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}

              <motion.article
                className="relative order-2 w-full max-w-[650px] rounded-[20px] bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.07)] transition-[box-shadow,transform] duration-300 ease-out hover:shadow-[0_22px_55px_rgba(0,0,0,0.11)] sm:order-0 sm:rounded-[24px] sm:p-6 sm:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:shrink-0 sm:hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)] md:rounded-[28px] md:p-8 xl:p-10"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduce ? 0 : 0.5, ease: EASE_OUT }}
              >
                <StarRow />
                <div className="relative min-h-[120px] sm:min-h-[100px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={index}
                      initial={reduce ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -12 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: EASE_OUT }}
                    >
                      <blockquote className="mt-4 text-left text-sm font-normal leading-relaxed text-(--color-primary) sm:mt-5 sm:text-base md:text-lg md:leading-7">
                        <p>{active.quote}</p>
                      </blockquote>
                      <p className="mt-6 text-sm font-semibold text-(--color-primary) sm:mt-8 xl:mt-10 xl:text-base">
                        {active.author}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.button
                  type="button"
                  onClick={goNext}
                  className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-(--color-brand) shadow-md transition-[opacity,box-shadow,filter] duration-300 ease-out hover:cursor-pointer hover:opacity-95 hover:shadow-lg hover:brightness-105 sm:bottom-6 sm:right-6 sm:size-11 md:size-12 xl:bottom-8 xl:right-8 xl:size-8"
                  aria-label={total > 1 ? 'Next testimonial' : 'Read more'}
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                >
                  <img src={arrowRight} alt="" className="size-3.5 sm:size-4" width={16} height={16} />
                </motion.button>
              </motion.article>

              {useQuoteImages && quoteRightImage ? (
                <img
                  src={quoteRightImage}
                  alt={quoteRightImageAlt}
                  className="pointer-events-none order-3 h-[clamp(48px,14vw,200px)] w-auto max-w-[min(32vw,120px)] shrink-0 object-contain object-center sm:order-0 sm:max-w-none sm:h-[clamp(72px,16vw,228px)] md:h-[clamp(96px,18vw,228px)]"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonialsSection
