import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from './theme';
import Box from '@material-ui/core/Box';
import foto from './foto-escuela.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#fff",  
    },
    hero: {
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),

     
      url(${foto})
      `,
      height: "500px",
       backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     position: "relative",
     display: "flex",
      justifyContent: "center", 
      alignItems: "center",
     color: "#fff",
     fontSize: "4rem",
     [theme.breakpoints.down("sm")]: {
       height: 300,
       fontSize: "3em"
     }
     },
     blogsContainer: {
       paddingTop: theme.spacing(3)
     },
     blogTitle: {
       fontWeight: 800,
       paddingBottom: theme.spacing(3)
     },
     card: {
       maxWidth: "100%",
     },
     media: {
       height: 240
     },
     cardActions: {
       display: 'flex',
       margin: "0 10px",
       justifyContent: "space-between"
     },
     author: {
       display: 'flex',
     }
}));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <AppBar className={classes.appBar} position="static">
    <Toolbar>
     
      <Typography variant="h6" color="primary" >
        Blog
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>

  <Box className={classes.hero}>
    <Box>
      Este es el blog
    </Box>
  </Box>
  <Container maxWidth="lg" className={classes.blogsContainer}>
  <Typography variant="h4" className={classes.blogTitle}>
        Articulos
      </Typography>
  

  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media}
         
          image= "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191218151642-princess-leia-buns-4.jpg"
          title="Princess Leia "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Título del Post
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://pbs.twimg.com/profile_images/1302404996554776578/iDH7XGJw_400x400.jpg" />
          <Box ml={2}>
          <Typography variant="subtitle2" component="p">
            Leia Organa
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            May 4
          </Typography>
          </Box>
        </Box>
        <Box>
        <BookmarkBorderIcon/>
        </Box>
      </CardActions>
    </Card>
      </Grid>
  </Grid>
  </Container>
    </div>
  );
}

export default App;
