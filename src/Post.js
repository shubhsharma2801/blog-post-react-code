import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from './redux/actions/index';
import Comment from './Comment';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '-webkit-fill-available'
  },
  content: {
    flex: '1 0 auto',
    width: '100%'
  }
}));

function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const post = props.post;
  const comments = useSelector(state => state.posts.filter(statepost => statepost.id === post.id))[0].comments;
  const isLoading = useSelector(state => state.commentLoading)
  const dispatch = useDispatch();

  const handleExpandClick = () => {
    dispatch(fetchComments(post.id));
    setExpanded(!expanded);
  };
  return (
    <Box m={3}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <b>Post ID</b> : {post.id}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <b>User ID </b>: {post.userId}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <b>Body</b> : {post.body}
            </Typography>
          </CardContent>
          <Button
            startIcon={<CommentIcon />}
            onClick={handleExpandClick}
          >
            {!expanded ? 'Show Comments' : 'Hide Comments'}
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box m={1}>
              <h5>Comments</h5>
              {comments ?comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>):''}
            </Box>
          </Collapse>
        </div>
      </Card>
    </Box>
  );
}


export default Post;

