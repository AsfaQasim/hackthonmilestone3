document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

     /* Directly get values using DOM methods  */
     /* Question mark is liye use kia hai q k ye possibly null h  */
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value;

    // Real DOM Manipulation
    const resumeOutputElement = document.getElementById('resumeOutput');

    if (resumeOutputElement) {
        // content clear karne k liye
        resumeOutputElement.innerHTML = '';

        // Dynamically creating elements and appending them 
        const resumeTitle = document.createElement('h2');
        resumeTitle.textContent = 'Resume';

        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<strong>Name:</strong> ${name}`;

        const emailElement = document.createElement('p');
        emailElement.innerHTML = `<strong>Email:</strong> ${email}`;

        const phoneElement = document.createElement('p');
        phoneElement.innerHTML = `<strong>Phone:</strong> ${phone}`;

        const educationTitle = document.createElement('h3');
        educationTitle.textContent = 'Education';

        const educationElement = document.createElement('p');
        educationElement.textContent = education;

        const experienceTitle = document.createElement('h3');
        experienceTitle.textContent = 'Experience';

        const experienceElement = document.createElement('p');
        experienceElement.textContent = experience;

        const skillsTitle = document.createElement('h3');
        skillsTitle.textContent = 'Skills';

        const skillsElement = document.createElement('p');
        skillsElement.textContent = skills;

        // Saare Element k child ko append karwaya
        resumeOutputElement.appendChild(resumeTitle);
        resumeOutputElement.appendChild(nameElement);
        resumeOutputElement.appendChild(emailElement);
        resumeOutputElement.appendChild(phoneElement);
        resumeOutputElement.appendChild(educationTitle);
        resumeOutputElement.appendChild(educationElement);
        resumeOutputElement.appendChild(experienceTitle);
        resumeOutputElement.appendChild(experienceElement);
        resumeOutputElement.appendChild(skillsTitle);
        resumeOutputElement.appendChild(skillsElement);
    } else {
        console.error('The resume output element is missing');
   }
});