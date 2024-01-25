import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseLists {
      courseLists {
        name
        banner {
          url
        }
        free
        id
        totalChapters
        tags
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id, userEmail) => {
  const query =
    gql`
    query course {
      courseList(where: { id: "` +
    id +
    `" }) {
        chapters {
          ... on Chapter {
            id
            name
            video {
              url
            }
            youtubeUrl
          }
        }
        description
        name
        id
        free
        totalChapters
      }
          userEnrollCourses(where: {courseId: "` +
    id +
    `", userEmail: "` +
    userEmail +
    `"}) {
    courseId
    userEmail
    completedChapter
  }

    }


  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const EnrollCourse = async (courseId, useEmail) => {
  const mutationQuery =
    gql`
    mutation EnrollCourse {
      createUserEnrollCourse(
        data: { userEmail: "` +
    useEmail +
    `", courseId: "` +
    courseId +
    `" }
      ) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublishCourse = async (id) => {
  const mutationQuery =
    gql`
    mutation EnrollCourse {
      publishUserEnrollCourse(where: { id: "` +
    id +
    `" })
    {
      id
    }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
