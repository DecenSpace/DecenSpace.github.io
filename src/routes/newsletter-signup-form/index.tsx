"use client";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const firebaseConfig = {
  apiKey: "AIzaSyA4zLn2sm3n629lOUhM0LTqLS6xH0Va7q4",
  authDomain: "decen-space-api.firebaseapp.com",
  projectId: "decen-space-api",
  storageBucket: "decen-space-api.firebasestorage.app",
  messagingSenderId: "525198382796",
  appId: "1:525198382796:web:51f9ce2872b6a18fac9469",
  measurementId: "G-VZMFJHJJME",
};

// initialize firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const NewsletterSignupForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // sanity checks
    if (!name.trim() && !email.trim()) {
      setError("Please enter both name and email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const newsLetterSubscribersColl = collection(
        db,
        "newsletter_subscribers"
      );

      // check if the email exists
      const q = query(
        newsLetterSubscribersColl,
        where("email", "==", email.toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email address is already subscribed.");
        setIsLoading(false);
        return;
      }

      // add the fields if the email doesn't exist
      await addDoc(newsLetterSubscribersColl, {
        name: name,
        email: email.toLowerCase(),
        subscribedAt: new Date(),
      });

      setSuccessMessage("Successfully subscribed! Welcome aboard.");
      setName("");
      setEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Failed to subscribe. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Box component="header" sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h1"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "grey.900" }}
          >
            Join Our Newsletter
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Stay up to date with our latest news and articles.
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            sx={{ mb: 3, textAlign: "center" }}
          >
            Subscribe Now
          </Typography>
          <Box component="form" onSubmit={handleSubscribe} noValidate>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <Box sx={{ mt: 2, position: "relative" }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isLoading}
                sx={{ py: 1.5, textTransform: "none", fontSize: "1.1rem" }}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
          {error && (
            <Alert severity="error" sx={{ mt: 3 }}>
              {error}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" sx={{ mt: 3 }}>
              {successMessage}
            </Alert>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default NewsletterSignupForm;
