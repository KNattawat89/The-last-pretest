import React from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';
function renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
}

function renderComments(comment) {
  if(comment != null) {
    
      return (
        //   console.log(comment)
         <Card>
            <div className="container">
            <h4>Comment</h4>
        <CardBody>
            {comment.map((c) => { return(
                <div key={c.id}>
                <div className="mt-2">
                {c.comment}
                </div>
                <br/>
                <div className="mt-2">
                {"--" + c.author + ","}
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}
                </div>
               
                </div>
            )
                
            })}
            </CardBody>
            {/* <div className="row">
            <div  className="col-12">
            {comment.comment}
            </div>
            <div  className="col-12">
            --{comment.author}, {comment.date}
            </div>
            </div> */}
            </div>
         </Card>
      );
  }
  else
     return(
         <div></div>
     )
 }

const DishDetail = ({detail, comments}) => {
    return (
        <div className="container">
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {renderDish(detail)}
            </div>
            <div  className="col-12 col-md-5 m-1">
                {renderComments(comments)}
            </div>
            </div>
        </div>
    )
}

export default DishDetail;