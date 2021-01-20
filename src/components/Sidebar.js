import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import "./Sidebar.css";
import DragButton from "./DragButton";

import DimensionDroppable from "./DnD/Dimensions/DimensionDroppable";
import styled from "styled-components";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import DimensionDragable from "./DnD/Dimensions/DimensionDragable"
import data from "../Dataa/index";
import { withWidth } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';

 function Sidebar() {

    const temp = data.map((x) => {
        return (
          <div>
            <DimensionDragable id={x.id} style={{ margin: "8px" }} >
            
              <Item className="sidebar__dimensions">
              <DragIndicatorIcon className = "dragicon" style={{color : "#8799AA",fontSize:"20px"}}/>
                {x.title}
                {/* <ZoomOutMapIcon style={{fontSize:"16px",marginLeft:"4px", transform:"rotate(45deg)",color : "#8799AA"}}/> */}
                <ClearIcon className="crossicon" style={{fontSize:"16px",marginLeft:"4px",color : "var(--color-surface)"}}/>

                </Item>
           
            </DimensionDragable>
          </div>
        );
      });
    
    return (
        <div className="body__sidebar">
          <Item className="sidebar__title" style={{minWidth:"154px", height:"35px", color: "var(--color-KfinBlue)", fontStyle:"bold",marginBottom:"8px",fontSize:"14px"}}><h4 style={{margin:"auto"}}>Dimensions </h4><ExpandMoreIcon/></Item>
        <DimensionDroppable id="dimensions__drop">
        
        {temp}
       
        </DimensionDroppable>
         </div>
    )
}

export default Sidebar ;

const Item = styled.div`
  display:flex;
  justify-content : space-between; \
  height : 30px ;
  padding: 0px 8px 0px 4px;
  color: #172B4D;
  background-color: var(--color-surface);
  border-radius: 5px;
  box-shadow: inset 2px 2px 5px #c1c9d2,inset -3px -3px 7px #fff;
  align-items : center ;
  font-family : ratiomedium ;
  font-size : 12px ;
`;
























// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import "./Sidebar.css";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerContainer: {
//     overflow: 'auto',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));


// export default function Sidebar() {
//     const classes = useStyles();
//     return (
//         <>
//                <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <Toolbar />
//         <div className={classes.drawerContainer}>
//           <List>
//             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>   
//         </>
//     )
// }
