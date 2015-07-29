/**
 * Created by lukedowell on 7/29/15.
 */
$(document).ready(function() {
    $("body").append("<button id='someButton'>Click me!</button>");
    $("body").on('click', '#someButton', function() {
        $(this).hide();
        $(".my-resume").slideDown();
    });
});