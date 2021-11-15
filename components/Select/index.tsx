import React from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Currency, currencyOptions } from "@/context/currencyContext";

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
  selectVal: any;
  setSelectVal?: React.Dispatch<React.SetStateAction<any>>;
  // Currency select only
  setCurrency?: React.Dispatch<React.SetStateAction<Currency>>;
  options: SelectOption[];
  noneLabel?: string;
  customClass?: string;
}

export default function CustomizedSelect({
  label,
  selectVal,
  setSelectVal,
  options,
  noneLabel,
  customClass,
  setCurrency,
}: CustomizedSelectProps) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (!!setCurrency) {
      setCurrency(currencyOptions.find((c) => c.value === event.target.value));
    } else {
      setSelectVal(event.target.value as string);
    }
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
          className={customClass}
        >
          {!!noneLabel && <MenuItem value="none">{noneLabel}</MenuItem>}
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
