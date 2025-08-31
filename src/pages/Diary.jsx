import { useParams } from "react-router-dom";

function Diary() {
  const params = useParams();
  console.log(params);
  return <div>Diary</div>;
}

export default Diary;
