import Card from "../components/card";
import { data } from "../data";

function Games() {
  return (
    <>
      <h2 className="text-2xl">Games</h2>
      <div className="flex  justify-center">
        <div className="flex flex-wrap max-w-[80vw] gap-4">
          {data.map((game) => {
            return <Card id={game.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Games;
