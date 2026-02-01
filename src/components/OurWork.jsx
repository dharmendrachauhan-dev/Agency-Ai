import Title from './Title.jsx'
import assets from '../assets/assets'
import {motion} from 'motion/react'


function OurWork() {

  const workData = [
    {
      id: 1,
      title:'Mobile app marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
      image: assets.work_mobile_app
    },
    {
      id:2,
      title: 'Dashboard management',
      description: 'We help you execute your plan and deliver results.',
      image: assets.work_dashboard_management
    },
    {
      id:3,
      title: 'Fitness app promotion',
      description: 'We help you create a marketing strategy that drives results.',
      image: assets.work_fitness_app
    }
  ]

  return (
    <motion.div
     initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
    id='our-work' className=' w-full flex flex-col items-center gap-7
    px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 dark:text-white dark:bg-slate-900 text-gray-700'>
      <Title title='Our latest work' description="From strategy to execution, we craft digital solutions that move your business forward."/>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

      {workData.map((item, index)=>{
        return <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        key={item.id} className='hover:scale-102 duration-500 dark:bg-slate-900
        transition-all'>
          <img src={item.image} className='w-full rounded-xl' alt="" />
          <h3 className='mt-3 mb-2 text-lg font-semibold'>{item.title}</h3>
          <p className='text-sm opacity-60 w-5/6'>{item.description}</p>
        </motion.div>
      })}
    </div>
    </motion.div>
  )
}

export default OurWork

