import styled, { isStyledComponent } from "styled-components";
import { CardMedia } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Maps from "./Maps";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridColumn: "col-start / col-end 3",

    fontWeight: "400",
    boxShadow: "none",

    padding: "1rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 19,
    color: "#545454",
    fontWeight: "600",
    padding: 0,
  },
});

const Styleddiv = styled.div`
  .MuiTypography-h5 {
    h2 {
      padding-bottom: 4rem;
    }
  }
`;

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const Styleddiv = styled.div`
    display: grid;
    position: absolute;
    left: 0;
    grid-column: col-start 3 / col-end 4;
    top: 11rem;
    justify-content: start;
    right: -218%;
    max-width: inherit;
    box-shadow: none;

    dt {
      display: block;
      float: left;
      width: 100px;
      text-align: right;
      color: #9a9a9a;
    }
    dt:after {
      content: ":";
    }
    dd {
      display: block;
    }

    .MuiCardContent-root {
      justify-content: start;

      h1 {
        color: #9a9a9a;
      }
    }
    .h1combi {
      display: flex;
      margin: 0 2rem;
    }
    .mapDiv {
      border-radius: 1rem;
    }

    .MuiTypography-h5 {
      margin-right: 3rem;
    }
  `;

  return (
    <Styleddiv>
      <CardContent>
        <Card className={classes.root}>
          <Typography gutterBottom variant="h5" component="">
            Address :
          </Typography>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Street&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].address.street}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Suite&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].address.suite}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              City&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].address.city}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Zipcode&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].address.zipcode}
            </Typography>
          </div>
          <CardMedia children={Maps} elementType={"div"}>
            <iframe
              width="440"
              height="350"
              frameborder="0"
              borderradius="2rem"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVPPbQ4dJ2Tuoj1eR2ryNGv8YPukR-VRA
    &q=Space+Needle,Seattle+WA"
              allowfullscreen
            ></iframe>
          </CardMedia>
        </Card>
      </CardContent>
    </Styleddiv>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   // const useStyles = makeStyles({
//   root: {
//     display: "grid",
//     gridColumn: "col-start / col-end 3",

//     fontWeight: "400",
//     boxShadow: "none",

//     padding: "1rem",
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 19,
//     color: "#545454",
//     fontWeight: "600",
//     padding: 0,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           gutterBottom
//         >
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
