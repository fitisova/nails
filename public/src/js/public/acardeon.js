// $( document.body ).click(function () {
//     if ( $( "div" ).first().is( ":hidden" ) ) {
//       $( "div" ).slideDown( "slow" );
//     } else {
//       $( "div" ).hide();
//     }

document.querySelectorAll(".past-works__imgs-btn").forEach(btn => {
    btn.onclick = () => {
        if ($(".past-works__imgs-container_acardeon").first().is(":hidden")) {
            $(".past-works__imgs-container_acardeon").slideDown("slow");
            $(".past-works__imgs-container_acardeon").css("display", "flex");
        } else {
            $(".past-works__imgs-container_acardeon").slideUp();
        }
    }
});