import { motion } from "framer-motion";
import { useRef } from "react";

export function Loader() {
 
  const divRef = useRef<HTMLDivElement>(null)








  return (
    <motion.div initial={{
      width:0
     }}
     ref={divRef}
     animate={{width:"100%"}}
     color=" "
    className="bg-indigo-900 animate-pulse h-1 absolute"
     transition={{damping:"ease",duration:1}} 
  onAnimationComplete={()=>{
  divRef.current?.remove()
  }}
    
     />
  );
}


