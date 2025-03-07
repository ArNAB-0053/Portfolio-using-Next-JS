import Image from "next/image";

const Blob = () => {
  return (
    <Image
      src="/bg4.png"
      alt="Blob Background"
      layout="fill" 
      className="w-full h-full max-xl:hidden lg:rotate-180 opacity-95 object-cover xl:object-contain"
    />
  );
};

export default Blob;
