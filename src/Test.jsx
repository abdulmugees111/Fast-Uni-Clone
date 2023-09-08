// // // // import React from 'react';
// // // // import { makeStyles } from '@material-ui/core/styles';
// // // // import TreeView from '@material-ui/lab/TreeView';
// // // // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// // // // import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// // // // import TreeItem from '@material-ui/lab/TreeItem';

// // // // const useStyles = makeStyles({
// // // //   root: {
// // // //     height: 216,
// // // //     flexGrow: 1,
// // // //     maxWidth: 400,
// // // //   },
// // // // });

// // // // export default function Test() {
// // // //   const classes = useStyles();

// // // //   return (
// // // //     <TreeView
// // // //       className={classes.root}
// // // //       defaultCollapseIcon={<ExpandMoreIcon />}
// // // //       defaultExpandIcon={<ChevronRightIcon />}
// // // //       multiSelect
// // // //     >
// // // //       <TreeItem nodeId="1" label="Applications">
// // // //         <TreeItem nodeId="2" label="Calendar" />
// // // //         <TreeItem nodeId="3" label="Chrome" />
// // // //         <TreeItem nodeId="4" label="Webstorm" />
// // // //         <TreeItem nodeId="5" label="Documents">
// // // //           <TreeItem nodeId="6" label="Material-UI"/>
// // // //             <TreeItem nodeId="7" label="src"/>
// // // //               <TreeItem nodeId="8" label="index.js" />
// // // //               <TreeItem nodeId="9" label="tree-view.js" />
// // // //             </TreeItem>
// // // //             </TreeItem>
         
     
     
// // // //     </TreeView>
// // // //   );
// // // // }
// // // import React from 'React'
// // // const Test = props => {

// // //     let textInput = React.createRef();
    
// // //     function handleClick() {
// // //       console.log(textInput.current.value);
// // //     }
    
// // //     return (
// // //         <div>
// // //           <input ref={textInput} placeholder="Type a message..." />
// // //           <div onClick={handleClick} className="icon">
// // //             <i className="fa fa-play" />
// // //           </div>
// // //         </div>
// // //       )
// // //     }
// // //     export default Test;

// // import React from 'react';
// // import { makeStyles, useTheme } from '@material-ui/core/styles';
// // import Card from '@material-ui/core/Card';
// // import CardContent from '@material-ui/core/CardContent';
// // import CardMedia from '@material-ui/core/CardMedia';
// // import IconButton from '@material-ui/core/IconButton';
// // import Typography from '@material-ui/core/Typography';
// // import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// // import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// // import SkipNextIcon from '@material-ui/icons/SkipNext';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: 'flex',
// //   },
// //   details: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   content: {
// //     flex: '1 0 auto',
// //   },
// //   cover: {
// //     width: 151,
// //   },
// //   controls: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     paddingLeft: theme.spacing(1),
// //     paddingBottom: theme.spacing(1),
// //   },
// //   playIcon: {
// //     height: 38,
// //     width: 38,
// //   },
// // }));

// // export default function MediaControlCard() {
// //   const classes = useStyles();
// //   const theme = useTheme();

// //   return (
// //     <Card className={classes.root}>
// //       <div className={classes.details}>
// //         <CardContent className={classes.content}>
// //           <Typography component="h5" variant="h5">
// //             Live From Space
// //           </Typography>
// //           <Typography variant="subtitle1" color="textSecondary">
// //             Mac Miller
// //           </Typography>
// //         </CardContent>
// //         <div className={classes.controls}>
// //           <IconButton aria-label="previous">
// //             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
// //           </IconButton>
// //           <IconButton aria-label="play/pause">
// //             <PlayArrowIcon className={classes.playIcon} />
// //           </IconButton>
// //           <IconButton aria-label="next">
// //             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
// //           </IconButton>
// //         </div>
// //       </div>
// //       <CardMedia
// //         className={classes.cover}
// //         image="/static/images/cards/live-from-space.jpg"
// //         title="Live from space album cover"
// //       />
// //     </Card>
// //   );
// // }

// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const tutorialSteps = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     display: 'block',
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%',
//   },
// }));

// function MediaControlCard() {
//     return (
//     <>
//       <AutoPlaySwipeableViews>
             
//       </AutoPlaySwipeableViews>
     
   
// </>
//   )}
// export default MediaControlCard;

// // import React from 'react';
// // import SwipeableViews from 'react-swipeable-views';
// // import { autoPlay } from 'react-swipeable-views-utils';
// // import num1 from './img/num1.jpg';
// // import num2 from './img/num2.jpg';
// // import num3 from './img/num3.jpg';
// // import num4 from './img/num4.jpg';
// // import num5 from './img/num5.jpeg';
// // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// // function MediaControlCard() {
  
// //   return (
     
// //       <AutoPlaySwipeableViews>
      
// //       <img src={num1}/>
// //       <img src={num2}/>
// //       <img src={num3}/>
// //       <img src={num4}/>
// //       <img src={num5}/>
// //       </AutoPlaySwipeableViews>      
    
// //   );
// // }

// // export default MediaControlCard;