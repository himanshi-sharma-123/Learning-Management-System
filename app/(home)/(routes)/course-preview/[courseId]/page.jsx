"use client";
import React, { useEffect, useState } from "react";
import { getCourseById } from "../../../../_services";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDetails";
import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetail] = useState([]);
  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((res) => {
      console.log(res);
      setCourseDetail(res.courseList);
    });
  };
  return (
    courseDetail?.name && (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            {courseDetail?.chapters[0] ? (
              <VideoPlayer videoUrl={courseDetail?.chapters[0]?.video.url} />
            ) : null}
            <CourseDetails courseDetail={courseDetail} />
          </div>

          <div className="mt-5 md:mt-0">
            <OptionSection />
            <EnrollmentSection courseDetail={courseDetail} />
          </div>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
