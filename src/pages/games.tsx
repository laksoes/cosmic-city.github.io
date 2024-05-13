import Randomizer from "../components/randomizer";
import { useEffect, useState } from "react";
import { data, DataTypes } from "../data";
import Card from "../components/card";

function Games() {
  const [results, setResults] = useState<DataTypes[]>(data);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (query.length > 0) {
      const found = data.filter((game) => {
        return query.toLowerCase() === ""
          ? game
          : game.title.toLowerCase().includes(query.toLowerCase());
      });
      setResults(found);
    } else {
      setResults(data);
    }
  }, [query]);

  return (
    <>
      <h2 className="text-2xl">Games</h2>
      <div className="flex flex-col gap-2 justify-center items-center">
        <Randomzizer />
        <input
          type="text"
          className="bg-[#111] rounded-xl text-sm outline-none px-6 py-2 my-2"
          placeholder="Search games.."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="flex  justify-center">
        <div className="flex flex-wrap max-w-[80vw] my-2 gap-4">
          {results.map((game) => {
            return <Card id={game.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
