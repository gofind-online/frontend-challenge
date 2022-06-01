import { React } from 'react';
import { Box, Divider, Typography, TextField } from '@mui/material';
import GoButton from '../GoButton';

const SearchBox = () => {

  return (
    <Box
      component="form"
      sx={{
        boxSizing: "border-box",
        width: "100%",
        minHeight: "10rem",
        backgroundColor: "background.main",
        boxShadow: 3,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "column",
        padding: 3,
      }}
    >
      <Box>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "10px",
          }}
        >
          Busca
        </Typography>
        <TextField
          label="Nome do Usuário"
          sx={{
            marginRight: 1,
            marginBottom: 2,
            width: 250,
            "& .css-jlr4jg-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: 'secondary.dark',
            },
            "& .css-1fxs5bu-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              fontWeight: 'bold',
              color: 'secondary.contrastText'
            }
          }}
          focused />
        <TextField
          label="E-mail"
          sx={{
            marginRight: 1,
            marginBottom: 2,
            width: 250,
            "& .css-jlr4jg-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: 'secondary.dark',
            },
            "& .css-1fxs5bu-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              fontWeight: 'bold',
              color: 'secondary.contrastText'
            }
          }}
          focused />
      </Box>
      <Divider
        variant="outlined"
        sx={{
          width: "100%",
        }}
      />
      <Box>
        <GoButton
        sx={{
          marginTop: "10px",
          boxShadow: 0
        }}
          variant="contained"
          type="search"
          marginTop="default"
        >
          Buscar
        </GoButton>
      </Box>
    </Box>
  )
}

export default SearchBox;