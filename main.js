document.addEventListener('DOMContentLoaded', function() {
    const counterButtons = document.querySelectorAll('.counter-btn');

    counterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.dhikr-card');
            const counterSpan = this.querySelector('.counter');
            
            if (card && card.classList.contains('completed')) {
                return;
            }
            
            let count = parseInt(counterSpan.textContent);

            if (count > 0) {
                count--;
                counterSpan.textContent = count;
            }

            if (count === 0) {
               if(card) card.classList.add('completed');
            }
        });
    });
});
