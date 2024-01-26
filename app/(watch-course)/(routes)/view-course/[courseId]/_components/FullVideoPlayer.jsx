import { CheckCircle2 } from "lucide-react";
import React from "react";

function FullVideoPlayer({ activeChapter }) {
  console.log(activeChapter);
  return (
    <div className="p-5">
      <video
        width="1000"
        height="250"
        key={activeChapter?.video?.url}
        controls
        controlsList="nodownload"
      >
        <source src={activeChapter?.video?.url} type="video/mp4" />
      </video>
      <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
        <h2 className="text-[20px] font-medium">{activeChapter?.name}</h2>
        <button className="bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800">
          <CheckCircle2 /> <h2>Mark as Completed</h2>
        </button>
      </div>
    </div>
  );
}

export default FullVideoPlayer;
