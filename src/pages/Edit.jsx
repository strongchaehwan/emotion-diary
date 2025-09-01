import { useParams } from "react-router-dom";

function Edit() {
  const params = useParams();
  return <div>{params.id}번 수정 일기입니다.</div>;
}

export default Edit;
