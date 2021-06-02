export default async function notify(msg) {
  const notification = document.querySelector(".notifications");
  const notificationText = document.querySelector(".notifications span");
  notificationText.textContent = msg;
  notification.style.top = "-25px";

  setTimeout(() => {
    notification.style.top = "-92px";
    notificationText.textContent = "";
  }, 2000);
}
