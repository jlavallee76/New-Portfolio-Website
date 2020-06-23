/*************************************************
- Name: Josh Lavallee                            *
- Date Created: 06/14/2020                       *
- Date Modified: 06/23/2020                      *
- Description: Main JS Script                    *
*************************************************/

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})