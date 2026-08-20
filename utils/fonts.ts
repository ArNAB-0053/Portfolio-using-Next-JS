import { DM_Sans, Lora, Montserrat, Oswald, Prompt, Roboto, Space_Grotesk } from "next/font/google";

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
export const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
export const prompt = Prompt({ subsets: ["latin"], weight: ["400", "700"] });
export const lora = Lora({ subsets: ["latin"], weight: ["600"], style: ["italic"] });
export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
