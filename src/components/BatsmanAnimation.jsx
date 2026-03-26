import { useEffect } from "react";

export default function BatsmanAnimation({ trigger, setShowBat }) {
  useEffect(() => {
    if (trigger) {
      setShowBat(true);

      setTimeout(() => {
        setShowBat(false);
      }, 800);
    }
  }, [trigger]);

  return null;
}