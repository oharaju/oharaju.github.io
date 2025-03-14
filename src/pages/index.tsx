import Header from '@/components/organisms/Header';
import Hero from '@/components/molecules/Hero';
import About from '@/components/organisms/About';
import Experience from '@/components/organisms/Experience';
import Technology from '@/components/organisms/Technology';

import locale from '@/locales';
import Contact from '@/components/organisms/Contact';

export default function Home() {

  const { hero, about, experience, technology, contact } = locale['pt-br'];

  return (
    <>
      <Header />
      <Hero {...hero} />
      <About {...about} />
      <Experience {...experience} />
      <Technology {...technology} />
      <Contact {...contact} />
    </>
  )
}
