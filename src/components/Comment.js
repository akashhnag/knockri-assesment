import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap";

let finalArr=[];

function Comment(props) {
    const[comment,setComment]=useState("");

    let data={id:"",videos:[]};

    function find(final,id){
        for(let i=0;i<final.length;i++){
            if(final[i].id===id){
                return {"decision":true,"i":i};
            }
        }
        return {"decision":false};
    }

    function findVideos(arr,id){
        for(let i=0;i<arr.length;i++){
            if(arr[i].questionId===id){
                return {"decision":true,"i":i};
            }
        }
        return {"decision":false};
    }
    
    //to download json file
    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([JSON.stringify(content, null, 2)], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    //action on clicking save button
    function handleClick(){
        let {result}=props;
        result.videoDetails.comments=comment;
        
        if(finalArr.length===0){
            data.id=result.id;
            data.videos.push(JSON.parse(JSON.stringify(result.videoDetails)));
            finalArr.push(data);
            
        }else{
            let check=find(finalArr,result.id);
            if(check.decision){
                let getVideos=findVideos(finalArr[check["i"]].videos,result.videoDetails.questionId);
                if(getVideos.decision){
                    finalArr[check["i"]].videos[getVideos["i"]].comments=result.videoDetails.comments;
                }else{
                    finalArr[check["i"]].videos.push(result.videoDetails);
                }
            }else{
                data.id=result.id;
                data.videos.push(JSON.parse(JSON.stringify(result.videoDetails)));
                finalArr.push(data);
            }
        }
        
        setComment("");
        download(finalArr, 'api.json', 'text/json');
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
