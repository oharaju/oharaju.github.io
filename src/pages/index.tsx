import Header from '@/components/organisms/Header';
import Hero from '@/components/molecules/Hero';
import About from '@/components/organisms/About';
import locale from '@/locales';

export default function Home() {

  const { hero } = locale['pt-br'];

  return (
    <>
      <Header />
      <Hero {...hero} />
      <About />
    </>
  )
}
