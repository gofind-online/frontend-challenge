import { Button } from '@mui/material';
import { Search, PersonAdd } from '@mui/icons-material/';


const iconTypes = {
  personAdd: <PersonAdd />,
  search: <Search />
};

const margins = {
  default: 2,
};

const borderSets = {
  light: '1px solid #AAAAAA',
};

const GoButton = ({
  children,
  type,
  variant,
  marginTop,
  color,
  bgColor,
  borderSet,
  typeColor
}) => {

  return (
    <Button
      variant={variant}
      color={typeColor}
      sx={{
        boxShadow: 0,
        paddingLeft: "16px",
        paddingRight: "34px",
        borderRadius: "4px",
        marginTop: margins[marginTop],
        color: color,
        backgroundColor: bgColor,
        border: borderSets[borderSet]
      }}
    >
      <span style={{
        display: "flex",
        alignItems: "center",
        marginRight: "8px"
      }}> {iconTypes[type]} </span>
      {children}
    </Button>
  );
};

export default GoButton;
