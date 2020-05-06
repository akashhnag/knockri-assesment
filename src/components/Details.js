import React,{useState,useEffect} from 'react';
import {Form, Container, Row,Col} from "react-bootstrap";
import axios from "axios";

import Comment from "./Comment";

export const context=React.createContext();

function Details(props) {
    const[details,setDetails]=useState({});
    const[allQuestions,getAllQuestion]=useState([]);
    const[video,setVideo]=useState({});
    
    const individualQuestions=[];
    let result={};
    let id=parseInt(props.location.pathname.split(":")[1]);

    //select box action
    function handleChange(e){
        let qid=e.target.value;
        let videos=details.videos;
        
        for(let i=0;i<videos.length;i++){
            if(parseInt(qid)===videos[i].questionId){
                setVideo(videos[i]);
                break;
            }
        }        
    }

    
    function display(){
        //render if no application id is present
        if(!id){
            return(
                <Container >
                    <Row>
                        <Col>
                        <h2 style={{marginTop:"250px",textAlign:"center"}}>Sorry, No application id found</h2>
                        </Col>
                    
                    </Row>
                </Container>
                
            ) 
        }else{            
            if(allQuestions.length>0){
                result.id=details.id;
                result.videoDetails=video;
                for(let i=0;i<allQuestions.length;i++){
                    for(let j=0;j<details.videos.length;j++){
                        if(allQuestions[i].id===details.videos[j].questionId){
                            individualQuestions.push(allQuestions[i]);                                                      
                            break;
                        }
                    }
                }  

                //render select options and videp player
                return(
                    <div>
                        <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label><h2>Select Question</h2></Form.Label>
                            <Form.Control as="select" custom onChange={handleChange}>
                            {
                                individualQuestions.map((ele,ind)=>{
                                    return(
                                    <option key={ind} value={ele.id}>{ele.question}</option>
                                    )
                                })
                            }
                            </Form.Control>
                        </Form.Group>
                        </Form>
                        
                        <div style={{marginTop:"50px",textAlign:"center"}}>
                            <video src={video.src} controls width="800" height="400"></video>
                        </div>
                        <div>
                            <Comment result={result}></Comment>
                        </div>
                    </div>
                )
            }  
        }       
    }  


    useEffect(()=>{
        //get videos
        axios.get("http://localhost:3010/applications").then((res)=>{
            if(id){
                for(let i=0;i<res.data.length;i++){                    
                    if(id===res.data[i].id){
                        setDetails(res.data[i]); 
                        setVideo(res.data[i].videos[0])                                             
                    }
                }
            }         
        })

        //get questions
        axios.get("http://localhost:3010/questions").then((res)=>{
            getAllQuestion(res.data);            
        })
    },[id])

    return (
        <Container>
             <div style={{marginTop:"20px"}}>
            {
              display()   
             
            }
            </div>
        </Container>
       
    )
}

export default Details
