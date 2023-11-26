import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const News = (props) => {
    const {title, description, urlToImage}= props.posts;
    console.log(props.posts);
    return (
        <div style={{marginBottom:'30px'}}>
        <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={urlToImage}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
};

export default News;