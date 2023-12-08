import { Spin } from "antd";
export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="fixed inset-0 flex bg-black/80 z-50">
      <Spin className="m-auto text-2xl" />
    </div>
  );
}
