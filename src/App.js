import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts,search } from './redux/actions/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import Homepage from './Homepage';

//styling
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'blue',
  },
}));


function App() {
  let posts = useSelector(state => {
    console.log(state.searchTerm);
    if(state.searchTerm){
      return state.posts.filter(post=>post.title.includes(state.searchTerm));
    }
    return state.posts;
  });
  const isLoading = useSelector(state => state.loading)
  const dispatch = useDispatch();
  const classes = useStyles();
  const searchCallback = (searchTerm) => {
    dispatch(search(searchTerm));
  }
  useEffect(() => {
    dispatch(fetchPosts());
  }, [])
  return (
    <div style={{ backgroundColor: '#e1f5fe' }} className={classes.root}>{!isLoading ? <Homepage searchCallback={searchCallback} posts={posts}></Homepage> :
      <div>
        <Backdrop className={classes.backdrop} open={isLoading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>}
    </div>
  );
}

export default App;
