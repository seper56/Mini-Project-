
// $(function(){
//     $("button").on({
//         mouseover:function(){
//             $(this).css({
//                 left:(Math.random()*200)+"px",
//                 top:(Math.random()*200)+"px",
//             });
//         }
//     });
// });
const button = document.getElementById('button')

button.addEventListener('click', () => {
    alert('woooooow really!')
    window.close()

})

document.addEventListener('mousemove' ,(e) => {
    const x = e.pageX
    const y = e.pageY
    console.log(x, y)
    const buttonbox = button.getBoundingClientRect()
    const hotizontalDistanacfrom = distancefromceneter(button.x, x 
    buttonbox.width) 
})

function disstanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}
