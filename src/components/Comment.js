import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap";
import axios from "axios";

import {ajaxAPI} from "../config";

function Comment(props) {
    const[comment,setComment]=useState("");

    let data={id:"",videos:[]};

    //action on clicking save button
    function handleClick(){
        let {result}=props;  
        for(let i=0;i<result.videos.length;i++){
            if(result.currentQuestion===result.videos[i].questionId){
                data.id=result.id;
                result.videos[i].comments=comment.trim();
                data.videos=result.videos;
                break;
            }
        } 
        
        setComment("");
        axios.put(`${ajaxAPI}applications/${data.id}`,data).then((res)=>{
            if(res.status===200){
                alert("Comments Saved");
            }else{
                alert("Error!!! Comments not saved.")
            }
            
        }).catch((err)=>{
            console.log("err",err);
            
        })
    }

    //comment box action
    function handleInput(e){
        setComment(e.target.value);
    }

    //render comment box and save button
    function display(){
        return (
            <div style={{marginBottom:"80px",marginTop:"50px"}}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h5>Comments:</h5></Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={handleInput} value={comment}/>
                </Form.Group>
                <Button variant="primary" onClick={handleClick} id="save">Save</Button>
            </div>
        )
    }

    return(
        display()
    )
   
}

export default Comment
