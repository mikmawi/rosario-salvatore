"use client";

import { useEffect, useState } from "react";

/**
 * Whether to render an autoplaying background video at all. Decided in JS
 * (rather than CSS display:none) so reduced-motion / small-screen visitors
 * never even fetch the video file.
 */
export function useCanPlayVideo() {
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqWidth = window.matchMedia("(min-width: 640px)");
    const update = () => setCanPlay(!mqMotion.matches && mqWidth.matches);
    update();
    mqMotion.addEventListener("change", update);
    mqWidth.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqWidth.removeEventListener("change", update);
    };
  }, []);

  return canPlay;
}
