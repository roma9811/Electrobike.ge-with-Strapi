import "./Footer.css";
import GPS from "../../Assets/gps.png";
import Mail from "../../Assets/mail.png";
import Phone from "../../Assets/phone.png";
import Logo from "../../Assets/logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Twitter from "../../Assets/twitter.png";
import Instagram from "../../Assets/instagram.png";
import Facebook from "../../Assets/facebook.png";

export const FooterComponent = () => {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="ContactContainer">
          <div className="ContactImg">
            <div className="ContactBox">
              <img src={GPS} alt="location" width={40} />
              <p>
                Tbilisi, Georgia <br />
                Shantax
              </p>
            </div>

            <div className="ContactBox">
              <img src={Mail} alt="email" width={40} />
              <p>muster@gmail.com</p>
            </div>

            <div className="ContactBox">
              <img src={Phone} alt="phone" width={40} />
              <p>+12345678910</p>
            </div>
          </div>
          <div className="Mail">
            <h3>Subscribe</h3>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Enter your email"
                variant="standard"
                sx={{
                  input: { color: "#C6CFD3" },
                  "& .MuiInput-underline:before": { borderBottomColor: "#C6CFD3" },
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "#C6CFD3" },
                  "& .MuiInput-underline:after": { borderBottomColor: "#73933F" },
                  "& label": { color: "#C6CFD3" },
                  "& label.Mui-focused": { color: "#73933F" },
                }}
              />
            </Box>

            <div className="SendMail">
              <Button
                variant="outlined"
                sx={{
                  color: "#C6CFD3",
                  borderColor: "#C6CFD3",
                  "&:hover": { color: "#73933F", borderColor: "#73933F" },
                  "&:focus": { borderColor: "#73933F" },
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="AboutCompany">
            <div className="CompanyText">
              <h3>About the company</h3>
              <img src={Logo} alt="logo" width={60} />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus eveniet
              enim, expedita illo corporis mollitia culpa! Blanditiis neque magni nulla cum pariatur
              ab nemo atque autem qui suscipit?
            </p>

            <div className="SocialMedia">
              <img src={Instagram} alt="instagram" width={30} />
              <img src={Facebook} alt="facebook" width={30} />
              <img src={Twitter} alt="twitter" width={30} />
            </div>
          </div>

        </div>

        <div className="CopyRight">
          <p>© 2025. All rights reserved. Unauthorized use is prohibited.</p>
        </div>
      </div>
    </div>
  );
};
