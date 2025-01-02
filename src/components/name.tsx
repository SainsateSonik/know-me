import { useCallback, useState } from "react";
import { REGEXP_ONLY_CHARS } from 'input-otp'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = { isReady: boolean };

export default function Name({ isReady }: Props) {
  const [name, setName] = useState("");

  const onChange = useCallback((value: string) => {
    setName(value);
    if (value.length < 5) return;

    const isKutti = value.toLowerCase() === "kutti";
    const isSurya = value.toLowerCase() === "surya";
    const msg = isKutti
      ? "Correct my friend 🎉"
      : isSurya
      ? "Yeahhh! but you might not know me very well."
      : "Wrong, well stranger, I am Surya Sainsate.";
    alert(msg);
  }, []);

  return (
    <div
      className={cn("flex flex-col gap-2 items-start mt-12 opacity-0", {
        "delay-1000 animate-glide-up": isReady,
      })}
    >
      <Label htmlFor="otp" className="opacity-60 flex">
        Guess my name!
      </Label>
      <InputOTP
        id="otp"
        autoFocus
        maxLength={5}
        inputMode="text"
        value={name}
        onChange={onChange}
        pattern={REGEXP_ONLY_CHARS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
