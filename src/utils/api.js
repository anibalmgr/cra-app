export function getToken(name) {
  const token = window.localStorage.getItem(name);
  console.log(token);
}

export function deleteToken(name) {
  window.localStorage.removeItem(name);
}

export function getUrl(request) {
  return `http://localhost:3001/${request}`;
}

export async function request(url, options) {
  const token = getToken("AUTH_TOKEN");
  return fetch(getUrl(url), {
    ...options,
    headers: { "Content-Type": "application/json", TOKEN: token },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
