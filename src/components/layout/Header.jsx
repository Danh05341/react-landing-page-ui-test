import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import logo from '../../assets/images/logo.svg'
import { EASE_OUT } from '../../lib/motion-presets'

function Header() {
  const reduce = useReducedMotion()
  const cartCount = 0

  return (
    <motion.header
      className="relative bg-white"
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.45, ease: EASE_OUT }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[1.5px] bg-linear-to-r from-[#F15A29]/0 via-[#F15A29]/80 to-[#F15A29]/0"
        aria-hidden
      />
      <div className="mx-auto flex h-16 w-full max-w-[1920px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 md:px-10 lg:h-[92px] lg:px-[121px]">
        <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
          <Link to="/" className="block shrink-0">
            <img src={logo} alt="Onix logo" className="h-7 w-auto sm:h-8 md:h-9 lg:h-10" />
          </Link>
        </motion.div>
        <motion.button
          type="button"
          className="rounded-full bg-(--color-brand) px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          aria-label={`Cart has ${cartCount} items`}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          <span className="mr-1">Cart:</span>
          <span>{cartCount}</span>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header
