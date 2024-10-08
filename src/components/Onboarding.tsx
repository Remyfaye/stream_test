import { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignUp from "./SignUp";

interface SignUpProps {
  setToken: (token: string) => void;
}

const Onboarding: React.FC<SignUpProps> = ({ setToken }) => {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      {!isSignup ? (
        <div className="p-8 flex lg:flex-row h-screen lg:gap-5  w-full flex-col justify-center items-center ">
          <Image
            className=" object-cover h-[450px] w-[500px] lg:-my-[3.5rem] -my-10 bg-red-400 rounded-full"
            src="/assets/ICFPLUS.png"
            width={1000}
            height={1000}
            alt="img"
          />
          <div>
            <h1 className="text-2xl text-center font-bold mb-5 text-red-700 my-10 lg:my-5">
              ICFPLUS
            </h1>
            <p className="text-xl text-center lg:w-[70%] mx-auto">
              A plartform built for a new way of working and colaborating
            </p>
            <button
              onClick={() => setIsSignup(true)}
              className="bg-red-600 lg:my-10 my-20 py-3  w-[100%] text-xl text-white rounded-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <SignUp setToken={setToken} />
      )}
    </>
  );
};

export default Onboarding;
