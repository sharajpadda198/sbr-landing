import type * as React from "react";

declare module "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        exposure?: string;
        "environment-image"?: string;
        "shadow-intensity"?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "disable-zoom"?: boolean;
        "interaction-prompt"?: "none" | "auto";
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "min-camera-orbit"?: string;
        "max-camera-orbit"?: string;
      };
    }
  }
}

export {};
