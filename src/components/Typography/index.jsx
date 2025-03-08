// components.js

import { cn } from "lib/utils";

export function H1({
  children,
  fontWeight = "font-bold",
  color = "text-[#1F2937]",
  fontSize = "text-[16px]",
  lineHeight = "leading-5",
  className = "",
  ...props
}) {
  return (
    <h1
      className={cn(
        fontWeight,
        fontSize,
        lineHeight,
        color,
        "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  fontWeight = "font-bold",
  color = "text-[#1F2937]",
  fontSize = "text-base",
  lineHeight = "leading-4",
  className = "",
  ...props
}) {
  return (
    <h2
      className={cn(
        fontWeight,
        fontSize,
        lineHeight,
        color,
        "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  fontWeight = "font-normal",
  color = "text-[#1F2937]",
  fontSize = "text-base",
  lineHeight = "leading-4",
  className = "",
  ...props
}) {
  return (
    <h3
      className={cn(
        fontWeight,
        fontSize,
        lineHeight,
        color,
        "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function P1({
  children,
  fontWeight = "font-normal",
  color = "text-[#1F2937]",
  fontSize = "text-base",
  lineHeight = "leading-6",
  className = "",
  ...props
}) {
  return (
    <p
      className={cn(
        fontWeight,
        fontSize,
        lineHeight,
        color,
        "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
