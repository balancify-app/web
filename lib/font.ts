import localFont from "next/font/local";

export const basisGrotesqueArabic = localFont({
  src: [
    {
      path: "../public/assets/fonts/basis_grotesque_pro_font_family/BasisGrotesqueArabicPro-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/assets/fonts/basis_grotesque_pro_font_family/BasisGrotesqueArabicPro-Regular.ttf",
      weight: "400",
    },

    {
      path: "../public/assets/fonts/basis_grotesque_pro_font_family/BasisGrotesqueArabicPro-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/basis_grotesque_pro_font_family/BasisGrotesqueArabicPro-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-basis-grotesque-arabic",
});
