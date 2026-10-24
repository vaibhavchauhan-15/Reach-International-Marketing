"use client";

import { useSyncExternalStore } from "react";

const screens = {
    xs: "360px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};

/**
 * Checks whether a particular Tailwind CSS viewport size applies.
 *
 * @param size The size to check matching Tailwind CSS screen breakpoints.
 * @returns A boolean indicating whether the viewport matches the media query.
 */
export const useBreakpoint = (size: keyof typeof screens) => {
    return useSyncExternalStore(
        (callback) => {
            if (typeof window === "undefined") return () => {};
            const breakpoint = window.matchMedia(`(min-width: ${screens[size]})`);
            breakpoint.addEventListener("change", callback);
            return () => breakpoint.removeEventListener("change", callback);
        },
        () => (typeof window !== "undefined" ? window.matchMedia(`(min-width: ${screens[size]})`).matches : true),
        () => true
    );
};
