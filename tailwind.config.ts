import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        section_bg: "url('/assets/media/logo/logo.png')",
        about_vesion: "url('/assets/media/about/vesion.jpg')",
        about_founder_speech: "url('/assets/media/about/founder_speech.jpg')",
        about_message: "url('/assets/media/about/message.jpg')",
        about_golas: "url('/assets/media/about/golas.jpg')",
      },
      colors: {
        off_wihte: "var(--off_wihte)",
        light_opacity_bg: "var(--light_opacity_bg)",
        gray_text: "var(--gray_text)",
        gold: "var(--gold)",
        white: "var(--wihte)",
        light_black: "var(--light_black)",
        light_gold: "var(--light_gold)",
      },
      boxShadow: {
        spread: "1px 1px 0px #b58e51, 1px 1px 7px #b58e51, 1px 1px 0px #b58e51",
        text_spread:
          "1px 1px 6px #b58e51,1px 1px 6px #b58e51,1px 1px 6px #b58e51",
        light_shadow:
          "0px 0px 6px #b58e51, 0px 0px 0px #b58e51, 0px 0px 0px #b58e51",
        white_shadow: "rgba(255, 255, 255, 0.4) 0px 1px 4px",
      },
      animation: {
        sticky_header: "sticky_header 0.75s linear",
        carousel_text: "carousel_text 4s ease-in-out",
        carousel_text_container: "carousel_text_container 3s  ease-in-out",
        carousel_text_container_mobile:
          "carousel_text_container_mobile 3s  ease-in-out",
        hero_carousel: "hero_carousel 2.5s  ease-in-out",
        forward_arrow: "forward_arrow 1s  ease-in-out infinite",
        backward_arrow: "backward_arrow 1s  ease-in-out infinite",
        menu_bar: "menu_bar 2s linear infinite",
        top_down: "top_down 3s ease-in-out infinite",
      },
      keyframes: {
        sticky_header: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        hero_carousel: {
          "0%": {
            width: "90%",
          },
          "90%": {
            width: "90%",
          },
          "100%": {
            width: "100%",
          },
        },
        forward_arrow: {
          "0%": {
            transform: "translateX(-10px)",
          },
          "50%": {
            transform: "translateX(0px)",
          },

          "100%": {
            transform: "translateX(-10)",
          },
        },
        backward_arrow: {
          "0%": {
            transform: "translateX(10px)",
          },
          "50%": {
            transform: "translateX(0px)",
          },

          "100%": {
            transform: "translateX(10)",
          },
        },
        carousel_text: {
          "0%": {
            transform: "translateY(-200%)",
          },
          "80%": {
            transform: "translateY(-200%)",
          },
          "90%": {
            transform: "translateY(30%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        carousel_text_container: {
          "0%": {
            height: "0px",
          },
          "80%": {
            height: "0px",
          },
          "100%": {
            height: "200px",
          },
        },
        carousel_text_container_mobile: {
          "0%": {
            height: "0px",
          },
          "80%": {
            height: "0px",
          },
          "100%": {
            height: "80px",
          },
        },
        top_down: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1300px",
        },
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
