import ChapterElement from "./ChapterElement";

const DisplayChapterElements = (props) => {
  return props.course.map((chapter) => {
    return (
      <li style={{ marginBottom: "1rem" }}>
        <ChapterElement name={chapter.name} video={chapter.videos} />
      </li>
    );
  });
};

export default DisplayChapterElements;
