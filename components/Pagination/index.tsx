import React from "react";
import clsx from "clsx";
import { usePagination } from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      alignItems: "center",
    },
    pageNumber: {
      backgroundColor: "FFFFFF00",
      color: theme.palette.primary.dark,
      border: "none",
      padding: theme.spacing(2),
      fontSize: "1.25rem",
    },
    selectedPage: {
      fontWeight: 600,
    },
  })
);

export default function UsePagination() {
  const classes = useStyles();
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = (
              <Typography variant="subtitle1" color="primary">
                ...
              </Typography>
            );
          } else if (type === "page") {
            children = (
              <div
                className={clsx(classes.pageNumber, {
                  [classes.selectedPage]: selected,
                })}
                {...item}
              >
                {page}
              </div>
            );
          } else {
            children = (
              <Button
                type="button"
                variant="contained"
                size="small"
                color="primary"
                {...item}
              >
                {type}
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
