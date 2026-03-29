import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { Stagger, StaggerItem } from '../motion/Reveal'

function IonixHeadingMark({ className }) {
  return (
    <h2
      className={clsx(
        'text-right font-brand text-4xl leading-tight text-(--color-primary) md:text-5xl lg:text-[56px] lg:leading-[1.1]',
        className,
      )}
    >
      Why{' '}
      <span className="inline-flex items-baseline gap-0">
        I
        <span
          className="relative mx-0.5 inline-flex h-[0.72em] w-[0.72em] translate-y-[0.08em] items-center justify-center rounded-full bg-(--color-brand) align-middle"
          aria-hidden
        >
          <span className="absolute inset-[22%] rounded-full border-[0.12em] border-white" />
        </span>
        NIX?
      </span>
    </h2>
  )
}

function WhyIonixSection({
  cards,
  featureImage,
  featureImageAlt = '',
  ctaLabel = 'WHY CHOOSE US',
  className,
}) {
  const reduce = useReducedMotion()

  return (
    <section className={clsx('mx-auto w-full max-w-[1777px] px-4 pb-20 sm:px-6 md:px-10 lg:px-[121px]', className)}>
      <Stagger
        as="div"
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-3"
        stagger={0.1}
        amount={0.12}
      >
        {cards.map((card, index) => (
          <StaggerItem
            as="article"
            key={index}
            className={clsx(
              'relative flex min-h-[200px] flex-col overflow-hidden rounded-[24px] shadow-none transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_18px_45px_rgba(14,15,20,0.12)] lg:min-h-0',
              'lg:col-start-1',
              index === 0 && 'lg:row-start-1',
              index === 1 && 'lg:row-start-2',
              index === 2 && 'lg:row-start-3',
              card.className,
            )}
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          >
            {card.background != null ? (
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] *:size-full">
                {card.background}
              </div>
            ) : null}
            <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-between gap-8 p-6 md:p-8 lg:min-h-0">
              <p
                className={clsx(
                  'max-w-[min(100%,292px)] self-end text-right text-2xl font-bold uppercase leading-snug sm:text-3xl lg:text-2xl',
                  card.titleClassName,
                )}
              >
                {card.title}
              </p>
              <p
                className={clsx(
                  'max-w-[min(100%,227px)] text-left text-sm font-medium leading-5 p-2.5',
                  card.descriptionClassName,
                )}
              >
                {card.description}
              </p>
            </div>
          </StaggerItem>
        ))}

        <StaggerItem
          as="div"
          className="group/feature relative min-h-[320px] overflow-hidden rounded-[24px] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:min-h-0"
        >
          <img
            src={featureImage}
            alt={featureImageAlt}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover/feature:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" aria-hidden />
          <div className="relative z-10 flex h-full flex-col items-end gap-6 p-6 md:p-8 lg:p-10">
            <IonixHeadingMark />
            <motion.button
              type="button"
              className="rounded-full border-2 border-(--color-primary) bg-white/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-(--color-primary) backdrop-blur-sm transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white hover:shadow-md"
              whileHover={reduce ? undefined : { scale: 1.04 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              {ctaLabel}
            </motion.button>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  )
}

export default WhyIonixSection
