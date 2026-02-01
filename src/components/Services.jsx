import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { motion } from "motion/react"

function Services() {


  const servicesData = [
      {
          title: 'advertising',
          description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
          icon: assets.ads_icon
      },
      {
          title: 'Content marketing',
          description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
          icon: assets.marketing_icon
      },
      {
          title: 'Content marketing',
          description: 'We turn bold ideas into powerful digital solutions that connect, engage....',
          icon: assets.content_icon,
      },
      {
          title: 'Social media',
          description: 'We help you build a strong social media presence and engage with you audience',
          icon: assets.social_icon,
      },
  ]

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    id="services"
    className="dark:bg-slate-900 relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-100 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help"
        description="From strategy to execution, we craft digital
      solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2 dark:bg-slate-900">
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>

    </motion.div>
  );
}

export default Services;
