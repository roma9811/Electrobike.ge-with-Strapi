import { motion } from "framer-motion";
import "./MainThree.css";
import Strip from "../../Assets/strip.png";
import Customer1 from "../../Assets/customer1.jpg";
import Customer2 from "../../Assets/customer2.jpg";
import Customer3 from "../../Assets/customer3.jpg";
import Customer4 from "../../Assets/customer4.jpg";
import Quotes from "../../Assets/quotes.png";

export const MainComponentThree = () => {
  return (
    <div className="MainThree">
      <div className="MainThreeContainer">
        <motion.div
          className="CustomersOne"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="Testimonials">
            <motion.img
              src={Strip}
              alt=""
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
            <h1>TESTIMONIALS</h1>
          </div>

          <div className="CustomersSaid">
            <h1>See What They Said About Us</h1>
            <p>
              The Probike strives to give the best customer service possible. We believe every
              customer should feel welcome and comfortable in our shops. Below are a few emails
              we have received from happy customers.
            </p>
            <div className="Quotes">
              <img src={Quotes} alt="" />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="CustomersTwo"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="CustomerBox">
            <img src={Customer1} alt="" width={100} />
            <h3>Majida - Customer</h3>
            <p>
              "I just purchased a 2013 Domane from the Springfield store. I want to pass along
              to you that I had an excellent experience working with them."
            </p>
          </div>

          <div className="CustomerBox">
            <img src={Customer2} alt="" width={100} />
            <h3>Elizabeth Bailey - Customer</h3>
            <p>
              “I had a fantastic experience today buying my first road bike. I'm pretty intimidated
              by the sport, but Wayne never treated me like I was stupid.”
            </p>
          </div>

          <div className="CustomerBox">
            <img src={Customer3} alt="" width={100} />
            <h3>Shannon - Customer</h3>
            <p>
              "I brought my Trek bike in to get the brakes adjusted. Not only did Daniel see me
              right away, but also he went above-and-beyond in checking out the bike."
            </p>
          </div>

          <div className="CustomerBox">
            <img src={Customer4} alt="" width={100} />
            <h3>Phillip Author - Customer</h3>
            <p>
              "I had a great experience with the salesmen who helped me. I wanted to let you know
              your staff have earned a loyal customer."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
