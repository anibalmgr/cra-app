export function getToken(name) {
  const token = window.localStorage.getItem("AUTH_TOKEN");
  return token;
}

export function deleteToken(name) {
  window.localStorage.removeItem(name);
}

export function getUrl(request) {
  return `http://localhost:3001/${request}`;
}

export async function request(url, options) {
  // this token has to be send with every request
  // const token = getToken("AUTH_TOKEN");

  const res = await fetch(getUrl(url), {
    ...options,
    mode: "cors",
  });
  return res.json();
}
