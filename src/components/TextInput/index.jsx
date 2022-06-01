import { TextField } from "@mui/material";


const TextInput = ({
  id,
  label,
  variant,
  myColor,
  myBgColor,
  handleOnChange,
  eValue,
  name
}) => {

  return (
    <TextField
      id={id}
      label={label}
      onChange={handleOnChange}
      defaultValue={eValue}
      name={name}
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
      focused

    />
  );
};

export default TextInput;