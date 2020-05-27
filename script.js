// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
});

/*
function changeSide(_showMode,_id) {

    cube=document.getElementById(_id);

    for(var i = 0; i<8; i++){
        var cn = 'skew' + i;
        if ( cube.classList.contains(cn) ) {
            cube.classList.remove(cn);
        }
    }
    if ( cube.classList.contains('front') ) {
        cube.classList.remove( 'front' );			//must be a better way to do this...
    }

    if(_showMode == 'skew' ){
        var sm = 'skew'+Math.floor(Math.random() * 8);
        console.log(sm);
        cube.classList.add( sm );
    } else {
        cube.classList.add( _showMode );
    }
}
// set initial side
//will have to loop through... do later.

function mouseIn(_in){
    console.log(_in);
    changeSide('front',_in);
}

function mouseOut(_in){
    changeSide('skew',_in);
}
*/