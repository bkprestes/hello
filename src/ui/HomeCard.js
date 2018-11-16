import React from 'react';

const HomeCard = (props) => (
    <div className="col-12 col-sm-4" style={{paddingTop: '10px'}}>
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '3px', width: '100px', height: '100px'}}   src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png?w=256" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <button href="#" className="btn btn-primary" onClick={props.action} >{props.button}</button>
        </div>
        </div>
    </div>
);

export default HomeCard;