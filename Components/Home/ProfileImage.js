import TiltedCard from "../Animation/TiltedCard"
import { motion } from "framer-motion";

const ProfileImage = ({cardRef, cardInView, cardVariants}) => {
  return (
    <motion.div
        ref={cardRef}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        variants={cardVariants}
        className=" lg:hidden "
      >
        <TiltedCard
          imageSrc="/photo3.jpg"
          altText="Arnb Bhattacharyya"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="p-2 m-3 text-xs rounded-md bg-zinc-700/90 backdrop-blur-lg text-white shadow-lg">
              Arnb Bhattacharyya
            </p>
          }
          className=""
        />
      </motion.div>
  )
}
export default ProfileImage