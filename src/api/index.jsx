const BASE_URL = 'https://reqres.in/api/users'


const apiGet = async () => {
  try {
    const res = await fetch(BASE_URL);
    const json = await res.json();
    return (json.data);
  } catch (error) {
    console.error(error)
  }

}
export default apiGet;


// 2) PUT

