import React from 'react';

export class Offer extends React.Component{
    render(){
        return(
            <div className="Jumbotron">
                <h1>Offers</h1>
                <h1 style={{color:"DarkRed"}}>{this.props.offerMessage}</h1>
                <div className="alert alert-info">{this.props.code}</div>
            </div>
        )
    }

    componentDidMount(){
        setInterval(()=>{
            this.props.otheroffers();
        },3000);
    }
}
