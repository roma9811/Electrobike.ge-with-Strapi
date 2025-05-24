import { motion } from "framer-motion";
import "./E-bike.css";
import BikeCatalog from "../../Components/BikeCatalogComponent/BikeCatalog";
import { FooterComponent } from "../../Components/FooterComponent";
import Strip from "../../Assets/strip.png";

export const EBikePage = () => {
    

    return (
        <div className='E-BikePage'>
            <div className='E-BikeContainer'>
                <div className="CollectionImg">
                    <motion.img
                        src={Strip}
                        alt=""
                        width={70}
                        height={10}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <h1>COLLECTION</h1>
                    <motion.img
                        src={Strip}
                        alt=""
                        width={70}
                        height={10}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </div>
            <div className="ModelFilter">
                <div className='BikeProdukt'>
                    <BikeCatalog />
                </div> 
            </div>
            <div>
                <FooterComponent />
            </div>
        </div>
    );
};
