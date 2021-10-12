import { Container, makeStyles, Grid, styled } from "@material-ui/core";
import "./feed.scss";
import Post from "./Post";


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
      <Grid center item sm={6} xs={10}>
       <img src="assets/home-img.jpg" alt="" className="postImg"/>
       </Grid>
       <Grid center item sm={6} xs={10}>
      <h1>Resting Refuge</h1>
      <p>Edition 1 of 1</p>
      <div className="info">
         

        <h4>About the Artwork</h4>
        <p>Resting refuge translates the symbiotic relationship between colors and nature.</p>

       <h4>About the Artist</h4>
<p>Jumaker is a contemporary digital Artist with a unique signature and very authentic genre.</p>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    1
  </Grid>
  <Grid item xs={6}>
   2
  </Grid>
  <Grid item xs={6}>
    3
  </Grid>
  <Grid item xs={6}>
    4
  </Grid>
</Grid>
       </Grid>
       
     </Grid>
     
      
    </Container>
  );
};

export default Feed;
