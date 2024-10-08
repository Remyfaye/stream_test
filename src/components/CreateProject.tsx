import React, { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm";

const CreateProject = () => {
  const [completionRate, setCompletionRate] = useState(0);
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleProgress = (progress: number) => {
    setCompletionRate(progress);
  };
  return (
    <div className="p-5 lg:p-10">
      <h1 className="text-3xl font-bold text-red-600 mb-3 capitalize">
        Hi, {username}
      </h1>
      {/* <p>Welcome, you can now reate a new project</p> */}

      {completionRate === 100 ? (
        <p className="">Congratulations, your project has been created</p>
      ) : (
        <p className=" font-semibold my-2">Progress: {completionRate}%</p>
      )}
      <FeedbackForm onProgress={handleProgress} />
    </div>
  );
};

export default CreateProject;
