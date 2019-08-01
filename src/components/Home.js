import React from 'react';
import {getCourse} from '../services/CourseService';
import {CourseItem} from './subcomp/CourseItem'
export class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            courses:[]
        }
       
    }
    render(){
        console.log("rendering");
        let code=this.state.courses.map(
            (x)=><CourseItem key={x.modulecode} course={x}></CourseItem>
        )
        return(
        <div>
        <h1>Courses</h1>
        {code}
        </div>
        )
    }

    componentDidMount(){
        console.log("Executed...!!!");
             getCourse().then(
                 (data)=>{
                     console.log(data.body);
                     this.state.courses=data.body;
                     this.setState(this.state);
                }
             ).catch(
                 ()=>console.log("Not read")
             );
    }
}