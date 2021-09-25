import React from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      "& :focus": {
        backgroundColor: "#FFFFFF00",
      },
      maxHeight: 20,
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#FFFFFF00",
      border: "none",
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

interface SelectOption {
  label: string;
  value: any;
}

interface CustomizedSelectProps {
  label?: string;
  selectVal: string;
  setSelectVal: React.Dispatch<React.SetStateAction<string>>;
  options: SelectOption[];
}

export default function CustomizedSelect({
  label,
  selectVal,
  setSelectVal,
  options,
}: CustomizedSelectProps) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectVal(event.target.value as string);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        {!!label && (
          <InputLabel id="customized-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="customized-select-label"
          id="customized-select"
          value={selectVal}
          onChange={handleChange}
          input={<CustomInput />}
        >
          <MenuItem value="none">Select</MenuItem>
          {options.map((option) => (
            <MenuItem value={option.value} key={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}