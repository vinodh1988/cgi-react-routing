
const offer={offer:{message:"10% discount on Webcourses", code: "WEB10"}};

export let OfferReducer =(state=offer,action)=>{
    switch(action.type){
        case 'OFFER_ACTION':
            return {offer:action.data};
        default:
                return state;
    }

}
