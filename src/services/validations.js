import notify from "./notify";

export default function validate(data) {
  if (data.title.length < 4) {
    notify("Заглавието трябва да съдържа поне 3 символа.");
    return false;
  }

  if (data.description.length < 11) {
    notify("Описанието трябва да съдържа поне 10 символа.");
    return false;
  }

  if (data.image.length < 1) {
    notify("Моля добавете снимка.");
    return false;
  }

  if (data.location.length < 1) {
    notify("Моля добавете местоположение.");
    return false;
  }
  return true;
}
