import Hero from '../components/home/Hero'
import Heading from '../components/home/Heading'
import BottleRange from '../components/home/BottleRange'
import Banner from '../components/home/Banner'
import CommitmentHeading from '../components/home/CommitmentHeading'
import CommitmentImage from '../components/home/CommitmentImage'
import FaqSection from '../components/home/FaqSection'
import FeedbackFormSection from '../components/home/FeedbackFormSection'
import ModernIonSection from '../components/home/ModernIonSection'
import LogoSlider from '../components/home/LogoSlider'
import CollectionCards from '../components/home/CollectionCards'
import WhyIonixSection from '../components/home/WhyIonixSection'
import CommunityGrowthSection from '../components/home/CommunityGrowthSection'
import CustomerTestimonialsSection from '../components/home/CustomerTestimonialsSection'
import SiteFooter from '../components/home/SiteFooter'
import whyIonixImage from '../assets/images/why_ionix.png'
import testimonialLogo from '../assets/images/testimonial_logo.png'
import testimonialQuoteLeft from '../assets/images/testimonial_left.png'
import testimonialQuoteRight from '../assets/images/testimonial_right.png'
import commitmentPhoto from '../assets/images/commitment.png'
import commitmentPhoto2 from '../assets/images/image_1.png'


const whyIonixCards = [
  {
    background: <div className="size-full bg-black" />,
    title: 'ADVANCED ION TECHNOLOGY',
    description: 'Modern purification designed for reliable water quality.',
    titleClassName: 'text-white',
    descriptionClassName: 'text-white/90',
  },
  {
    background: <div className="size-full bg-(--color-brand)" />,
    title: 'CONSISTENT STANDARDS',
    description: 'Every production step is carefully monitored.',
    titleClassName: 'text-white',
    descriptionClassName: 'text-white/90',
  },
  {
    background: <div className="size-full bg-white" />,
    className: 'border-2 border-(--color-brand)',
    title: 'LOCALLY TRUSTED BRAND',
    description: 'Built to serve the community with dependable products.',
    titleClassName: 'text-(--color-primary)',
    descriptionClassName: 'text-(--color-primary)',
  },
]

function HomePage() {
  return (
    <main className="bg-white text-(--color-primary)">
      <Hero />
      <Heading />
      <Banner />
      <CommitmentHeading />
      <CommitmentImage image={commitmentPhoto} alt="IONIX commitment to water quality" containerClassName="mt-8 sm:mt-10" />
      <ModernIonSection />
      <LogoSlider />
      <CommitmentHeading
        title="Designed for Everyday Convenience"
        description="We offer several packaging options to fit different lifestyles and usage needs."
        titleClassName="!max-w-full md:!max-w-[708px]"
        descriptionClassName="!max-w-full md:!max-w-[284px]"
      />
      <BottleRange />
      <Heading
        title="Discover Our Best Collection"
        description="Experience hydration at its purest with our premium water bottles, available in various sizes for every occasion."
        textClassName="!max-w-[min(100%,913px)] px-1 sm:px-0"
        titleClassName="!max-w-[min(100%,913px)] !text-[clamp(1.75rem,5.5vw,2.75rem)] !leading-[1.08] sm:!text-[clamp(2rem,4.5vw,3.25rem)] lg:!text-[70px] lg:!leading-none"
        descriptionClassName="!max-w-[min(100%,541px)] !text-base !leading-snug font-regular sm:!text-lg sm:!leading-5"
      />
      <CollectionCards />
      <WhyIonixSection
        cards={whyIonixCards}
        featureImage={whyIonixImage}
        featureImageAlt="IONIX bottles with water splash"
      />
      <CommunityGrowthSection />
      <CustomerTestimonialsSection
        headingDecorationImage={testimonialLogo}
        headingDecorationImageAlt=""
        quoteLeftImage={testimonialQuoteLeft}
        quoteRightImage={testimonialQuoteRight}
      />
      <FaqSection />
      <FeedbackFormSection />
      <CommitmentImage image={commitmentPhoto2} alt="Water splash and purity" />
      <SiteFooter />
    </main>
  )
}

export default HomePage
