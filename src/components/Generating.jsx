import { loading } from "../assets";
import {  SpinnerLoader } from "./ui/Loader";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      
      <SpinnerLoader/>
      Generating response
    </div>
  );
};

export default Generating;
