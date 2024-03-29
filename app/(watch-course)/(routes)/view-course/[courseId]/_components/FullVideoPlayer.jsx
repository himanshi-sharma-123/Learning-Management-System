import { CheckCircle2, Delete } from "lucide-react";
import React, { useContext } from "react";
import CompletedChapterContext from "../../../../../_context/CompletedChapterContext";
import { markChapterCompletedService } from "./../../../../../_services/index";
function FullVideoPlayer({ userCourse, activeChapter }) {
  console.log(activeChapter);
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );
  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  const markChapterCompleted = async () => {
    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }
    completedChapter
      ? setCompletedChapter([
          ...completedChapter,
          {
            chapterId: activeChapter?.chapterNumber + "",
          },
        ])
      : setCompletedChapter([
          {
            chapterId: activeChapter?.chapterNumber + "",
          },
        ]);
    console.log(completedChapter);
    await markChapterCompletedService(
      userCourse.id,
      activeChapter?.chapterNumber
    ).then((res) => {
      console.log(res);
    });
  };

  // const markChapterCompleted = async () => {
  //   if (!completedChapter?.length) {
  //     setCompletedChapter([]);
  //   }
  //   completedChapter
  //     ? setCompletedChapter([
  //         ...completedChapter,
  //         {
  //           chapterId: activeChapter?.chapterNumber + "",
  //         },
  //       ])
  //     : setCompletedChapter([
  //         {
  //           chapterId: activeChapter?.chapterNumber + "",
  //         },
  //       ]);
  //   console.log(completedChapter);
  //   await markChapterCompleted(
  //     userCourse.id,
  //     activeChapter?.chapterNumber
  //   ).then((res) => {
  //     console.log(res);
  //   });
  // };

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
        {!isChapterCompleted(activeChapter?.chapterNumber) ? (
          <button
            className="bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800"
            onClick={() => markChapterCompleted()}
          >
            <CheckCircle2 /> <h2>Mark as Completed</h2>
          </button>
        ) : (
          <button className=" text-purple-600 border border-purple-600 p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-100">
            <Delete /> <h2>Mark InCompleted</h2>
          </button>
        )}
      </div>
    </div>
  );
}

export default FullVideoPlayer;
