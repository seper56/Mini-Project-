
var myfunction = function(){
    var myVar = "button";
};

console.log(myVar);

$(function(){
    $("button").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });
        }
    });
});