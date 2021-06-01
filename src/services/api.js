import notify from "../services/notify";

export const settings = {
  host: "",
};

async function request(url, options) {
  try {
    const response = await fetch(url, options);

    if (response.status == 404 || response.status == 400) {
      const error = await response.json();
      notify(error.error);
      return;
      // throw new Error(error.message);
    }

    if (response.ok == false) {
      const error = await response.json();
      notify(error.message);
      return;
    }

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return response;
    }
  } catch (error) {
    throw error;
  }
}

function getOptions(method = "get", body) {
  const options = {
    method,
    headers: {
      "X-Parse-Application-Id": "4YzVQuVpQUEwpa07YV8ArY1IP6p6dn8xhj1Yg4Aq",
      "X-Parse-REST-API-Key": "uPAaKCRmQ2hPYXw4ug6nlMkp2pB0MxWmF0BZvbMA",
    },
  };

  const token = sessionStorage.getItem("authToken");
  if (token != null) {
    options.headers["X-Parse-Session-Token"] = token;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function get(url) {
  return await request(url, getOptions());
}

export async function post(url, data) {
  return await request(url, getOptions("POST", data));
}

export async function put(url, data) {
  return await request(url, getOptions("PUT", data));
}

export async function del(url) {
  return await request(url, getOptions("DELETE"));
}

export async function login(username, password) {
  const result = await post(settings.host + "/login", { username, password });
  if (result) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("authToken", result.sessionToken);
    sessionStorage.setItem("userId", result.objectId);
  }

  return result;
}

export async function register(email, username, password) {
  const result = await post(settings.host + "/users", { email, username, password });
  if (result) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("authToken", result.sessionToken);
    sessionStorage.setItem("userId", result.objectId);
  }

  return result;
}

export async function logout() {
  const result = await post(settings.host + "/logout", {});
  if (result) {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userId");
  }

  return result;
}
