"use client";

import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <motion.div
             initial={{ x: -1000 }} // Initial position off-screen to the left
             animate={{ x: 0 }} // Animating to position 0
             transition={{ type: "spring", stiffness: 120, duration: 1 }} // Spring animation
          >
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.939709688559!2d81.5944856!3d23.1358789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3987ab08f34b3029%3A0xa1339f856dedf7c9!2sSHRI%20HARI%20KRIPA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1717398020290!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>
            <h3 style={{ color: "#1F375E" }}>SHRI HARI KRIPA ENTERPRISES</h3>
            <Grid
              container
              spacing={1}
              alignItems="center"
              style={{ marginTop: "0.5rem" }}
            >
              <Grid item>
                <LocationOnIcon style={{ color: "green" }} />
              </Grid>
              <Grid item>
                <h5>Gram- Devhara patna road, post</h5>
                <h5>near bus stand, Sanjay Nagar,</h5>
                <h5>Anuppur, Madhya Pradesh 484120</h5>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <PhoneIcon style={{ color: "blue" }} />
              </Grid>
              <Grid item>
                <h6>Contact : 1234567890</h6>
              </Grid>
            </Grid>
            <h6>
              Timings: Monday to Friday (9AM to 5PM) and Saturday (9AM to 12PM)
            </h6>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
