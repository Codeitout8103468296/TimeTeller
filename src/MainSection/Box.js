import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Box({title,description,urlToImage,url,author,publishedAt}) {
  const desc=description && description.slice(0,150)+"....";
  return (
    <Card style={{ width: '17rem',display:"flex" }}>
      <Card.Img style={{height:'180px'}} variant="top" src={urlToImage} />
      <Card.Body style={{   display: "flex",flexDirection: "column",
    justifyContent: "space-between",}}>
        <Card.Title style={{fontSize:"1.2rem",textAlign:"left"}}>{title}</Card.Title>
        <Card.Text style={{fontSize:"0.8rem",textAlign:"left"}}>
          {desc}
        </Card.Text>
        <Card.Text style={{fontSize:"0.6rem",textAlign:"left"}}>
          By {author?author:"Anonymous"} on {publishedAt?new Date(publishedAt).toGMTString():"Unknown"}
        </Card.Text>
        <Button style={{width:"80%",alignSelf:"center"}} target="_blank"  href={url} variant="outline-secondary">Read More</Button>
      </Card.Body>
      
    </Card>
  );
}

export default Box;