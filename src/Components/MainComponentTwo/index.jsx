import React, { useRef } from "react";
import "./MainTwo.css";
import Strip from "../../Assets/strip.png";
import HimiwayImage from "../../Assets/himiway.png";
import HimiwayImage2 from "../../Assets/himiway2.png";
import HimiwayImage3 from "../../Assets/himiway3.png";
import { motion, useInView } from "framer-motion";

export const MainComponentTwo = () => {
    const splitText = (text, speed = 0.03) => {
        return text.split('').map((char, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * speed,
                    duration: 0.2,
                }}
            >
                {char}
            </motion.span>
        ));
    };

    const speedRef = useRef(null);
    const freedomRef = useRef(null);
    const isSpeedInView = useInView(speedRef, { once: true, margin: "-100px" });
    const isFreedomInView = useInView(freedomRef, { once: true, margin: "-100px" });

    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const inView1 = useInView(block1Ref, { once: true, margin: "-100px" });
    const inView2 = useInView(block2Ref, { once: true, margin: "-100px" });
    const inView3 = useInView(block3Ref, { once: true, margin: "-100px" });

    return (
        <div className="MainTwo">
            <div className="MainTwoContainer">
                <div className="MainTextContainer">
                    <motion.p
                        ref={speedRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isSpeedInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        {splitText("Feel the speed", 0.03)}
                    </motion.p>
                    <motion.p
                        ref={freedomRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isFreedomInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        {splitText("and freedom", 0.03)}
                    </motion.p>
                </div>
            </div>

            <div className="CharacteristicsContainer">
                <div className="CharacteristicsBox">
                    {/* Block 1 */}
                    <motion.div className="CharacteristicsTextImage TextImageBlock" ref={block1Ref}>
                        <motion.div
                            className="CharacteristicsText"
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView1 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <motion.img src={Strip}
                                             alt=""
                                             initial={{ x: -100, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{ duration: 0.5, ease: "easeOut" }}
                                             viewport={{ once: true, amount: 0.3 }}
                                           />
                            <h1>Efficient and Eco-Friendly Travel</h1>
                            <p>
                                Electric bikes offer a faster and more efficient way to travel, allowing you to cover long distances with less effort.
                                With minimal maintenance and no fuel costs, they are an eco-friendly alternative to traditional transportation.
                                Plus, they provide a fun and smooth ride for all ages.
                            </p>
                        </motion.div>
                        <motion.div
                            className="CharacteristicsImage"
                            initial={{ opacity: 0, x: 100 }}
                            animate={inView1 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <img src={HimiwayImage} alt="" height={350} />
                        </motion.div>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div className="CharacteristicsTextImage" ref={block2Ref}>
                        <motion.div
                            className="CharacteristicsImage"
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView2 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <img src={HimiwayImage2} alt="" height={350} />
                        </motion.div>
                        <motion.div
                            className="CharacteristicsText"
                            initial={{ opacity: 0, x: 100 }}
                            animate={inView2 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                           <motion.img src={Strip}
                                             alt=""
                                             initial={{ x: 100, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{ duration: 0.5, ease: "easeOut" }}
                                             viewport={{ once: true, amount: 0.3 }}
                                           />
                            <h1>Convenient Charging and Long-Lasting Power</h1>
                            <p>
                                The convenience of electric bikes lies in their quick charging
                                times and long-lasting batteries. You can easily charge your
                                bike at home and enjoy hours of riding without worrying
                                about running out of power. It's the perfect solution for daily
                                commuting and weekend adventures.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Block 3 */}
                    <motion.div className="CharacteristicsTextImage TextImageSplit" ref={block3Ref}>
                        <motion.div
                            className="CharacteristicsText"
                            initial={{ opacity: 0, x: -100 }}
                            animate={inView3 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                           <motion.img src={Strip}
                                             alt=""
                                             initial={{ x: 100, opacity: 0 }}
                                             whileInView={{ x: 0, opacity: 1 }}
                                             transition={{ duration: 0.5, ease: "easeOut" }}
                                             viewport={{ once: true, amount: 0.3 }}
                                           />
                            <h1>Comfort and Performance for Modern Mobility</h1>
                            <p>
                                Electric bikes are designed to reduce strain on your body
                                while giving you the power to travel further. Whether you're
                                climbing hills or navigating through traffic,
                                the electric motor makes it easier to reach your destination
                                faster. It's a comfortable and sustainable
                                choice for modern mobility.
                            </p>
                        </motion.div>
                        <motion.div
                            className="CharacteristicsImage"
                            initial={{ opacity: 0, x: 100 }}
                            animate={inView3 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1 }}
                        >
                            <img src={HimiwayImage3} alt="" height={350} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
