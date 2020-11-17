import React from "react"
import Search from "./search"

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const indicatorColors = ['#d93025', '#1a73e8', '#188038', '#e37400'];

function Navbar(props) {
  const [tabIndex, setTabIndex] = React.useState(0);
  // const tabsStyles = { indicatorColors };
  const tabItem1Styles = { color: indicatorColors[0] };
  const tabItem2Styles = { color: indicatorColors[1] };
  const tabItem3Styles = { color: indicatorColors[2] };
  const classes = useStyles();;


  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          // classes={tabsStyles}
          value={tabIndex}
          onChange={(e, index) => {
            console.log(index, indicatorColors[index])
            setTabIndex(index)}}
          TabIndicatorProps={{
            children: <div className={`MuiIndicator-${tabIndex}`} />,
          }}

        >
          <Tab 
            classes={tabItem1Styles}
            disableTouchRipple
            label="Projects" 
            />
          <Tab 
            classes={tabItem2Styles}
            disableTouchRipple 
            label="Resume" 
            />
          <Tab 
            classes={tabItem3Styles}
            disableTouchRipple 
            label="Contact" 
            />
        </Tabs>
      </Paper>
      < Search search={props.search} setSearch={props.setSearch} executeSearch={props.executeSearch} />
    </>
  )
}

export default Navbar