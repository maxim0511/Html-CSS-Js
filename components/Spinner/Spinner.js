class Spinner {
    handleClear(){
        ROOT_SPINNER.innerHTML='';
    }
    render (){
        const html=`<div class='spinner-container'>
            <img class='spinner-container__img' src="components/Spinner/img/Spinner.svg"/>
        </div>`;
        ROOT_SPINNER.innerHTML=html;       
    }
}
const spinnerPage = new Spinner;
