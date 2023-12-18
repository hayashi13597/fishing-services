import moment from "moment";

export function isNumeric(input: string) {
  return /^\d+$/.test(input);
}
export function formatMoney(price: number) {
  if (isNaN(price)) {
    return price;
  }
  return (
    Math.floor(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"
  );
}
export function formatQuantity(quantity: number) {
  if (quantity >= 1_000) return (quantity / 1000).toFixed(1) + "K";
  else if (quantity >= 1_000_000)
    return (quantity / 1_000_000).toFixed(1) + "M";
  else if (quantity >= 1_000_000_000)
    return (quantity / 1_000_000_000).toFixed(1) + "B";
  return quantity;
}
export function formatDate(date: string) {
  return moment(date).format("DD/MM/YYYY");
}
export function formatDateTime(date: string) {
  return moment(date).format("DD/MM/YYYY  HH:mm:ss");
}
export function ScroolToBottom(element: HTMLElement, time = 1000) {
  if (time == 0) {
    element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });

    return;
  }
  const idTimeout = setTimeout(() => {
    element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });

    clearTimeout(idTimeout);
  }, time);
}
const timeSetTing: any = {
  months: "tháng",
  month: "tháng",
  years: "năm",
  year: "năm",
  minute: "phút",
  minutes: "phút",
  day: "ngày",
  days: "ngày",
  hours: "giờ",
  hour: "giờ",
  second: "giây",
  seconds: "giây",
};
export function HandleTimeDiff(timestamp: any, timeEnd = "") {
  let result: any = !timeEnd
    ? moment(timestamp).fromNow()
    : moment(timestamp).from(timeEnd);

  if (result.includes("a few seconds ago")) return "vài giây trước";
  if (result[1] === "n") {
    result = result.replace("an", "1");
  } else if (result[0] === "a") {
    result = result.replace("a", "1");
  }

  result = result.replace("ago", "trước");
  result = result.split(" ");

  if (timeSetTing[result[1]]) {
    result[1] = timeSetTing[result[1]];
  }
  return result.join(" ");
}

export const DOMAIN_HOST = "https://www.ocdaokyda.online";
export function isTimeEnd(timecreate) {
  return new Date(timecreate).getTime() - new Date(Date.now()).getTime() > 0;
}
export function TimeDiff(timecreate) {
  return new Date(timecreate).getTime() - new Date(Date.now()).getTime();
}
export const handleOpenNewWindown = (link: string, name?: string) => {
  if (!link) return;
  const url = `https://www.facebook.com/sharer/sharer.php?u=${`${DOMAIN_HOST}/${link}`}`;
  const windowName = `Chia sẻ ${name}`;
  const windowFeatures = "width=800,height=600";
  window.open(url, windowName, windowFeatures);
};
export const DiscountCalc = (price: number, sales: any) => {
  if (!sales) return "";
  return formatMoney(Math.floor((1 + sales * 0.01) * price));
};
