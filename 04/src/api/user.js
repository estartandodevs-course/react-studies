export const getUsers = async (page) => {
  const data = await fetch(`https://reqres.in/api/users?page=${page}`);
  const response = await data.json();
  return response;
};

export const getUserById = async (id) => {
  const data = await fetch(`https://reqres.in/api/users/${id}`);
  const response = await data.json();
  return response;
};
