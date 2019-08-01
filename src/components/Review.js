import React from 'react';
import {ReviewItem} from './subcomp/ReviewItem';

export class Review extends React.Component{
    render(){
        console.log(this.props.reviews);
        console.log("Review rendering");
        return(
          <div>
              {this.props.reviews.map(x=><ReviewItem review={x}
              key={x.review_id}></ReviewItem>)}
          </div>
        );
    }
}