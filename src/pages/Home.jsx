import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

function Home() {
  return (
    <div>
      <Header
        title={"2025년 9월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
}

export default Home;
