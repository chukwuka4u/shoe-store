import React from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const router = useRouter()
    const brandItems = {
        givenchy : "https://i.pinimg.com/736x/3d/fe/0e/3dfe0ed588a2ef02320df8514fe56f03.jpg",
prada : "https://i.pinimg.com/736x/21/19/9a/21199a3a9f5383d4c0f4e37cc98b1e53.jpg",
gucci : "https://i.pinimg.com/736x/8f/d1/e3/8fd1e3a82f6f726d40ef7bc8ef1d2328.jpg",
nike : "https://i.pinimg.com/736x/a9/80/19/a980194db726fad14c64fab75e9db7d3.jpg",
adidas : "https://i.pinimg.com/736x/35/ec/d5/35ecd5ee36d4f72559c75837e79bd9da.jpg",
dior: "https://i.pinimg.com/736x/e7/f0/1b/e7f01bebfd156f440a38cf2cdf62d09c.jpg",
dng: "https://i.pinimg.com/736x/2b/e8/96/2be8965659ba835ffb83a331ec2da060.jpg",
fendi: "https://i.pinimg.com/736x/25/21/88/2521884540f4fb8915cc1de6664a2ce7.jpg",
puma: "https://i.pinimg.com/736x/cd/69/fc/cd69fcf8f560a3504d698cdf836c8037.jpg",
timberland: "https://i.pinimg.com/736x/9c/cc/e3/9ccce3a5576c331e5171c4460162698a.jpg",
louis20vitton: "https://i.pinimg.com/736x/9b/3e/88/9b3e885c4e0d04f82846c578a2acf0ac.jpg"

    }
  return (
   <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

            {Object.entries(brandItems).map(([key, value], index) => 
                <button key={index} onClick={() => {
                    if (key == "louis20vitton")
                        router.push('/brand/louis%20vitton')
                    else
                            router.push(`/brand/${key}`)
                    }} className="flex-none w-[100%] min-w-0">
                    <Image 
                        src={value}
                        alt={key}
                        width={200}
                        height={100}
                        className="w-[100%] h-[300px] cover rounded-xl shadow-lg"
                        />
                </button>
        )}
        </div>
    </div>
  )
}

                         {/*

givenchy : "https://i.pinimg.com/736x/f2/c3/6d/f2c36d14b653418d2eafb66130e70462.jpg",
prada : "https://i.pinimg.com/736x/55/80/97/558097bf430af078a10fde2b3caf0806.jpg",
gucci : "https://i.pinimg.com/736x/7a/9f/5b/7a9f5ba11a387651f89efee6133ae934.jpg",
nike : "https://i.pinimg.com/736x/55/d2/18/55d2187cc5dd52ab77edd8a9487dfcfc.jpg",
adidas : "https://i.pinimg.com/736x/84/30/86/84308699695db8e9c050142f93e248ea.jpg",
dior: "https://i.pinimg.com/736x/e7/f0/1b/e7f01bebfd156f440a38cf2cdf62d09c.jpg"
dng: "https://i.pinimg.com/736x/2b/e8/96/2be8965659ba835ffb83a331ec2da060.jpg"
fendi: "https://i.pinimg.com/736x/25/21/88/2521884540f4fb8915cc1de6664a2ce7.jpg"
louis vitton: "https://i.pinimg.com/736x/9b/3e/88/9b3e885c4e0d04f82846c578a2acf0ac.jpg"
puma: "https://i.pinimg.com/736x/cd/69/fc/cd69fcf8f560a3504d698cdf836c8037.jpg"
timberland: "https://i.pinimg.com/736x/9c/cc/e3/9ccce3a5576c331e5171c4460162698a.jpg"
*/}