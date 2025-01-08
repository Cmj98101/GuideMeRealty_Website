import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  imgSrc: string;
  buttonName: string;
}
function RepeaterItem({ title, children, imgSrc, buttonName }: Props) {
  return (
    <div className="flex flex-col w-full ">
      <div className="relative">
        <img className="w-full" src={imgSrc} alt="Kitchen Photo" />
        <button
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 bg-black text-white outline-black py-3 px-9 rounded`}
        >
          {buttonName}
        </button>
      </div>
      <div className="flex flex-col items-center p-9">
        <h2 className="w-full text-left text-3xl my-3">{title}</h2>
        <p className="w-full text-left">{children}</p>
      </div>
    </div>
  );
}

export default RepeaterItem;
