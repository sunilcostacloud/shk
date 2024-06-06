"use client";

import styles from "./MenuItems.module.css";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Star } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";
import liquidDishWash from "../../assets/images/liquidDishWash.jpg"

const MenuItemsList = () => {
  const pathname = usePathname();
  const router = useRouter();
  const Starters = [
    {
      imageSrc: "https://lh3.googleusercontent.com/p/AF1QipOrYdN0YFENxlto6lqgjiyGUbkJelv6A37JTBCL=s0",
      title: "Veg Mixer",
      content: "Tomato Salad & Carrot",
      price: "5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/p/AF1QipNOpR1iz9W2oLWLR9tNnp6nKaMpKNY1tS5O63lx=s0",
      title: "Macaroni",
      content: "Cheese Pizza",
      price: "2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/p/AF1QipMcIomXJSMZnbrx63p1HLkGtGrxZRbJgTnqdMYr=s0",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc: "https://lh3.googleusercontent.com/p/AF1QipNYPlVTu9nGFPA6p_BrXy7gbNQJSlyyb8oLTW6Y=s0",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];
  return (
    <div style={{ marginBottom: "1rem" }}>
      {pathname === "/" && (
        <p className={styles.heading}>
          Checkout our <span className={styles.subHeading}>Menu.</span>{" "}
        </p>
      )}
      <div>
      <Grid container justifyContent="center" spacing={2}>
        {Starters?.map((starter, index) => (
          <Grid item key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className={styles.mainCard}>
                <Box className={styles.imageBox}>
                  <Box className={styles.ratingBox}>
                    <Star className={styles.starIcon} />
                    <Typography variant="body2">
                      {starter.rating} ({starter.reviews} reviews)
                    </Typography>
                  </Box>
                  <CardMedia
                    component="img"
                    className={styles.cardMedia}
                    image={starter.imageSrc}
                    title={starter.title}
                  />
                </Box>
                <CardContent>
                  <Typography className={styles.title} component="p">
                    {starter.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    className={styles.content}
                    component="p"
                  >
                    {starter.content}
                  </Typography>
                  <Typography className={styles.price} component="p">
                    Price: {starter.price}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      </div>
      {pathname === "/" && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            style={{ background: "#6415ff" }}
            onClick={() => router.push("/products")}
          >
            Go to products
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuItemsList;
