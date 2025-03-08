import ChatBalloon from "components/ChatBalloon";
import { useEffect, useRef, useState } from "react";
import InputChat from "./InputChat";
import { cn } from "lib/utils";
import { handleInitialMessages } from "./actions";

export default function MessageSection({ id, initialMessages = [], height }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (initialMessages?.length > 0) {
      handleInitialMessages({ initialMessages, setLoading, setMessages });
    }
  }, [initialMessages]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={cn({ "h-[90%]": !height })}
      style={{ height }}
    >
      <div
        className={cn(
          "flex-[3] h-full mb-4 pb-4 max-w-full",
          "border-b border-[#CCD6E0] overflow-y-auto "
        )}
      >
        <div className="w-full flex flex-col gap-[32px]">
          {messages?.length > 0 &&
            messages.map((item, i) => (
              <ChatBalloon
                key={i}
                isYourMessage={item?.isYou}
                message={item?.message}
              />
            ))}
          {loading && <ChatBalloon customMessage={"..."} />}
        </div>
        <span ref={messagesEndRef} />
      </div>

      {/* input section */}
      <InputChat
        id={id}
        loading={loading}
        setLoading={setLoading}
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
      />
    </div>
  );
}
