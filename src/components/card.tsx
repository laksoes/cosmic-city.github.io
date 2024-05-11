import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

function Card({ id }: { id: string }) {
  const [game, setData] = useState<any | null>(null);

  useEffect(() => {
    const results = data.find((game) => game.id === id);
    if (results) {
      setData(results);
    }
  }, []);

  const Loading = () => {
    return (
      <div className="animation-pulse bg-[#121212] bg-center bg-cover bg-no-repeat inline-block h-36 w-36 rounded-xl" />
    );
  };
  return (
    <>
      {game ? (
        <Link to={`/game/${id}`}>
          <div
            className={`group relative inline-block bg-[#111] h-36 w-36 rounded-xl transition active:scale-90 hover:opacity-75 bg-cover bg-center`}
            style={{
              backgroundImage: `url("${game.image}")`,
            }}
          >
            <span className="opacity-0 px-0 mx-0 -bottom-1 transition-all duration-150 absolute group-hover:inline-block group-hover:bottom-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm text-white [text-shadow:0px_0px_0.2rem_#000]">
              {game.title}
            </span>
          </div>
        </Link>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Card;
