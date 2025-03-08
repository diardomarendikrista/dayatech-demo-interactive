import {
  ArrowUpIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import ButtonSmall from "Components/ButtonSmall";
import TextArea from "Components/TextArea";
import { cn } from "lib/utils";
import { actionHandleSendMessage } from "./actions";

export default function InputChat({
  id,
  loading,
  setLoading,
  message,
  setMessage,
  setMessages,
}) {
  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!message || loading) return;

    setMessages((prev) => {
      const newMessage = { isYou: true, message: message };
      return [...prev, newMessage];
    });
    setMessage("");

    actionHandleSendMessage({ id, setLoading, setMessages });
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isMobile || e.shiftKey) {
        // On mobile or Shift+Enter, insert a new line
        setMessage((prev) => prev + "");
      } else {
        // On desktop Enter (without Shift), send the message
        e.preventDefault();
        handleSendMessage();
      }
    }
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="mb-5 gap-2 flex items-center"
    >
      <div
        className={`relative transition-all duration-300 ${
          message.length > 0 ? "flex-[0.99]" : "flex-[1]"
        }`}
      >
        <TextArea
          placeholder="let me help you...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLine={10}
          autoResize
          className={cn({ "pl-[34px]": !message })}
        />

        {!message && (
          <>
            <div className="absolute top-[50%] left-[12px] translate-y-[-75%]">
              <MagnifyingGlassIcon
                color="#D1D5DB"
                width={"12px"}
                style={{ stroke: "#D1D5DB", strokeWidth: 2 }}
              />
            </div>
            <div className="absolute top-[50%] right-[12px] translate-y-[-75%]">
              <SparklesIcon
                color="#D1D5DB"
                width={"14px"}
                style={{ stroke: "#D1D5DB", strokeWidth: 2 }}
              />
            </div>
          </>
        )}
      </div>
      {message.length > 0 && (
        <div>
          <ButtonSmall
            className="transition-all duration-300"
            type="submit"
            disabled={loading}
          >
            <ArrowUpIcon
              width="12px"
              color="#fff"
              style={{ stroke: "#fff", strokeWidth: 1 }}
            />
          </ButtonSmall>
        </div>
      )}
    </form>
  );
}
