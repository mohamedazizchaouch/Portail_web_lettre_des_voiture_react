import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Commentaire({data}) {
  const classes = useStyles();
 
  return (
      <div style={{  width: '550px' }}>

<List className={classes.root} >
{data.map(({id_commentaire, text_commentaire,date_heure_commentaire,client,imprimeur}) => (

<div>
  {client != null ?(
<div>
<div key={id_commentaire}>
    <ListItem alignItems="flex-start">
   
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={client.email}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {date_heure_commentaire.substring(0,10)}{" "} {date_heure_commentaire.substring(11,19)}
          </Typography>
        {" — "}{text_commentaire}
        </React.Fragment>
      }
    />
  </ListItem>  
      <Divider variant="inset" component="li" /></div>

</div>
  ):<div>
     <div key={id_commentaire}>
    <ListItem alignItems="flex-start">
   
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="http://localhost/Images/imp" />
    </ListItemAvatar>
    <ListItemText
      primary={imprimeur.email}
      secondary={
        <React.Fragment>
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {date_heure_commentaire.substring(0,10)}{" "} {date_heure_commentaire.substring(11,19)}
          </Typography>
        {" — "}{text_commentaire}
        </React.Fragment>
      }
    />
  </ListItem>  
      <Divider variant="inset" component="li" /></div>

  </div>
  }
</div>
  

 
   
  
      
        ))}
      
     
      
    </List>

      </div>
      );
}
