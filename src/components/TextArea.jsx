import { useEffect, useRef } from "react";
import { cn } from "lib/utils";

export default function TextArea({
  className,
  value,
  maxLine = 10,
  autoResize,
  minHeight,
  ...props
}) {
  const textareaRef = useRef(null);

  const handleAutoResize = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";

      const newHeight = textarea.scrollHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(textarea).lineHeight,
        10
      );

      const maxHeight = lineHeight * maxLine;
      textarea.style.height = `${Math.min(newHeight, maxHeight)}px`;

      // 37 is minimum height when only 1 row
      if (newHeight <= 37) {
        textarea.style.overflow = "hidden";
      } else {
        textarea.style.overflow = "auto";
      }
    }
  };

  useEffect(() => {
    if (autoResize) {
      handleAutoResize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, autoResize]);

  return (
    <div className="w-full relative">
      <textarea
        ref={textareaRef}
        className={cn(
          "w-full px-[12px] py-[8px] rounded-[10px] border border-[#D1D5DB] ",
          "font-['Plus_Jakarta_Sans'] font-normal text-[14px] leading-[21px] tracking-[0px] text-[#374151]",
          {
            "resize-none": autoResize,
            "focus:outline-[#6062F2]": true,
          },
          className
        )}
        rows={1}
        value={value}
        style={{
          minHeight: minHeight || "38px",
        }}
        {...props}
      />
    </div>
  );
}
