// import React, { useContext, useEffect, useState } from "react";
// import Comment from "./Comment";
// import { Link, Router } from "@reach/router";
import styled, { isStyledComponent } from "styled-components";
// import Context from "./Context";
import Avatar from "./Avatar";
import Divider from "@material-ui/core/Divider";
// const Content_screen_right = (props) => {
//   const { page, data } = useContext(Context);
//   const [image, setimage] = useState([
//     { profilepicture: "https://panorb", company: { name: "sss" } },
//   ]);

//   useEffect(() => {
//     const elements = document.querySelectorAll("div:not([class]):not([id])");
//     Array.from(elements, (item) => item.classList.add("retroClass"));
//   }, []);
//   useEffect(() => {
//     setimage(data);
//   }, [data]);
//   const Styleddiv = styled.div`
//     grid-column: col-start / col-end 3;
//     background-color: yellow;
//     :first-child {
//       background-color: red;
//     }
//     div {
//       display: grid;
//       justify-content: center;
//     }
//     img {
//       margin: 2rem auto;
//       width: 18rem;
//       height: 18rem;
//       border-radius: 50%;
//       image-rendering: auto;
//       image-rendering: crisp-edges;
//       image-rendering: pixelated;
//     }
//     .center {
//       text-align: center;
//     }
//   `;

//   return (
//     <Styleddiv>
//       <div>
//         <div>
//           <img src={image[0].profilepicture} alt="profile"></img>
//           <h2 className="center">{image[0].name}</h2>
//         </div>
//         <div style={{ borderBottom: "3px solid red" }}>
//           <h2>
//             Username: <span>{image[0].username}</span>
//           </h2>
//           <h2>
//             email: <span>{image[0].email}</span>
//           </h2>
//           <h2>
//             Phone <span>{image[0].phone}</span>
//           </h2>
//           <h2>
//             Website: <span>{image[0].website}</span>
//           </h2>
//         </div>
//         <div>
//           <h2>COMPANY</h2>
//         </div>
//         <h2>
//           Website: <span>{image[0].company.name}</span>
//         </h2>
//         <h2>
//           catchphrase: <span>{image[0].company.catchPhrase}</span>
//         </h2>
//         <h2>
//           bs: <span>{image[0].company.bs}</span>
//         </h2>
//       </div>
//     </Styleddiv>
//   );
// };

// export default Content_screen_right;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "grid",
    gridColumn: "col-start / col-end 3",
    textAlign: "center",
    fontWeight: "400",
    boxShadow: "none",
    justifyContent: "center",
    borderRight: "1px solid #cccccc",
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
  pos: {
    marginBottom: 7,
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
    grid-column: "col-start / col-end ";

    /* .muitypography-root: {
      padding-bottom: 1 rem;
    } */

    .MuiDivider-root {
      margin: 1rem;
    }
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
    }
    .mapDiv {
      border-radius: 1rem;
    }
  `;

  return (
    <Styleddiv>
      <Card className={classes.root}>
        <Avatar src={props.data[0].profilepicture} />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.data[0].name}
          </Typography>

          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Usernamet&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].username}
            </Typography>
          </div>

          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Email&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].email}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Phone&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].phone}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Website&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].website}
            </Typography>
          </div>

          <Divider dark />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Company
          </Typography>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Name&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].name}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              Catchphrase&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].company.catchPhrase}
            </Typography>
          </div>
          <div className={"h1combi"}>
            <Typography gutterBottom variant="h5" component="dt">
              bs&nbsp;
            </Typography>
            <Typography gutterBottom variant="h5" component="dd">
              &nbsp;{props.data[0].company.bs}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Styleddiv>
  );
}
