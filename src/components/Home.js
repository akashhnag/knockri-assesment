import React,{useState,useEffect} from 'react';
import {Container,Row} from "react-bootstrap";
import axios from "axios";

import Search from "./Search";
import Cards from "./Cards";
import {ajaxAPI} from "../config";


function toMatrix(arr, width) {
    return arr.reduce(function (rows, key, index) { 
      return (index % width === 0 ? rows.push([key]) 
        : rows[rows.length-1].push(key)) && rows;
    }, []);
  }

function Home() {
    const[candidates,setCandidates]=useState([]);
    const[searchWord,setSearch]=useState("");

    useEffect(()=>{
        //get all candidates
        axios.get(`${ajaxAPI}candidates`).then((res)=>{
            setCandidates(toMatrix(res.data,3));
        })
    },[])

    //search candidates based on names
    function search(data){
        setSearch(data);       
    }

    //renders filtered search
    function searchView(){
        return(
            candidates.map((ele,ind)=>{
                return(
                    <Row key={ind}>
                       {ele.filter((ele1,ind1)=>{
                           return ele1.name.toLowerCase().indexOf(searchWord.toLowerCase())>=0
                       }).map((ele2,ind2)=>{
                           return(
                            <Cards ele={ele2} ind={ind2} width={"auto"}></Cards>                            
                           )
                       })}
                    </Row>
                )
            })
        )
    }

    //initial render
    function defaultView(){
       return candidates.map((ele,ind)=>{
            return(
            <Row key={ind}>{
                ele.map((ele1,ind1)=>{
                    return(
                        <Cards ele={ele1} ind={ind1} width={"80px"}></Cards>                                       
                    )
                })
                                                            
            }</Row>
            )
            })
            
    }

    function fetchingView(){
        return(
                <h5 style={{marginTop:"50px"}}>Fething candidate details...</h5>
            )
    }

    function display(){   
        if(candidates.length===0){
            return fetchingView();
        }     
        if(searchWord===""){
            return defaultView();
        }else{
            return searchView();
        }
    }

    return (
        <div>
             <Container>
             <Search search={search}></Search>
             {display()}
                 
            </Container>
        </div>    
        
    )
}

export default Home
