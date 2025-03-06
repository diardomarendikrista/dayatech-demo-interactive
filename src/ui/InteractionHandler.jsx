import { useEffect } from "react";
import { useAtom } from "jotai";
import { dialogWithAtom, showDialogAtom } from "store";

const InteractionHandler = () => {
  const [showDialog, setShowDialog] = useAtom(showDialogAtom);
  const [, setDialogWith] = useAtom(dialogWithAtom);

  useEffect(() => {
    const handleDialog = (event) => {
      setShowDialog(event.detail.show);
      setDialogWith(event.detail.dialogWith);
    };

    window.addEventListener("handleDialog", handleDialog);

    return () => {
      window.removeEventListener("handleDialog", handleDialog);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("updateCanMove", {
        detail: !showDialog,
      })
    );
  }, [showDialog]);

  return null;
};

export default InteractionHandler;
