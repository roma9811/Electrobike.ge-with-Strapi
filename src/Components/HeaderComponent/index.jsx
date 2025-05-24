import './Header.css';
import myVideo from "../../VideoFile/header_video.mp4";
import { motion } from "framer-motion";


export const HeaderComponent = () => {
    
    const splitText = (text, speed = 0.1) => {
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

    return (
        <div id="Header" className="header">
            <video className="video-bg" src={myVideo} autoPlay muted loop playsInline />
            <div className="overlay" />
            <div className="HeaderText">
                <div className="FreedomText">
                    <h1>{splitText("Freedom without")}</h1>
                    <h1>{splitText(" Limits.")}</h1>
                </div>
            </div>

            <div className="E_BikesText">
                <div className="EbikeTextContainer">
                    <p>{splitText("Our electric bikes offer quality,", 0.03)}</p>
                    <p>{splitText("reliability, and style,", 0.03)}</p>
                    <p>{splitText("with powerful motors and", 0.03)}</p>
                    <p>{splitText("long-lasting batteries. We provide personalized service,", 0.03)}</p>
                    <p>{splitText("flexible purchasing options,", 0.03)}</p>
                    <p>{splitText("and warranties, ensuring a comfortable and economy-friendly ride.", 0.03)}</p>
                </div>
            </div>
        </div>
    );
};
