import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  primaryColor: {
    color: theme.palette.primary.dark,
  },
  pageContainer: {
    marginTop: theme.spacing(8),
  },
  root: {
    backgroundColor: theme.palette.success.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexGrow: 1,
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  h3: {
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  banner: {
    minHeight: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.pageContainer}>
        <Typography
          variant="h3"
          align="center"
          className={clsx(classes.h3, classes.primaryColor)}
        >
          Why CrazyNFT?
        </Typography>
        <Typography paragraph align="center" className={classes.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          at vero asperiores neque, earum, aspernatur velit fuga inventore
          veritatis a enim corporis ullam quia, praesentium sunt magnam eaque.
          Obcaecati dolores mollitia quasi ad amet tempora, voluptates
          laudantium pariatur deleniti porro. Exercitationem, optio. Adipisci
          atque voluptas doloribus assumenda in sequi? Praesentium? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Laborum repellat error,
          est dolorem vero sapiente similique minima natus hic temporibus!
        </Typography>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            className={clsx(classes.h3, classes.primaryColor)}
          >
            On the mission to bring NFTs to the Mainstream
          </Typography>
        </Container>
        <Grid
          container
          justifyContent="space-between"
          spacing={4}
          className={classes.paragraph}
        >
          <Grid item xs={12} sm={12} md={3} className={classes.flexCol}>
            <Typography variant="h5" align="left" gutterBottom color="primary">
              Lorem ipsum dolor
            </Typography>
            <Typography paragraph align="left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestias hic nemo ab sed impedit deserunt animi, consequuntur
              assumenda minus, itaque excepturi saepe voluptatem quod, qui amet
              in blanditiis adipisci.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5" align="left" gutterBottom color="primary">
              Lorem ipsum dolor
            </Typography>
            <Typography paragraph align="left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestias hic nemo ab sed impedit deserunt animi, consequuntur
              assumenda minus, itaque excepturi saepe voluptatem quod, qui amet
              in blanditiis adipisci.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5" align="left" gutterBottom color="primary">
              Lorem ipsum dolor
            </Typography>
            <Typography paragraph align="left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              molestias hic nemo ab sed impedit deserunt animi, consequuntur
              assumenda minus, itaque excepturi saepe voluptatem quod, qui amet
              in blanditiis adipisci.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.banner}>
        <Typography variant="h3" align="center" className={classes.h3}>
          The CRZY Token
        </Typography>
        <Typography paragraph align="center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          at vero asperiores neque, earum, aspernatur velit fuga inventore
          veritatis a enim corporis ullam quia, praesentium sunt magnam eaque.
        </Typography>
      </div>
    </React.Fragment>
  );
}
