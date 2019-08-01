import {OfferReducer} from '../reducers/allreducers';
import { combineReducers, bindActionCreators } from 'redux';
import {Offer} from '../../components/Offer';
import { connect } from 'react-redux';
import { OfferAction } from '../actions/offeraction';

export const appstate=combineReducers({
    offerState: OfferReducer // {offer:{message:" ",code:"code"}}
});



let  mapStateToOfferProps=(state)=>{
    
    return {offerMessage:state.offerState.offer.message,
        code:state.offerState.offer.code};
}

let mapActionToOfferProps=(dispatch)=>{
    return bindActionCreators({otheroffers:OfferAction},dispatch);
}

export let OfferComponent=connect(mapStateToOfferProps,mapActionToOfferProps)(Offer);
