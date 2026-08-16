import type { Metadata } from "next";
import { RESUME_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Resume",
};

const page = (): React.ReactElement => {
  return (
    <div className="h-screen">
      <iframe
        src={RESUME_URL}
        title="Resume PDF"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default page;
