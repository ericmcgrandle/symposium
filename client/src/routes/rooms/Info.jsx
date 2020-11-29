import React from 'react';
import SocialMedia from './SocialMedia';

import EmbedPodcast from './EmbedPodcast'

import './room.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width: 200,
    margin: 'auto'
  },
});

export default function Info(props) {
  // const altImage = "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80";
  const classes = useStyles();

  return (
  <Card className="podcast-card">
      
      <CardMedia
        className={classes.media}
        image={props.podcast_image}
        title="Podcast Image"
      />

      <div className="podcast">
        <EmbedPodcast 
          embed_title = {props.embed_title}
          embed_url = {props.embed_url}
          title = {props.episode_title}
        />
      </div>

      <div class="conversation-information">
        <ul>
          <li><b>Title : </b>{props.title}</li>
          <li><b>Description : </b>{props.description}</li>
          <li><b>Timestamp : </b>{props.podcast_starts_at} - {props.podcast_ends_at}</li>
          <li><b>Category : </b>{props.category}</li>
        </ul>

        <SocialMedia 
          description={props.description}
          url={props.history}
        />
      </div>

      
      

  </Card>
  )
}