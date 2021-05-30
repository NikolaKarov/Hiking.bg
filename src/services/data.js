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

export async function getPostById(id) {
  const { results } = await api.get(host + "/classes/posts");
  return results.filter((post) => post.objectId == id);
}

export async function getUserPosts() {
  const username = sessionStorage.getItem("username");
  const { results } = await api.get(host + "/classes/posts");
  return results.filter((post) => post.username == username);
}

export async function likePost(id, body) {
  return await api.put(`${host}/classes/posts/${id}`, body);
}

// export async function createSong(name, artist) {
//   const username = sessionStorage.getItem("username");
//   return await api.post(host + "/classes/Songs", { name, artist, username });
// }

// export async function deleteArtist(id) {
//   return await api.del(host + "/classes/Artists/" + id);
// }

// export async function deleteSong(id) {
//   return await api.del(host + "/classes/Songs/" + id);
// }
