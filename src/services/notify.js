export default async function notify(msg) {
  const notification = document.querySelector(".notifications");
  const notificationText = document.querySelector(".notifications span");
  notificationText.textContent = msg;
  notification.style.top = "-35px";

  setTimeout(() => {
    notification.style.top = "-70px";
    notificationText.textContent = "";
  }, 2000);
}
