import { Box, Button } from '@mui/material';
import TextInput from '../TextInput';
import { useState } from 'react'

const UserForm = ({
  handleSubmit,
  userData,
  btnText
}) => {

  const [user, setUser] = useState(userData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(user)
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (


    <Box component="form" onSubmit={submit} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: 2
    }}>
      <TextInput
        name="first_name"
        label="Nome"
        eValue={user.first_name}
        handleOnChange={handleChange}
      />

      <TextInput
        name="last_name"
        label="Sobrenome"
        eValue={user.last_name}
        handleOnChange={handleChange}
      />

      <TextInput
        name="email"
        label="Email"
        eValue={user.email}
        handleOnChange={handleChange}
      />
      <Button onClick={submit} variant="contained">{btnText}</Button>
    </Box>
  )

}

export default UserForm;