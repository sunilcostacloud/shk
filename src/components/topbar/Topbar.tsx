"use client";

import React from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import styles from "./Topbar.module.css";
import { NavDesktop } from "../navdesktop/NavDesktop";
import { NavMobile } from "../navmobile/NavMobile";
import shkLogo from "../../assets/images/shk_logo.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Topbar = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter()

  return (
    <AppBar
      position="fixed"
      className={styles.topbar}
      sx={{ bgcolor: "#edf2f7", padding: 0, margin: 0 }}
    >
      <Toolbar
        className={`${styles.navContainer} ${
          isMdUp ? styles.navContainerLg : ""
        }`}
      >
        <Image
          src={shkLogo}
          alt="shk logo"
          height={20}
          style={{ marginLeft: "20px", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
        <div style={{ marginLeft: isMdUp ? "5rem" : 0 }} >
          <h4 style={{color: "#1F375E"}}>SHRI HARI KRIPA ENTERPRISES</h4>
        </div>
        {isMdUp ? (
          <div style={{ marginRight: "20px" }}>
            <NavDesktop />
          </div>
        ) : (
          <NavMobile />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
