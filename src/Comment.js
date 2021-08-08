import { Box, Card, CardContent, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      
    },
    content: {
      flex: '1 0 auto',
      width: '100%'
    }
  }));
function Comment(props) {
    const classes = useStyles();
    const comment = props.comment;
    return (
        <div >
            <Box m={1}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h9" variant="h9">
                                {comment.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                                {comment.email}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {comment.body}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </Box>
        </div>
    )
}

export default Comment

