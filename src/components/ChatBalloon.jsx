import { cn } from "lib/utils";
import { useEffect } from "react";

export default function ChatBalloon({
  className,
  isYourMessage,
  message,
  customMessage,
}) {
  useEffect(() => {}, []);

  return (
    <div className={cn("flex items-center gap-[72px]")}>
      {isYourMessage && <div></div>}

      <div
        className={cn({
          "w-[50%] flex-1 gap-2": true,
          "flex justify-end": isYourMessage,
        })}
      >
        <div
          className={cn(
            "inline-block px-2.5 py-3",
            "rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[2px]",
            "font-plus-jakarta font-normal text-xs leading-4 tracking-normal",
            isYourMessage
              ? "bg-[#6062F2] rounded-br-[2px] rounded-bl-[16px] text-[#F9FAFB]"
              : "bg-[#E5E7EB]",
            className
          )}
        >
          <div className="w-full overflow-x-auto markdown-wrapper">
            {message && <>{message}</>}
            {customMessage && customMessage}
          </div>
        </div>
      </div>
    </div>
  );
}
