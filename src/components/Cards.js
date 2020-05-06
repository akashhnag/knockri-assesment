import React from 'react';
import {Card,Button,Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";

import image from "../photo.jpg";

function Cards(props) {
    const{ele,ind,width}=props;
    //rendering cards
    return (
           
                 <Col key={ind}>
                <Card style={{marginTop:"20px"}}>
                
                     <Card.Body> 
                    <Row>
                    <Col sm={8}>   
                        <p><b>Name:</b> {ele.name}</p>
                        <p><b>Id:</b> {ele.id}</p>
                        <p><b>Application Id:</b> {ele.applicationId}</p>   
                         <Link to={`details/:${ele.applicationId}`}>
                             <Button variant="primary" id={ele.id}>Profile</Button>
                         </Link>  
                     </Col>   

                     <Col sm={4}>
                         <img src={image} height="150px" width={width} alt="Not found"></img>
                     </Col>
                     </Row>                                   
                     </Card.Body>
                
                 </Card>
             </Col>
           
                  
        
    )
}

export default Cards
