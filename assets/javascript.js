// JavaScript to handle button movement
setInterval(() => {
    const buttonRect = noButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
  
    const distanceX = buttonX - mouseX;
    const distanceY = buttonY - mouseY;
  
    noButton.style.left = distanceX / 20 + "px";
    noButton.style.top = distanceY / 20 + "px";
  }, 20);
  

// const button = document.getElementById('button')
// const OFFSET = 100

// button.addEventListener('click', () => {
//     alert('woooooow really!')
//     window.close()

// })

// document.addEventListener('mousemove' ,(e) => {
//     const x = e.pageX
//     const y = e.pageY
//     console.log(x, y)
//     const buttonBox = button.getBoundingClientRect()
//     const hotizontalDistanacfrom = disstanceFromCenter(button.x, x, buttonBox.width) 
//     const verticalDistanacfrom = disstanceFromCenter(button.x, x, buttonBox.height)
//     const hotizontaloffset = buttonBox.width / 2 + OFFSET
//     const verticaloffset = buttonBox.height / 2 + OFFSET
//     if (Math.abs(hotizontalDistanacfrom) <= hotizontaloffset && Math.abs (verticalDistanacfrom) <= (verticaloffset)) {
//         setButtonPosition(
//             buttonBox.x + hotizontaloffset / hotizontalDistanacfrom * 10
//             ,buttonBox.y + verticaloffset / verticalDistanacfrom * 10
//         )
        
//     } 
    
    

// })
// function setButtonPosition(top, left) {
//     const windowBox = document.body.getBoundingClientRect()
//     const buttonBox = button.getBoundingClientRect()

//     if(disstanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
//         left = windowBox.right - button.width - OFFSET
//     }
//     if(disstanceFromCenter(left, windowBox.right, buttonBox.width) < 0) {
//         left = windowBox.left + OFFSET
//     }
//     if(disstanceFromCenter(top, windowBox.right, buttonBox.height) < 0) {
//         top = windowBox.bottom - buttonBox.height - OFFSET
//     }
//     if(disstanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
//         top = windowBox.top + OFFSET
//     }

//     button.style.top  = "${top}px"
//     button.style.left = "${left}px"
// }

// function disstanceFromCenter(boxPosition, mousePosition, boxSize) {
//     return boxPosition - mousePosition + boxSize / 2
// }
