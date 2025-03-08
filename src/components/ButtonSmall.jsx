import { cn } from "lib/utils";

export default function ButtonSmall({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "p-[12px] flex items-center justify-center rounded-full bg-[#6062F2] hover:bg-[#4c4ad5]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
