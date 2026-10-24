"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
    return (
        <NextThemeProvider
            disableTransitionOnChange
            attribute="data-theme"
            defaultTheme="light"
            enableSystem
            storageKey="reach-theme"
            value={{
                light: "light",
                dark: "dark",
            }}
        >
            {children}
        </NextThemeProvider>
    );
}
