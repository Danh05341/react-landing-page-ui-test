import { motion, useReducedMotion } from 'motion/react'
import modernIonBg from '../../assets/images/modern_ion_bg.png'
import modernIonForeground from '../../assets/images/modern_ion_foreground.png'
import { EASE_OUT } from '../../lib/motion-presets'
import { Reveal } from '../motion/Reveal'

function ModernIonSection() {
  const reduce = useReducedMotion()

  const annotations = [
    {
      label: '(2) Advanced Purification',
      className: 'left-[13%] top-[-29%] whitespace-nowrap text-(--color-brand)',
      align: 'text-left',
    },
    {
      label: '(3) Ion Technology Treatment',
      className: 'right-[13%] top-[-29%] whitespace-nowrap text-(--color-brand)',
      align: 'text-right',
    },
    {
      label: '(1) Initial Filtration',
      className: 'left-[6%] top-[-7%] whitespace-nowrap text-(--color-primary)',
      align: 'text-left',
    },
    {
      label: '(4) Quality Assurance',
      className: 'right-[6%] top-[-7%] whitespace-nowrap text-(--color-primary)',
      align: 'text-right',
    },
  ]
  return (
    <section className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-14 lg:pb-24">
      <Reveal className="mx-auto w-full max-w-[715px] px-4 text-center sm:px-6" y={20}>
        <h2 className="font-brand text-[clamp(1.75rem,5.5vw,2.75rem)] leading-[1.15] text-(--color-primary) sm:text-[clamp(2rem,4.5vw,3.25rem)] md:text-[clamp(2.5rem,4vw,4rem)] lg:text-[80px] lg:leading-[98px]">
          Modern Ion Purification System
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 w-full max-w-[1920px] sm:mt-16 md:mt-24 lg:mt-55">
        <ul className="relative z-20 mb-5 grid grid-cols-1 gap-3 px-4 text-center sm:mb-6 sm:grid-cols-2 sm:gap-4 sm:px-6 md:mb-10 lg:hidden" aria-label="Purification steps">
          {annotations.map((annotation) => (
            <li
              key={annotation.label}
              className={`text-xs font-bold sm:text-sm ${annotation.className.includes('text-(--color-brand)') ? 'text-(--color-brand)' : 'text-(--color-primary)'}`}
            >
              {annotation.label}
            </li>
          ))}
        </ul>

        <motion.div
          className="group/ion relative z-10 aspect-1920/766 min-h-[clamp(300px,48vw,880px)] w-full max-w-full overflow-visible bg-cover bg-center bg-no-repeat transition-[filter] duration-500 ease-out hover:brightness-[1.02]"
          style={{ backgroundImage: `url(${modernIonBg})` }}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE_OUT }}
        >
          <div className="relative h-full w-full overflow-visible">
            <div className="absolute inset-0 z-10 flex items-end justify-center px-1 sm:px-2">
              <motion.div
                className="h-[clamp(260px,66vw,987px)] w-full max-w-[min(100%,1480px)] bg-cover bg-top bg-no-repeat transition-transform duration-700 ease-out will-change-transform group-hover/ion:scale-[1.015] sm:h-[clamp(320px,56vw,987px)] sm:bg-center md:h-[clamp(300px,46vw,987px)] lg:h-[clamp(360px,50vw,987px)] lg:w-[clamp(640px,77vw,1480px)]"
                style={{ backgroundImage: `url(${modernIonForeground})` }}
                initial={reduce ? false : { opacity: 0, y: 36 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduce ? 0 : 0.75, ease: EASE_OUT, delay: reduce ? 0 : 0.12 }}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 overflow-visible max-lg:hidden">
              {annotations.map((annotation) => (
                <div
                  key={annotation.label}
                  className={`${annotation.className} absolute w-fit max-w-[min(100%,240px)] text-[11px] font-bold sm:max-w-none sm:text-[13px] lg:text-[14px] ${annotation.align}`}
                >
                  {annotation.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ModernIonSection
