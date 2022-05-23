// 1) GET
const apiGet = async ( ) => {
  try{
    const res = await fetch('https://reqres.in/api/users');
    const json = await res.json();
    return(json.data);
  } catch (error) {
    console.error(error)
  }

}
export default apiGet;


// 2) PUT

