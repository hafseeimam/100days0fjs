const Profile = [{
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZhY2V8ZW58MHx8MHx8fDA%3D',
    para: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
    name: 'Cherise G'
},
{
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para: 'imagine your colleagues as your bestfriends.',
    name: 'Jack Ryan'
},
{
    img: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para: 'workplace is not just a place of work, its also a place to create bond.',
    name: 'Amber Harden'
},
{
    img: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para: 'i feel at home when am at work.',
    name: 'Charles Dickson'
},
{
    img: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    para: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    name: 'Henrick James'
}
]
const container = document.querySelector('.testimonial-container')
// const imgEl = document.querySelector('.testimonial-img')
// const paraEl = document.querySelector('.testimonial-text')
// const nameEl = document.querySelector('.username')

let initial = 0

const displayTestimonial = function () {
    const { img, para, name } = Profile[initial];
    const html = `
        <img src="${img}" alt="personal-img" class="testimonial-img">
        <p class="testimonial-text">${para}</p>
        <h4 class="username">${name}</h4>
    `;
    container.innerHTML = html;

    initial++;
    // initial = (initial + 1) % Profile.length;
    if (initial === Profile.length) initial = 0
    // const { img, para, name } = Profile[initial]
    // imgEl.src = img
    // paraEl.textContent = para
    // nameEl.textContent = name
    // initial++
    // if (initial === Profile.length) {
    //     initial = 0
    // }
    setTimeout(displayTestimonial, 2000);
}

displayTestimonial()
 