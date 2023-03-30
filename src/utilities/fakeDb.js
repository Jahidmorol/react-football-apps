// use localStorage to manage cart
const addToDb = (id) =>{
    let summaryCart = getSummaryCart();
    
    // add quantity
    const quantity = summaryCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        summaryCart[id] = newQuantity
    }
    else{
        summaryCart[id] = 1
    }
    localStorage.setItem('summary-cart', JSON.stringify(summaryCart));
} 

const getSummaryCart = () => {
    let summaryCart = {};

    // get the adding cart from localStorage 
    const storedCart = localStorage.getItem('summary-cart');
    if (storedCart) {
        summaryCart = JSON.parse(storedCart);
    }
    return summaryCart;
}


export {
    addToDb,
    getSummaryCart
}