'use strict';

const statsNum = document.querySelectorAll('.stats_num')

statsNum.forEach(stats => {
    stats.innerText = '0'
    incrementStats()
    function incrementStats() {
        let currentStats = +stats.innerText
        const dataceil = stats.getAttribute('data-ceil')
        const increment = dataceil / 15
        currentStats = Math.ceil(currentStats + increment)
        if (currentStats < dataceil) {
            stats.innerText = currentStats;
            setTimeout(incrementStats, 50);
        } else {
            stats.innerText = dataceil;
        }

    }

})