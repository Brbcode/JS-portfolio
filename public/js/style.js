const $searchInput = document.querySelector(".search-input");
$searchInput.addEventListener('click',(e)=>{
    $searchInput.setAttribute('active','');
    $searchInput.querySelector('input').focus();
});

$searchInput.addEventListener('focusout',(e)=>{
    $searchInput.removeAttribute('active');
})