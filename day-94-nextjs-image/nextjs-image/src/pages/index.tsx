import Image from 'next/image'
import { Inter } from 'next/font/google'
import Buttons from '@/components/Button'
import FancyButton from '@/components/FancyButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6" alt=""
        fill
      /> */}
      <Buttons>Click </Buttons>
      <FancyButton>Click</FancyButton>
    </div>
  )
}
