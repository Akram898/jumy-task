import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";

import Navbar from "./components/Navbar";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
       
        <Grid center item sm={12} xs={10}>
          <Feed />
        </Grid>
        
      </Grid>
      <Add />
    </div>
  );
};

export default App;
