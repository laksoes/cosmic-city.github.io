import { useEffect, useState, ReactNode } from "react";

function Randomizer() {
  const [random, setRandom] = useState<ReactNode | null>(null);
  const randomize = () => {
    const a = [
      <>idk what x² equals</>,
      <>your cooked.</>,
      <>This UI is very similar to nate-games 🤨</>,
      <>i think there is a teacher behind you...</>,
      <>use a remote computer to play roblox on ur chromebook.</>,
      <>
        never gona give u up{" "}
        <img
          src="/image/emojis/rickroll.gif"
          className="h-8 w-8 inline-block"
        />
      </>,
      <>gta6 = irl</>,
      <>6 x 9 + 6 + 9 = 69</>,
      <>Ctrl+shift+q+q gives you free v-bucks</>,
      <>alt+tab to switch windows</>,
      <>I know where you live</>,
      <>spanish or vanish</>,
    ];
    const i = Math.floor(Math.random() * a.length);
    setRandom(a[i]);
  };

  useEffect(() => {
    randomize();
  }, []);
  return (
    <>
      <p className="h-8">{random}</p>
      <button
        className="inline-flex justify-center items-center"
        onClick={() => randomize()}
      >
        <svg viewBox="0 0 24 24" height={20} width={20} fill="#fff">
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"></path>
        </svg>
      </button>
    </>
  );
}

export default Randomizer;
