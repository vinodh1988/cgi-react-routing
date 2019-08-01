import React from 'react';

export class CourseItem extends React.Component{
    render(){
        let url="http://206.221.177.87:8894/rest-api/images/"+this.props.course.filename;
        return(
        <div className="media border p-3" style={{margin: "20px"}}>
        <img src={url} alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{width:"60px"}}/>
        <div className="media-body">
          <h4>{this.props.course.modulename}</h4>
          <p>{this.props.course.description}</p>
          <h6>Price:: &#8377;{this.props.course.price}</h6>
          <h5>Duration:: {this.props.course.duration} hours</h5>
        </div>
         </div>
      );
    }
}