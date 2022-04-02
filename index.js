function render(){
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();
render();
spinnerPage.handleClear();
// Error:  errorPage.render();

/**
 * Request in server : getting data = res,body and error in catch
 * fetch ('url')
    .then(res=>res.json)
    .then(body=>{
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error=>{
        spinnerPage.handleClear();
       errorPage.render();
    })**/
/**
 * Code to check work spinner
 * setTimeout(function(){
    spinnerPage.handleClear();
},2000);
 */