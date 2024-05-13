import { useEffect, useState, ReactNode } from "react";

function Randomizer() {
  const [random, setRandom] = useState<ReactNode | null>(null);
  const randomize = () => {
    const a = [
      <p>idk what x² equals</p>,
      <p>your cooked.</p>,
      <p>This UI is very similar to nate-games 🤨</p>,
      <p>i think there is a teacher behind you...</p>,
      <p>use a remote computer to play roblox on ur chromebook.</p>,
      <p>
        never gona give u up{" "}
        <img
          src="/image/emojis/rickroll.gif"
          className="h-4 w-4 inline-block"
        />
      </p>,
      <p>gta6 = irl</p>,
      <p>6 x 9 + 6 + 9 = 62</p>,
      <p>Ctrl+shift+q+q gives you free v-bucks</p>,
      <p>alt+tab to switch windows</p>,
      <p>I know where you live</p>,
      <p>spanish or vanish</p>,
    ];
    const i = Math.floor(Math.random() * a.length);
    setRandom(a[i]);
  };

  useEffect(() => {
    randomize();
  }, []);
  return (
    <>
      {random}
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
