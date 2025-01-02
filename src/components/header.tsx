import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

type Props = { isReady: boolean };

export default function Header({ isReady }: Props) {
  return (
    <header
      className={cn("flex justify-between items-end w-full opacity-0", {
        "animate-fade-in delay-700": isReady,
      })}
    >
      <div className="font-extrabold flex gap-2">
        <h1 className="underline text-4xl underline-offset-4 decoration-wavy translate-y-3 flex">
          Who
        </h1>
        <div className="flex flex-col items-start">
          <span className="text-zinc-900/30 dark:text-zinc-100/30 translate-y-1 font-semibold -rotate-3 line-through">
            aaare you?
          </span>
          <span className="text-xl font-bold">aaaamm I?</span>
        </div>
      </div>
      <ModeToggle />
    </header>
  );
}
