import Image from "next/image";

const Blob = () => {
  return (
    <Image
      src="/bg4.png"
      alt="Blob Background"
      layout="fill" 
      objectFit="contain"
      className="w-full h-full rotate-180 opacity-95"
    />
  );
};

export default Blob;
