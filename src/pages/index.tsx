import Header from '@/components/organisms/Header';
import Hero from '@/components/molecules/Hero';
import locale from '@/locales'

export default function Home() {
  
  const { hero } = locale['pt-br']
  
  return (
    <>
      <Header />
      <Hero title={hero.title} description={hero.description} />
      <Hero {...hero} />
    </>
  )
}
