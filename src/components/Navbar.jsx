import assets from '../assets/assets.js'
import { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn.jsx'
import { motion } from "motion/react"

function Navbar({theme, setTheme}) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='flex justify-between items-center px-4 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium dark:bg-slate-800/50 bg-white/50
    sm:px-12 lg:px-24 xl:px-40
    '>
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} 
        alt=""
        className='w-32 sm:w-40'
        />
        <div className={`text-gray-700 dark:text-white flex gap-5 transition-all 
        sm:text-sm ${!sidebarOpen ?  `max-sm:w-0 overflow-hidden` : `max-sm:w-50 max-sm:pl-5`} max-sm:fixed right-0 top-0 bottom-0 max-sm:min-h-screen 
        max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-15 sm:items-center`}>

          <img 
          src={assets.close_icon} 
          alt=""
          className='w-5 absolute top-4 right-4 sm:hidden'
          onClick={()=>setSidebarOpen(false)}
          />

            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#">Home</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#services">Services</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#our-work">Our Work</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#contact-us">Contact Us</a>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>

          <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt=""
          onClick={()=> setSidebarOpen(true)} 
          className='w-8 sm:hidden'
          />

          <a href="#connect" className='max-sm:hidden text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
          hover:scale-103 transition-all '>
            Connect <img src={assets.arrow_icon} width={14} alt="" />
          </a>
        </div>
    </motion.div>
  )
}

export default Navbar
