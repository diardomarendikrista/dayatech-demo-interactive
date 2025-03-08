export const handleInitialMessages = async ({
  initialMessages,
  setLoading,
  setMessages,
}) => {
  for (const item of initialMessages) {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Tunggu 1 detik
    setMessages((prev) => [...prev, item]);
    setLoading(false);
  }
};

export const actionHandleSendMessage = async ({
  id,
  setLoading,
  setMessages,
}) => {
  setLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Tunggu 1 detik
  if (id === "mentari") {
    setMessages((prev) => [...prev, { message: "sama-sama" }]);
  }
  if (id === "psikolog") {
    setMessages((prev) => [
      ...prev,
      { message: "sama-sama, silahkan datang kembali nanti" },
    ]);
  }
  setLoading(false);
};
