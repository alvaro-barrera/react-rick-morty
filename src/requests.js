export const BASE_URL = "https://rickandmortyapi.com/api";

const createUrl = (base, path) => `${base}${path}`;

export const getTodos = () => [
  createUrl(BASE_URL, "/character"),
  {
    method: "GET",
  },
];
