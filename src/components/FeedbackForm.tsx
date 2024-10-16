import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface FeedbackFormProps {
  onProgress: (progress: number) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onProgress }) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [screen, setScreen] = useState("screenOne");
  const [taskOne, setTaskOne] = useState("");
  const [taskTwo, setTaskTwo] = useState("");
  const [taskThree, setTaskThree] = useState("");

  // Real-time tips based on input
  const [tips, setTips] = useState("");

  useEffect(() => {
    const storedTaskOne = localStorage.getItem("taskOne");
    const storedTaskTwo = localStorage.getItem("taskTwo");
    const storedTaskThree = localStorage.getItem("taskTHree");
    const storedProjectName = localStorage.getItem("projectName");

    if (storedTaskOne) setTaskOne(storedTaskOne);
    if (storedTaskTwo) setTaskTwo(storedTaskTwo);
    if (storedTaskThree) setTaskThree(storedTaskThree);
    if (storedProjectName) setProjectName(storedProjectName);
  }, []);

  useEffect(() => {
    localStorage.setItem("projectName", projectName);
    localStorage.setItem("taskOne", taskOne);
    localStorage.setItem("taskTwo", taskTwo);
    localStorage.setItem("taskThree", taskThree);

    const completedFields = [projectName, taskOne, taskTwo, taskThree].filter(
      Boolean
    ).length;
    const totalFields = 4;
    const newProgress = (completedFields / totalFields) * 100;
    // const splitProgress = newProgress.int

    setProgress(newProgress);
    onProgress(newProgress);
  }, [projectName, taskOne, taskTwo, taskThree, onProgress]);

  const handleLogout = () => {
    localStorage.removeItem("projectName");
    localStorage.removeItem("taskOne");
    localStorage.removeItem("taskTwo");
    localStorage.removeItem("taskThree");
  };

  return (
    <div className="flex gap-10 ">
      <div className="max-w-2xl mx-auto">
        {screen === "screenOne" && (
          <>
            <div className="mt-10">
              <label
                className="font-bold text-2xl mb-3 mt-10"
                htmlFor="projectName"
              >
                What would you like to call your Project?
              </label>
              <input
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full mb-3 mt-4 p-3 border border-gray-300 rounded-xl "
                placeholder="Enter your project name..."
              />
              <button
                onClick={() =>
                  projectName
                    ? setScreen("screenTwo")
                    : alert("please name your project")
                }
                className="bg-red-600 mt-10 rounded-xl text-white py-3 w-[50%] text-xl"
              >
                Contine
              </button>
            </div>
          </>
        )}

        {screen === "screenTwo" && (
          <div className="mt-10">
            <label className="font-bold text-2xl my-2 mt-10 " htmlFor="taskOne">
              Excellent, now assign tasks to your new project
            </label>
            <input
              value={taskOne}
              id="tastOne"
              onChange={(e) => setTaskOne(e.target.value)}
              className="w-full my-2 p-3 border border-gray-300 rounded-xl mt-5"
              placeholder="Task one"
            />
            <label htmlFor="taskTwo">
              <input
                value={taskTwo}
                onChange={(e) => setTaskTwo(e.target.value)}
                className="w-full my-2 p-3 border border-gray-300 rounded-xl "
                placeholder="Task two"
              />
            </label>
            <input
              value={taskThree}
              onChange={(e) => setTaskThree(e.target.value)}
              className="w-full my-2 p-3 border border-gray-300 rounded-xl "
              placeholder="Task three"
            />
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setScreen("screenOne")}
                className="bg-red-300 mt-10 rounded-xl text-white py-3 w-[50%] text-xl"
              >
                Back
              </button>
              <button
                onClick={() =>
                  projectName
                    ? setScreen("screenThree")
                    : alert("please name your project")
                }
                className="bg-red-600 mt-10 rounded-xl text-white py-3 w-[50%] text-xl ml-5"
              >
                Contine
              </button>
            </div>
          </div>
        )}

        {screen === "screenThree" && (
          <div className="mt-10 w-[350px]  lg:hidden rounded-xl shadow-lg p-4 border-[1px] border-black/30 capitalize">
            <h1 className="font-bold text-2xl my-2 mt-5 ">{projectName}</h1>

            <div>
              <p className="border-b-[1px] py-3 border-black/30">{taskOne}</p>
              <p className="border-b-[1px] py-3 border-black/30">{taskTwo}</p>
              <p className="border-b-[1px] py-3 border-black/30">{taskThree}</p>
            </div>
            <button
              onClick={() => router.refresh()}
              className="bg-red-600 mt-10 rounded-xl text-white py-3 w-[50%] text-xl"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* for laptop */}
      <div className="hidden mx-auto  my-10 w-[75%] lg:block mt-10 rounded-xl shadow-lg p-4 border-[1px] border-black/30 capitalize">
        {/* <p>your project Name:</p> */}

        {projectName !== "" ? (
          <h1 className="font-bold text-2xl my-2 mt-5 ">{projectName}</h1>
        ) : (
          <p className="text-black/70">Project Name</p>
        )}

        <div>
          <p className="mt-5 text-black/70">Your Tasks:</p>
          <p className="border-b-[1px] py-3 border-black/30">{taskOne}</p>
          <p className="border-b-[1px] py-3 border-black/30">{taskTwo}</p>
          <p className="border-b-[1px] py-3 border-black/30">{taskThree}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
