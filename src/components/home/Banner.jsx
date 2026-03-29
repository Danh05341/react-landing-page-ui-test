import { motion, useReducedMotion } from 'motion/react'
import bannerBg from '../../assets/images/banner.png'
import bannerItem1 from '../../assets/images/banner_item.svg'
import { EASE_OUT } from '../../lib/motion-presets'
import { Reveal } from '../motion/Reveal'

function Banner() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-white">
      <Reveal className="mx-auto mt-8 w-full max-w-[1920px] pb-12 sm:mt-10 sm:pb-16 md:mt-14 md:pb-20" y={28}>
        <div
          className="group/banner relative aspect-[1920/1080] w-full bg-cover bg-center transition-[filter] duration-500 ease-out hover:brightness-[1.02]"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <motion.img
            src={bannerItem1}
            alt="Banner item 1"
            className="absolute bottom-[34%] left-[26%] z-10 h-auto w-[28%] max-w-[min(132px,30vw)] object-contain transition-transform duration-500 ease-out group-hover/banner:scale-[1.02] sm:max-w-none sm:w-[31%] md:w-[33%] lg:w-[27%] 2xl:h-[720px] 2xl:max-w-none 2xl:w-[411px]"
            initial={reduce ? false : { opacity: 0, y: 24, rotate: -6 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduce ? 0 : 0.65, ease: EASE_OUT, delay: reduce ? 0 : 0.08 }}
          />

          <motion.img
            src={bannerItem1}
            alt="Banner item 2"
            className="absolute left-[56%] top-[31%] z-20 h-auto w-[26%] max-w-[min(122px,28vw)] rotate-[40deg] object-contain transition-transform duration-500 ease-out group-hover/banner:scale-[1.02] sm:max-w-none sm:w-[29%] md:w-[31%] lg:w-[25%] 2xl:h-[720px] 2xl:max-w-none 2xl:w-[411px]"
            initial={reduce ? false : { opacity: 0, y: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduce ? 0 : 0.65, ease: EASE_OUT, delay: reduce ? 0 : 0.2 }}
          />
        </div>
      </Reveal>
    </section>
  )
}

export default Banner
