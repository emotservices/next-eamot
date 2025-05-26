"use client";

import { addMouse } from "@/utlis/addMouse";
import { useEffect, useState } from "react";

export default function Mouse() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      addMouse();
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="tf-mouse tf-mouse-outer"></div>
      <div className="tf-mouse tf-mouse-inner"></div>
    </>
  );
}
