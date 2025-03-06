import ControllerButton from "components/ControllerButton";
import { useState } from "react";

export default function ControllerMobile() {
  const [mobileInput, setMobileInput] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  const updateInput = (direction, isPressed) => {
    const newInput = { ...mobileInput, [direction]: isPressed };
    setMobileInput(newInput);
    window.dispatchEvent(new CustomEvent("mobileMove", { detail: newInput }));
  };

  const triggerAction = () => {
    window.dispatchEvent(new CustomEvent("mobileAction"));
  };

  return (
    <div className="absolute w-full bottom-[10px] left-[50%] transform -translate-x-1/2  text-[#fff] sm:hidden">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center ms-4">
          <ControllerButton
            onTouchStart={() => updateInput("up", true)}
            onTouchEnd={() => updateInput("up", false)}
          >
            ▲
          </ControllerButton>
          <div className="flex gap-2">
            <ControllerButton
              onTouchStart={() => updateInput("left", true)}
              onTouchEnd={() => updateInput("left", false)}
            >
              ◀
            </ControllerButton>
            <ControllerButton
              onTouchStart={() => updateInput("down", true)}
              onTouchEnd={() => updateInput("down", false)}
            >
              ▼
            </ControllerButton>
            <ControllerButton
              onTouchStart={() => updateInput("right", true)}
              onTouchEnd={() => updateInput("right", false)}
            >
              ▶
            </ControllerButton>
          </div>
        </div>
        <div className="mr-5">
          <ControllerButton onClick={triggerAction}>
            <b>X</b>
          </ControllerButton>
        </div>
      </div>
    </div>
  );
}
