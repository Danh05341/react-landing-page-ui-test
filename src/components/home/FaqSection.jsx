import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'

const defaultItems = [
  {
    id: '1',
    question: 'Is your water safe for daily drinking?',
    answer:
      'Yes. IONIX water is produced through a controlled purification process and is intended for everyday consumption when stored and handled as directed.',
  },
  {
    id: '2',
    question: 'What product sizes do you offer?',
    answer: 'We offer several bottle sizes to suit home, office, and on-the-go use. See our product range for current availability in your area.',
  },
  {
    id: '3',
    question: 'How can I place an order?',
    answer: 'You can order through our distributors, selected retail partners, or by contacting our team for business and bulk options.',
  },
  {
    id: '4',
    question: 'What is ion purification technology?',
    answer:
      'Ion purification uses modern treatment steps to help reduce unwanted impurities and support consistent, reliable water quality batch to batch.',
  },
  {
    id: '5',
    question: 'Where is IONIX water sourced and bottled?',
    answer: 'Sourcing and bottling follow strict internal standards. For details relevant to your region, please contact us or your local distributor.',
  },
]

function FaqSection({
  title = 'FAQ',
  items = defaultItems,
  viewAllLabel = 'View All',
  viewAllHref = '#',
  className,
}) {
  const reduce = useReducedMotion()
  const [openId, setOpenId] = useState(null)

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }, [])

  return (
    <section className={clsx('bg-white pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24', className)}>
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-10 lg:px-[121px]">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal y={18}>
            <h2 className="font-brand text-5xl text-(--color-primary) sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-none">
              {title}
            </h2>
          </Reveal>

          <Stagger as="ul" className="mt-10 space-y-0 text-left sm:mt-12 md:mt-14" stagger={0.06} amount={0.05}>
            {items.map((item) => {
              const isOpen = openId === item.id
              return (
                <StaggerItem as="li" key={item.id} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left font-semibold text-(--color-primary) transition-colors duration-300 ease-out hover:text-black/80 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base leading-snug sm:text-lg">{item.question}</span>
                    <motion.span
                      className={clsx(
                        'mt-0.5 inline-flex shrink-0 text-xl font-light sm:text-2xl',
                        isOpen ? 'text-black/50' : 'text-black/35',
                      )}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.2 }}
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>
                  {item.answer ? (
                    <motion.div
                      className="grid overflow-hidden"
                      initial={false}
                      animate={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                      }}
                      transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="min-h-0">
                        <p className="pb-5 pr-10 text-sm font-normal leading-relaxed text-(--color-primary)/85 sm:text-base sm:pr-12">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal className="mt-8 sm:mt-10" y={10} delay={0.05}>
            <a
              href={viewAllHref}
              className="text-sm font-medium text-(--color-primary) underline decoration-black/30 underline-offset-4 transition-[color,text-decoration-color] duration-300 ease-out hover:decoration-(--color-brand) hover:text-(--color-brand)"
            >
              {viewAllLabel}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
