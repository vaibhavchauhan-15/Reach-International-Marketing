"use client";

import { useCallback, useState } from "react";

export interface UseClipboardOptions {
    /**
     * Time in milliseconds before the `hasCopied` state resets back to false.
     * @default 2000
     */
    timeout?: number;
}

export function useClipboard(options: UseClipboardOptions = {}) {
    const { timeout = 2000 } = options;
    const [hasCopied, setHasCopied] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const copy = useCallback(
        async (text: string) => {
            try {
                if (!navigator?.clipboard) {
                    throw new Error("Clipboard not supported");
                }

                await navigator.clipboard.writeText(text);
                setHasCopied(true);
                setError(null);

                if (timeout) {
                    setTimeout(() => {
                        setHasCopied(false);
                    }, timeout);
                }

                return true;
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to copy text"));
                setHasCopied(false);
                return false;
            }
        },
        [timeout]
    );

    return {
        copy,
        hasCopied,
        error,
    };
}
