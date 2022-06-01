const BASE_URL = 'https://reqres.in/api/users'


export const apiGet = async () => {
  try {
    const res = await fetch(BASE_URL);
    const json = await res.json();
    return (json.data);
  } catch (error) {
    console.error(error);
  }
}

export const getUser = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const json = await res.json();
    return (json.data);
  } catch (error) {
    console.error(error);
  }
}


// 2) PUT

