export function list(url,options){
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function() {
        if (this.readyState === 4) {
            const text = this.responseText;  
            const $wrapper = document.createElement('div');

            $wrapper.innerHTML = text;
            const $elements = $wrapper.querySelectorAll('#files li > a');
            $elements.forEach($element => {
                console.log($element);
            });
            /* document.querySelector('main').innerHTML = allText; */
        }
    }
    request.send(); 
}