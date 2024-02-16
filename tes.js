const container = document.getElementById('container');
const switchs = document.querySelector('.switch');
const h1 = document.getElementsByTagName('h1')[0];

container.addEventListener('click', function () {
    if (container.classList.contains('off')) {
        document.body.style.backgroundColor = '#000';
        container.style.backgroundColor = '#fff';
        switchs.style.backgroundColor = '#000';
        switchs.style.transform = 'translateX(2rem)';
        h1.style.visibility = 'visible';
        h1.style.color = '#fff';
        container.classList.remove('off');
    } else {
        document.body.style.backgroundColor = '#000';
        switchs.style.transform = 'translateX(0rem)';
        document.body.style.backgroundColor = '#fff';
        container.style.backgroundColor = '#000';
        switchs.style.backgroundColor = '#fff'
        h1.style.visibility = 'hidden';
        container.classList.add('off')

    }
});

