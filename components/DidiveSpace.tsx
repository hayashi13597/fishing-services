import React from "react";
interface DidiveSpaceProps {
  coefficient?: number;
}
const DidiveSpace = ({ coefficient = 1 }: DidiveSpaceProps) => {
  return <div style={{ height: coefficient * 4 }}></div>;
};

export default DidiveSpace;
