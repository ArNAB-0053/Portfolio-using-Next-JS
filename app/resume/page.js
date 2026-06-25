import { RESUME_URL } from "@/utils/constants"

export const metadata = {
    title: "Resume",
};

const page = () => {
    return (
        <div className="h-screen">
            <iframe
                src={RESUME_URL}
                title="Resume PDF"
                className="w-full h-full border-none"
            />
        </div>
    )
}

export default page
