import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ForumIcon from '@mui/icons-material/Forum';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = props => {
//   const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Issue Forum",
      icon: <ForumIcon />,
    //   onClick: () => history.push("/")
    },
    {
      text: "Create Issue",
      icon: <DriveFileRenameOutlineIcon />,
    //   onClick: () => history.push("/about")
    },
    {
      text: "Product List",
      icon: <ProductionQuantityLimitsIcon />,
    //   onClick: () => history.push("/contact")
    },
    {
        text: "Admin Panel",
        icon: <AdminPanelSettingsIcon />,
      //   onClick: () => history.push("/contact")
      }
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;
