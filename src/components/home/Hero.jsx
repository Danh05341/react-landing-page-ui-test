import { motion, useReducedMotion } from 'motion/react'
import heroImage from '../../assets/images/hero.svg'
import { EASE_OUT } from '../../lib/motion-presets'

function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  }

  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: EASE_OUT },
    },
  }

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1920px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:pt-15">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(241, 245, 249, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(241, 245, 249, 1) 100%)',
          }}
        >
          <motion.div
            className="relative h-auto md:h-[1080px]"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div
              className="group mx-auto w-full max-w-[692px] md:absolute md:left-1/2 md:top-[143px] md:h-[895px] md:w-auto md:max-w-none md:-translate-x-1/2"
              variants={{
                hidden: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: reduce ? 0 : 0.75, ease: EASE_OUT, delay: reduce ? 0 : 0.05 },
                },
              }}
            >
              <img
                src={heroImage}
                alt="Hero product"
                className="h-auto w-full transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.02] md:h-full md:w-auto md:max-w-none"
              />
            </motion.div>

            <motion.div
              className="mt-6 py-2.5 pr-0 sm:mt-8 sm:pr-3 md:absolute md:left-[262px] md:top-[52px] md:mt-0 md:w-[394px]"
              variants={item}
            >
              <h1 className="font-brand text-[clamp(2rem,6.5vw,3.75rem)] leading-[1.05] text-(--color-primary) md:text-6xl md:leading-none">
                A Clearer Way to <span className="text-(--color-brand)">Hydrate</span>
              </h1>
            </motion.div>

            <motion.div
              className="mt-5 space-y-3 sm:mt-6 sm:space-y-4 md:absolute md:bottom-[327px] md:left-[262px] md:mt-0 md:w-[264px]"
              variants={item}
            >
              <h2 className="font-brand text-2xl leading-tight text-(--color-primary) sm:text-3xl sm:leading-snug md:text-[40px] md:leading-[42px]">
                Discover Our Water
              </h2>
              <motion.button
                type="button"
                className="rounded-full bg-(--color-brand) px-5 py-2 text-sm font-semibold text-white shadow-sm transition-[box-shadow,filter] duration-300 ease-out hover:shadow-md hover:brightness-105"
                whileHover={reduce ? undefined : { scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                Shop now
              </motion.button>
            </motion.div>

            <motion.p
              className="mt-6 py-2.5 text-left text-base text-(--color-primary) sm:mt-8 sm:text-lg md:absolute md:bottom-[342px] md:right-[262px] md:mt-0 md:w-[405px] md:text-right"
              variants={item}
            >
              Crafted with modern ion purification technology to deliver clean, balanced water you can trust every day.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
