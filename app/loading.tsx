import { Spin } from "antd";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="fixed inset-0 flex">
      <Spin className="m-auto" />
    </div>
  );
}
