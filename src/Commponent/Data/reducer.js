export const initialState={
    basket:[],
    user:null
};

// Selectersubtotal



export const getSubTotal=(value)=>{
        const result = value.reduce((total, currentValue) => total+=currentValue.price,0);
        
    return result;
};

const reducer =(state,action)=>{
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
            break;
        case 'REMOVE_PRODUCT':
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
             const newBasket=[...state.basket];
             if(index>=0)
             {
                //  console.log(action.id);
                newBasket.splice(index,1);
             }else{
                 console.log("product not delete");
             }

             return{
                 ...state,
                 basket:newBasket
             }
                // return {...state,state.filter((arr,index)=>{
                //     return index !== action.id;
                // })};
                break;

         case 'SET_USER':
             return{
                 ...state,
                 user:action.user
             }
        default:
            return state;
    }
};

export default reducer;