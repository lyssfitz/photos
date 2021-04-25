import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 900,
    },
  }));

const PhotoAlbum = ({photos}) => {
    const classes = useStyles();

    return (

            <div className={classes.root}>
              <GridList cellHeight={240} className={classes.gridList} cols={4}>
                {photos.map((photo, index) => (
                  <GridListTile key={photo.id} cols={index % 5 === 0 ? 2 : 1}>
                    <img src={photo.urls.small} alt={photo.alt_description} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          
        );
};

export default PhotoAlbum;