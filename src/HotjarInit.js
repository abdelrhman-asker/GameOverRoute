"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const siteId = 5363437;
const hotjarVersion = 6;

export default function HotjarInit() {
  useEffect(() => {
    // Removed isProduction check for local testing
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return null;
}