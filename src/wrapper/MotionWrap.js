import React from "react";
import { motion } from "framer-motion";

//higher order component
const MotionWrap = (Component, classNames) => function HOC() {
  /*
    + y: [100, 50, 0]: điều khiển vị trí dọc (vertical position) của phần tử (theo trục Y). 
    Phần tử đi lên từ thấp hơn 100px -> 50px -> 0
    + opacity [0, 0, 1] điều khiển độ trong suốt.
  
    + Khi ptu trong viewport (trong tầm nhìn được), whileinView này sẽ di chuyển từ dưới lên trên 
    (100px → 50px → 0px). Đồng thời, độ mờ sẽ tăng dần (0 → 0 → 1).
  */
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  )
};

export default MotionWrap;
