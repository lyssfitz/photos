import { useState } from 'react';
import { AppBar, Container, Grid, LinearProgress, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import axios from 'axios';

import SearchBar from './SearchBar';
import PhotoAlbum from './PhotoAlbum';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

}));

function App() {

  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const clientID = process.env.REACT_APP_UNSPLASH_API_KEY;;

  const handleSearch = async (userInput) => {
    setLoading(true);
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${userInput}&client_id=${clientID}`
    );
    setLoading(false);
    setPhotos(response.data.results);
  };

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <PhotoLibraryIcon className={classes.icon}/>
          <Typography variant="h6" color="inherit" noWrap>
            Incredible Photos
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Incredible Photos
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Add a touch of inspiration to your day. View a collection of stunning photographic images just by entering a search term below.
              </Typography>
              <Grid container>
                <Grid item xs={12} align="center"> 
                  <SearchBar onSubmit={handleSearch} disabled={!loading}/>
                </Grid>
                {loading && 
                <Grid item xs={12} align="center"> 
                  <LinearProgress />
                </Grid>}
              </Grid>
            </Container>
        </div>
        <PhotoAlbum photos={photos}/>
      </main>
    </>
  );
}

export default App;
