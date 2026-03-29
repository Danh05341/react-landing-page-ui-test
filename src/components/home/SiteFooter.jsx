import clsx from 'clsx'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'

function NavGroup({ label, links }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-wider text-white/45">{label}</p>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <a
              href={item.href}
              className="text-sm font-medium text-white transition-colors duration-300 ease-out hover:text-white/75 md:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SocialIconTikTok({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V8.27a6.33 6.33 0 0 0-1.88-.28 6.34 6.34 0 1 0 6.34 6.34V9.07a8.16 8.16 0 0 0 4.77 1.54V7.35a4.85 4.85 0 0 1-3.12-.66z" />
    </svg>
  )
}

function FooterWordmark() {
  return (
    <div className="flex items-center gap-0.5 font-brand text-3xl font-bold tracking-tight text-white md:text-4xl">
      <span>I</span>
      <span
        className="relative mx-0.5 inline-flex h-[0.85em] w-[0.85em] translate-y-[0.06em] items-center justify-center rounded-full bg-(--color-brand)"
        aria-hidden
      >
        <span className="absolute inset-[20%] rounded-full border-[0.1em] border-white/90" />
      </span>
      <span>NIX</span>
    </div>
  )
}

const defaultMenuLinks = [
  { label: 'Our Mission', href: '#' },
  { label: 'Our Technology', href: '#' },
]

const defaultSupportLinks = [
  { label: 'FAQ', href: '#' },
  { label: 'Delivery Policy', href: '#' },
]

const defaultProductLinks = [
  { label: '350ml Bottles', href: '#' },
  { label: '500ml Bottles', href: '#' },
  { label: '1L Bottles', href: '#' },
  { label: '2L Bottles', href: '#' },
  { label: '3L Bottles', href: '#' },
]

function SiteFooter({
  className,
  menuLinks = defaultMenuLinks,
  supportLinks = defaultSupportLinks,
  productLinks = defaultProductLinks,
  phone = '(+84) 385 958 885',
  email = 'support@ionix.com',
  location = 'address mmmm',
  socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com', Icon: SocialIconFacebook },
    { label: 'TikTok', href: 'https://tiktok.com', Icon: SocialIconTikTok },
  ],
  copyrightLine = `©${new Date().getFullYear()} IONIX.COM`,
  tagline1 = "WE DON'T SELL DRINKS,",
  tagline2 = "WE SELL HEALTH",
}) {
  return (
    <Reveal as="footer" className={clsx('bg-black text-white', className)} y={20} amount={0.08}>
      <div className="mx-auto w-full max-w-[1920px] px-4 pb-10 pt-14 sm:px-6 md:px-10 md:pb-12 md:pt-16 lg:px-[120px]">
        <Stagger
          as="div"
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16"
          stagger={0.08}
          amount={0.06}
        >
          <StaggerItem className="space-y-10 lg:col-span-3">
            <NavGroup label="Menu" links={menuLinks} />
            <NavGroup label="Support" links={supportLinks} />
          </StaggerItem>

          <StaggerItem className="lg:col-span-4 lg:pl-4 xl:pl-8">
            <NavGroup label="Products" links={productLinks} />
          </StaggerItem>

          <StaggerItem className="space-y-8 lg:col-span-5 lg:justify-self-end xl:max-w-sm">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/45">Contact</p>
              <p className="mt-3 text-xl font-bold tracking-tight text-white md:text-2xl">{phone}</p>
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block text-base text-white/95 underline-offset-2 transition-[color,text-decoration-color] duration-300 ease-out hover:text-white hover:underline"
              >
                {email}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/45">Location</p>
              <p className="mt-3 text-sm font-medium text-white md:text-base">{location}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/45">Social</p>
              <div className="mt-3 flex items-center gap-4">
                {socialLinks.map((link) => {
                  const SocialIcon = link.Icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-[opacity,transform] duration-300 ease-out hover:opacity-75 hover:scale-110"
                      aria-label={link.label}
                    >
                      <SocialIcon className="size-6 md:size-7" />
                    </a>
                  )
                })}
              </div>
            </div>
          </StaggerItem>
        </Stagger>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-[#F15A29]/25 pt-10 md:mt-16 md:flex-row md:justify-center md:gap-10 md:pt-12">
          <FooterWordmark />
          <div className="text-center text-[10px] font-medium uppercase leading-relaxed tracking-[0.12em] text-white/90 md:text-left md:text-xs">
            <p>{copyrightLine}</p>
            <p className="mt-1">{tagline1}</p>
            <p className="mt-1">{tagline2}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default SiteFooter
