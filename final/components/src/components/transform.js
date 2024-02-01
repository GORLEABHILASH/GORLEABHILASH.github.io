// script.js

document.querySelector('.card').addEventListener('mousemove', function(e) {
    const card = this;
    const boundingRect = card.getBoundingClientRect();

    // Calculate the rotation angles based on the cursor position
    const xAngle = (e.clientY - boundingRect.top - boundingRect.height / 2) / boundingRect.height * 20;
    const yAngle = (e.clientX - boundingRect.left - boundingRect.width / 2) / boundingRect.width * 20;

    // Apply the rotation using CSS transform
    card.style.transform = `perspective(1000px) rotateX(${xAngle}deg) rotateY(${yAngle}deg) scale3d(1, 1, 1)`;
});

// Reset the card rotation when the mouse leaves the card
document.querySelector('.card').addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});
