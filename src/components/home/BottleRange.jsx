import { motion, useReducedMotion } from 'motion/react'
import item1 from '../../assets/images/item_1.png'
import { Stagger, StaggerItem } from '../motion/Reveal'
import item2 from '../../assets/images/item_2.png'
import item3 from '../../assets/images/item_3.png'
import item4 from '../../assets/images/item_4.png'
import item5 from '../../assets/images/item_5.png'

const bottleItems = [
  { label: '350ml', image: item1 },
  { label: '500ml', image: item2 },
  { label: '1L', image: item3 },
  { label: '2L', image: item4 },
  { label: '3L', image: item5 },
]

function BottleRange() {
  const reduce = useReducedMotion()

  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 pb-12 sm:px-6 sm:pb-16 md:px-12 md:pb-20">
      <div className="mx-auto w-full max-w-[1396px]">
        <div className="py-10">
          <div className="h-px w-full" />
          <div className="overflow-x-auto pb-6">
            <Stagger
              as="div"
              className="flex min-w-full items-end justify-center gap-8 md:justify-between"
              stagger={0.07}
              amount={0.15}
            >
              {bottleItems.map((bottle) => (
                <StaggerItem
                  key={bottle.label}
                  className="group flex min-w-[140px] flex-col items-center gap-5 text-center md:min-w-[160px]"
                >
                  <motion.img
                    src={bottle.image}
                    alt={`${bottle.label} bottle`}
                    className="h-[160px] w-auto cursor-default object-contain transition-[filter] duration-300 ease-out hover:brightness-[1.03] sm:h-[190px] md:h-[220px]"
                    loading="lazy"
                    whileHover={reduce ? undefined : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 18 } }}
                  />
                  <span className="p-3 text-sm font-normal transition-colors duration-300 ease-out group-hover:text-(--color-brand)">
                    {bottle.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BottleRange
