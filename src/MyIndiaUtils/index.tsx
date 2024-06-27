// @ts-ignore
import React from "react";

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return <a href={to}>{children}</a>;
};

export { Link };
