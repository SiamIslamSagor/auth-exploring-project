import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl">This is Home for: {data.name}</h2>
    </div>
  );
};

export default Home;
