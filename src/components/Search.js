import React from 'react';

//search box for searchin candidates
function Search(props) {
    function handleInput(e){
        props.search(e.target.value);
    }

    return (
        <div style={{marginTop:"50px"}}>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" 
            aria-describedby="inputGroup-sizing-default" onChange={handleInput}></input>
            </div>
        </div>
    )
}

export default Search
