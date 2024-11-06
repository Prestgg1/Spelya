"use client"
import {motion,AnimatePresence} from "framer-motion"
import { usePathname } from 'next/navigation';


export default function Gateway({children}){
const pathname = usePathname()
  return(
    <AnimatePresence mode="wait">
    <motion.div
      key={pathname}
/*       initial={false} */
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center flex-col"
    >
      {children}
    </motion.div>
  </AnimatePresence>
  )
}
