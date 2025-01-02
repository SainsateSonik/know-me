import { useCallback } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { cn } from "@/lib/utils";

type Props = {
  isReady: boolean;
  onReady: () => void;
};

export default function Logo({ isReady, onReady }: Props) {
  const handleEvent = useCallback(
    (event: string) => {
      if (event === "load") {
        onReady();
      }
    },
    [onReady]
  );

  return (
    <div className="relative">
      <Player
        speed={0.5}
        autoplay
        src="https://kutti.s3.eu-north-1.amazonaws.com/dogg.json"
        className={cn(
          "w-[200px] h-[200px] opacity-0 absolute bottom-full right-full translate-x-32 translate-y-16",
          { "animate-fade-in delay-300": isReady }
        )}
        onEvent={handleEvent}
      />
    </div>
  );
}
