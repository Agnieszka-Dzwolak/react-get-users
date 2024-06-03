const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`Users cannot be fetched with status: ${res.status} `);
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.error(err);
  }
};

export default getUsers;
