export function getToken(name) {
  const token = window.localStorage.getItem("AUTH_TOKEN");
  return token;
}

export function deleteToken(name) {
  window.localStorage.removeItem(name);
}

export function getUrl(request) {
  // uncoment the line below if you want to use the local API, don't forget to start the api on the terminal, cd api node app.js
  return `http://localhost:3001/${request}`;
  // return `https://server-d-task.herokuapp.com/${request}`;
}

export async function request(url, options) {
  // this token has to be send with every request
  // const token = getToken("AUTH_TOKEN");
  console.log("request api called with", getUrl(url), options);
  const res = await fetch(getUrl(url), {
    ...options,
    credentials: "include"
  });
  const data = await res.json();
  console.log(data);
  return data;
}












// Example

// export function getCookie(name: string) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts?.pop()?.split(";").shift();
// }

// export function deleteCookie(name: string) {
//   document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }

// export const client = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
//   headers: {
//     "Content-type": "application/json",
//     "X-CSRF-TOKEN": getCookie("csrf_access_token") || "",
//   },
//   xsrfCookieName: "csrf_access_token",
//   xsrfHeaderName: "X-CSRF-TOKEN",
// });

// export function getUrl(request: RequestInfo) {
//   return `${process.env.REACT_APP_API_URL}${request}`;
// }

// export async function request(
//   url: RequestInfo,
//   options?: RequestInit | undefined
// ) {
//   return fetch(getUrl(url), {
//     ...options,
//     credentials: "include",
//     headers: {
//       "Content-type": "application/json",
//       "X-CSRF-TOKEN": getCookie("csrf_access_token") || "",
//     },
//   });
// }

// export function isTokenValid() {
//   return !!UserService().user;
// }

// export async function fetcher(url: string) {
//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//   });

//   if (!res.ok) {
//     throw new Error("Error found");
//   }

//   return res.json();
// }

// export function handleToastError(
//   response:
//     | AxiosResponse<{
//         errors: [
//           {
//             code: string;
//             message: string;
//             parameter: string;
//             value: string;
//           }
//         ];
//       }>
//     | undefined
// ) {
//   if (!response) return;
//   if (!response?.data.errors || !response.data.errors[0]) {
//     sendNotification("error", "Something went wrong");
//     return;
//   }
//   sendNotification("error", response?.data.errors[0].message);
// }