import { useSearchParams } from "react-router-dom";

function Home() {
  const [params, setParams] = useSearchParams();
  console.log(params.get("size"));

  return <div>Home</div>;
}

export default Home;
