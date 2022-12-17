import Image from "next/image";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image width={1080} height={576} src="/404page.jpg"></Image> <br />
      </div>
      <Link href="/">
        <button className="btn btn-xl btn-primary  ">Back</button>
      </Link>
    </div>
  );
};

export default errorPage;
