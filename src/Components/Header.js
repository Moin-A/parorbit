// import React, { useContext, useEffect, useState } from "react";
// import styled, { isStyledComponent } from "styled-components";
// import Context from "./Context";

// const Header = () => {
//   const { page, data } = useContext(Context);
//   const [image, setimage] = useState([
//     {
//       profilepicture: "https://panorb",
//       company: { name: "xyz" },
//       adress: { street: "xyz" },
//     },
//   ]);

//   useEffect(() => {
//     setimage(data);
//   }, [data]);

//   const Styledheader = styled.header`
//     display: flex;
//     grid-column: center-start/center-end;
//     position:"sticky",

//     /* background-color: green; */
//     border-bottom: 1px solid #cccccc;
//     justify-content: space-between;
//     align-items: center;
//     font-size: "1.7rem";
//     flex-grow: 1;
//     span {
//       box-sizing: border-box;
//       font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//       font-weight: 500;
//     }
//     img {
//       margin-right: 1rem;
//       width: 4rem;
//       height: 4rem;
//       border-radius: 50%;
//       image-rendering: auto;
//       image-rendering: crisp-edges;
//       image-rendering: pixelated;
//     }
//   `;

//   return (
//     <Styledheader style={{ position: "sticky", top: 0 }}>
//       <span style={{ fontSize: "1.5rem" }}>{page}</span>
//       <div className={"header"}>
//         <img src={image[0].profilepicture} alt="profile"></img>
//         <span style={{ fontSize: "1.5rem" }}>{image[0].name}</span>
//       </div>
//     </Styledheader>
//   );
// };

// export default Header;
import React, { useContext } from "react";
import Context from "./Context";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "sticky",
      display: "grid",
      gridColumn: "center-start/center-end",
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "black",
      marginTop: "2rem",
      fontSize: "2rem",
      fontWeight: "600",
    },
  })
);

export default function MenuAppBar() {
  const { page, data } = useContext(Context);
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
          {auth && (
            <div>
              <Avatar
                src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg"
                style={{ marginTop: "2rem" }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
