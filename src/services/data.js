import * as api from "./api.js";

const host = "https://parseapi.back4app.com";
api.settings.host = host;

export const login = api.login;
export const logout = api.logout;
export const register = api.register;

export async function createPost(body) {
  return await api.post(host + "/classes/posts", body);
}

export async function getAllPosts() {
  return await api.get(host + "/classes/posts");
}

export async function getWeather(code) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${code}&appid=3202f164ae0045fe8b12d0028ad1c950`);
}

export async function getPostById(id) {
  const { results } = await api.get(host + "/classes/posts");
  return results.filter((post) => post.objectId == id);
}

export async function getUserPosts() {
  const username = sessionStorage.getItem("username");
  const { results } = await api.get(host + "/classes/posts");
  return results.filter((post) => post.username == username);
}

export async function editPost(id, body) {
  return await api.put(`${host}/classes/posts/${id}`, body);
}

export async function deletePost(id) {
  return await api.del(host + "/classes/posts/" + id);
}
