import { useEffect, useState, ReactNode } from "react";

function Randomizer() {
  const [random, setRandom] = useState<ReactNode | null>(null);
  const Emoji = ({ src }: { src: string }) => {
    return <img src={src} className="h-8 w-8 inline-block" />;
  };
  const randomize = () => {
    const a = [
      <>idk what x² equals</>,
      <>your cooked.</>,
      <>Is that a teacher behind you?</>,
      <>Erm, What the sigma?</>,
      <>
        This UI is very similar to something...{" "}
        <Emoji src="/image/emojis/sus.png" />
      </>,
      <>roblox &lt; minecraft & fortnite</>,
      <>
        never gona give u up <Emoji src="/image/emojis/rickroll.gif" />
      </>,
      <>gta6 = irl</>,
      <>
        off+reload gives you free v-bucks{" "}
        <Emoji src="/image/emojis/mewing.gif" />
      </>,
      <>alt+tab to switch windows</>,
      <>
        ik where u live... <Emoji src="/image/emojis/duo.png" />
      </>,
      <>
      shh dont say anything <Emoji src="/image/emojis/shhmewing.gif" />
      </>,
      <>are you a mewing king?</>,
      <>sigma ohio rizzler</>,
    ];
    const i = Math.floor(Math.random() * a.length);
    setRandom(a[i]);
  };

  useEffect(() => {
    randomize();
  }, []);
  return (
    <>
      <p className="h-8 flex justify-center items-center">{random}</p>
      <button
        className="group inline-flex justify-center items-center transition-all active:rotate-[-360deg] active:scale-75"
        onClick={() => randomize()}
      >
        <svg
          viewBox="0 0 24 24"
          height={20}
          width={20}
          fill="#fff"
          className="group-hover:fill-[#ddd] group-active:fill-[#888]"
        >
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"></path>
        </svg>
      </button>
    </>
  );
}

export default Randomizer;
