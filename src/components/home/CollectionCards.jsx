import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

import heroImage from '../../assets/images/hero.svg'
import { Reveal } from '../motion/Reveal'
import prevArrow from '../../assets/images/prev.svg'

const collectionCards = [
  {
    title: 'IONIX 350ml',
    description: 'A compact bottle built for daily commutes and short excursions.',
    price: '1$',
    gradient: 'from-[#FFE8D1] to-[#F5B099]',
  },
  {
    title: 'IONIX 1L',
    description: 'Our signature bottle with a bold gradient label and smooth pour.',
    price: '1$',
    gradient: 'from-[#F9722F] to-[#F1430D]',
  },
  {
    title: 'IONIX 2L',
    description: 'Perfect for home or office, keeping everyone refreshed.',
    price: '2$',
    gradient: 'from-[#FFE1D4] to-[#F9B7A3]',
  },
]

const CARD_UPPER_HEIGHT_MOBILE_PX = 320

function CollectionCards() {
  const reduce = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(1)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? collectionCards.length - 1 : prev - 1))
  }

  const length = collectionCards.length
  const positions = [-1, 0, 1]
  const getCard = (offset) => collectionCards[(activeIndex + offset + length) % length]

  return (
    <Reveal as="section" className="mx-auto w-full max-w-[1920px] px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 md:pb-20" y={26}>
      <div className="relative w-full">
        <div className="pb-6 pt-4 sm:pb-8 sm:pt-6 lg:pb-10">
          <div className="relative w-full pl-12 sm:pl-14 lg:pl-16 xl:pl-20">
            <motion.button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 top-[160px] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#F1F1F1] bg-white/70 shadow-lg shadow-black/5 transition-[background-color,box-shadow,transform] duration-300 ease-out hover:cursor-pointer hover:bg-white hover:shadow-md active:bg-white sm:top-[180px] sm:h-12 sm:w-12 lg:left-2 lg:top-[238px] lg:h-14 lg:w-14"
              aria-label="Previous collection"
              whileHover={reduce ? undefined : { scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.94 }}
            >
              <img src={prevArrow} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <div className="-mx-1 flex w-full snap-x snap-mandatory items-start justify-start gap-3 overflow-x-auto overflow-y-visible pb-2 sm:mx-0 sm:gap-4 lg:snap-none lg:justify-end lg:overflow-visible lg:pb-0">
              {positions.map((offset) => {
                const card = getCard(offset)
                const isActive = offset === 0
                return (
                  <motion.article
                    key={`${card.title}-${offset}`}
                    className={`group/card relative flex min-w-[min(100%,280px)] max-w-[min(92vw,340px)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-transparent transition-[transform,box-shadow,opacity] duration-300 ease-out sm:min-w-0 sm:max-w-none sm:rounded-[28px] lg:max-h-[625px] lg:rounded-[32px] ${
                      isActive
                        ? 'w-[min(92vw,340px)] scale-[0.98] shadow-[0px_20px_40px_rgba(14,15,20,0.12)] sm:w-[min(90vw,520px)] sm:scale-95 sm:shadow-[0px_30px_50px_rgba(14,15,20,0.15)] sm:hover:shadow-[0px_35px_55px_rgba(14,15,20,0.25)] lg:w-[664px] lg:scale-95'
                        : 'hidden w-[min(85vw,300px)] scale-[0.96] opacity-90 sm:flex sm:w-[min(42vw,420px)] sm:scale-95 sm:opacity-100 lg:w-[547px]'
                    }`}
                    whileHover={reduce || !isActive ? undefined : { y: -4 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                  >
                    <div
                      className={`flex w-full flex-col text-(--color-primary) bg-linear-to-b ${card.gradient} lg:h-[476px]`}
                      style={{ minHeight: CARD_UPPER_HEIGHT_MOBILE_PX }}
                    >
                      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
                        <img
                          src={heroImage}
                          alt={card.title}
                          className="h-[min(200px,42vw)] w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.04] sm:h-[200px] lg:h-[220px]"
                          loading="lazy"
                        />
                      </div>
                      <div className={clsx("px-[34px] py-[30px] text-center", isActive && 'hidden')}>
                        <div className="text-2xl text-left font-bold leading-5 pv-3 px-2.5">
                          {card.title}
                        </div>
                      </div>
                    </div>
                    {isActive ? (
                      <div className="flex flex-col gap-4 bg-[#0E0E0E] px-4 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-6 sm:py-6">
                        <div className="flex flex-col">
                          <div className="px-2.5 py-2 text-left text-xl font-bold leading-tight sm:py-3 sm:text-2xl">
                            {card.title}
                          </div>
                          <span className="px-2.5 py-1 text-lg font-medium leading-5 sm:py-3 sm:text-xl">{card.price}</span>
                        </div>
                        <motion.button
                          type="button"
                          className="w-full shrink-0 rounded-full border border-white py-3 text-center text-base font-medium transition-[background-color,box-shadow] duration-300 ease-out hover:cursor-pointer hover:bg-white/10 sm:my-auto sm:w-auto sm:self-start sm:py-3.5 sm:text-lg lg:px-8"
                          whileHover={reduce ? undefined : { scale: 1.03 }}
                          whileTap={reduce ? undefined : { scale: 0.98 }}
                        >
                          Buy now
                        </motion.button>
                      </div>
                    ) : null}
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default CollectionCards
