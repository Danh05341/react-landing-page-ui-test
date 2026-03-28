import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import communityGrowthBg from '../../assets/images/community_growth.png'
import arrowRight from '../../assets/images/arrow_right.svg'
import { Reveal } from '../motion/Reveal'

function CommunityGrowthSection({
  stats = [
    { value: '100+', label: 'Distribution Partners' },
    { value: '500+', label: 'Business Clients' },
    { value: '300+', label: 'Happy Customers' },
    { value: '500+', label: 'Bottles Delivered Daily' },
  ],
  title = 'Growing with Our Community',
  description = 'Every bottle of IONIX water is produced through a controlled purification system and carefully inspected before reaching our customers.',
  ctaLabel = 'Become a Distributor',
  heroBackgroundImage = communityGrowthBg,
  className,
}) {
  const reduce = useReducedMotion()
  const topRow = stats.slice(0, 2)
  const bottomRow = stats.slice(2, 4)

  return (
    <section className={clsx('mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 sm:pb-20 md:px-12', className)}>
      <div className="mx-auto w-full max-w-[1681px]">
        <div className="mx-auto flex w-full max-w-[1396px] flex-col gap-8 pt-6 sm:gap-12 sm:pt-8 md:gap-14">
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-16 sm:gap-y-8 sm:text-left md:gap-x-20 lg:gap-x-28">
            {topRow.map((item, i) => (
              <Reveal key={`${item.value}-${item.label}`} className="min-w-0 w-full sm:w-auto sm:text-left" y={18} delay={reduce ? 0 : i * 0.07} amount={0.12}>
                <p className="font-brand text-[clamp(2rem,9vw,2.25rem)] text-(--color-primary) sm:text-5xl md:text-6xl lg:text-7xl">{item.value}</p>
                <p className="mt-1.5 text-xs font-normal leading-snug text-(--color-primary) sm:mt-2 sm:text-sm md:text-base">{item.label}</p>
              </Reveal>
            ))}
          </div>
          <div className="flex w-full flex-col items-center gap-7 text-center sm:flex-row sm:items-start sm:justify-between sm:gap-y-0 sm:text-left">
            {bottomRow.map((item, i) => (
              <Reveal
                key={`${item.value}-${item.label}`}
                className="min-w-0 max-w-[min(100%,260px)] sm:max-w-[min(100%,280px)] sm:text-left md:max-w-none"
                y={18}
                delay={reduce ? 0 : 0.08 + i * 0.07}
                amount={0.12}
              >
                <p className="font-brand text-[clamp(2rem,9vw,2.25rem)] text-(--color-primary) sm:text-5xl md:text-6xl lg:text-7xl">{item.value}</p>
                <p className="mt-1.5 text-xs font-normal leading-snug text-(--color-primary) sm:mt-2 sm:text-sm md:text-base">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          className="relative isolate w-full max-w-[1681px] overflow-hidden max-md:aspect-auto md:aspect-1681/791"
          y={32}
          amount={0.2}
        >
          <img
            src={heroBackgroundImage}
            alt=""
            className="pointer-events-none absolute inset-0 size-full object-cover object-center max-md:object-[center_30%]"
            width={1681}
            height={791}
            loading="lazy"
            decoding="async"
          />
          <div className="relative z-10 flex min-h-0 flex-col items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-12 md:min-h-full md:px-12 md:py-16">
            <div className="mx-auto flex w-full max-w-[720px] flex-col items-center">
              <h2 className="max-w-full px-0 py-1 font-brand text-[clamp(1.625rem,6.5vw,3.25rem)] leading-[1.12] text-(--color-primary) sm:px-0 sm:py-2.5 md:max-w-[501px] lg:text-[68px] lg:leading-[68px]">
                {title}
              </h2>
              <p className="mt-1 max-w-full px-0 py-1 text-sm font-normal leading-relaxed text-(--color-primary) sm:mt-0 sm:max-w-[405px] sm:py-2.5">
                {description}
              </p>
              <motion.button
                type="button"
                className="mt-6 min-h-11 w-full max-w-[280px] rounded-full bg-(--color-brand) px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-[opacity,box-shadow,filter] duration-300 ease-out hover:cursor-pointer hover:opacity-95 hover:shadow-md hover:brightness-105 sm:mt-5 sm:w-auto sm:max-w-none sm:px-2.5 sm:py-2"
                whileHover={reduce ? undefined : { scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <img src={arrowRight} alt="" className="size-4 shrink-0" width={16} height={16} aria-hidden />
                  {ctaLabel}
                </span>
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default CommunityGrowthSection
