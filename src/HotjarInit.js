"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const siteId = 5363437;
const hotjarVersion = 6;

export default function HotjarInit() {
  useEffect(() => {
    try {
      // Initialize Hotjar
      const initialized = Hotjar.init(siteId, hotjarVersion);
      
      // Optional: Verify initialization
      if (initialized) {
        console.log("Hotjar initialized successfully");
      } else {
        console.log("Hotjar already initialized or initialization failed");
      }
    } catch (error) {
      console.error("Hotjar initialization error:", error);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return null;
}