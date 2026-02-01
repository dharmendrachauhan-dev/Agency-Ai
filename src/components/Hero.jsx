import assets from "../assets/assets"
import { motion } from "motion/react"

function Hero() {
  return (
    <div id= 'hero' className="flex flex-col items-center text-center w-full overflow-hidden
    text-gray-700 gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 dark:text-white dark:bg-slate-900">

      <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay:0.7 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-xl">
        <img src={assets.group_profile} className="w-20" alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
      initial={{ opacity: 0, y : 40}}
      whileInView={{ opacity: 1, y : 0 }}
      transition={{ duration: 0.6, delay: 0.8}}
      viewport={{ once: true }}
      className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium  xl:leading-23 max-w-5xl">
        Turning imagination into <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact.
      </motion.h1>

      <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className=" text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive digital experiences
      </motion.p>


      <motion.div
      initial={{opacity: 0, scale: 0.8}}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className="relative">
        <img src={assets.hero_img} alt="" className="relative z-10 w-full h-full max-w-4xl" />
        <img src={assets.bgImage1} alt="" className="absolute z-0 -top-60 -right-40 sm:-top-100 sm:-right-65 dark:hidden" />
      </motion.div>
      
    </div>
  )
}

export default Hero
