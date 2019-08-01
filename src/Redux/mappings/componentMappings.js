import {OfferReducer, ReviewReducer} from '../reducers/allreducers';
import { combineReducers, bindActionCreators } from 'redux';
import {Offer} from '../../components/Offer';
import { connect } from 'react-redux';
import { OfferAction } from '../actions/offeraction';
import { Review } from '../../components/Review';

export const appstate=combineReducers({
    offerState: OfferReducer ,// {offer:{message:" ",code:"code"}}
    reviewState: ReviewReducer
});



let  mapStateToOfferProps=(state)=>{
    
    return {offerMessage:state.offerState.offer.message,
        code:state.offerState.offer.code};
}

let mapActionToOfferProps=(dispatch)=>{
    return bindActionCreators({otheroffers:OfferAction},dispatch);
}

let mapStateToReviewProps=(state)=>{
    return {reviews: state.reviewState.reviews }
}

export let OfferComponent=connect(mapStateToOfferProps,mapActionToOfferProps)(Offer);
export let ReviewComponent=connect(mapStateToReviewProps,null)(Review);