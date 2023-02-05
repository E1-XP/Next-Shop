import { useRef, useEffect, useState, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface Props {
  selector: string;
}

export const ClientSidePortal = ({
  children,
  selector,
}: PropsWithChildren<Props>) => {
  const ref = useRef<Element | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setIsMounted(true);
  }, [selector]);

  return isMounted && ref.current ? createPortal(children, ref.current) : null;
};
