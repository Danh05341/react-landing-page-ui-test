import { motion, useReducedMotion } from 'motion/react'
import heroImage from '../../assets/images/hero.svg'
import heroBackground from '../../assets/images/hero.png'
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
      <div className="mx-auto w-full max-w-[1920px] pb-16 sm:pb-20">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <motion.div
            className="relative h-auto min-[1200px]:h-[1080px]"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div
              className="group mx-auto w-full max-w-[82vw] sm:max-w-[72vw] min-[1200px]:absolute min-[1200px]:left-1/2 min-[1200px]:top-[143px] min-[1200px]:h-[895px] min-[1200px]:w-auto min-[1200px]:max-w-none min-[1200px]:-translate-x-1/2"
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
                className="h-auto w-full transform-gpu transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.01] min-[1200px]:h-full min-[1200px]:w-auto min-[1200px]:max-w-none"
              />
            </motion.div>

            <motion.div
              className="mt-6 px-4 py-2.5 pr-0 sm:mt-8 sm:px-6 sm:pr-3 min-[1200px]:absolute min-[1200px]:left-[262px] min-[1200px]:top-[52px] min-[1200px]:mt-0 min-[1200px]:w-[394px] min-[1200px]:px-0"
              variants={item}
            >
              <h1 className="font-brand text-[clamp(2rem,6.5vw,3.75rem)] leading-[1.05] text-(--color-primary) min-[1200px]:text-6xl min-[1200px]:leading-none">
                A Clearer Way to <span className="text-(--color-brand)">Hydrate</span>
              </h1>
            </motion.div>

            <motion.div
              className="mt-5 space-y-3 px-4 sm:mt-6 sm:space-y-4 sm:px-6 min-[1200px]:absolute min-[1200px]:bottom-[327px] min-[1200px]:left-[262px] min-[1200px]:mt-0 min-[1200px]:w-[264px] min-[1200px]:px-0"
              variants={item}
            >
              <h2 className="font-brand text-2xl leading-tight text-(--color-primary) sm:text-3xl sm:leading-snug min-[1200px]:text-[40px] min-[1200px]:leading-[42px]">
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
              className="mt-6 px-4 py-2.5 text-left text-base text-(--color-primary) sm:mt-8 sm:px-6 sm:text-lg min-[1200px]:absolute min-[1200px]:bottom-[342px] min-[1200px]:right-[262px] min-[1200px]:mt-0 min-[1200px]:w-[405px] min-[1200px]:px-0 min-[1200px]:text-right"
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
