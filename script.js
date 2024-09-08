var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault();
    /* Directly get values using DOM methods  */
    /* Question mark is liye use kia hai q k ye possibly null h  */
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value;
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    var phone = (_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value;
    var education = (_d = document.getElementById('education')) === null || _d === void 0 ? void 0 : _d.value;
    var experience = (_e = document.getElementById('experience')) === null || _e === void 0 ? void 0 : _e.value;
    var skills = (_f = document.getElementById('skills')) === null || _f === void 0 ? void 0 : _f.value;
    // Real DOM Manipulation
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        // content clear karne k liye
        resumeOutputElement.innerHTML = '';
        // Dynamically creating elements and appending them 
        var resumeTitle = document.createElement('h2');
        resumeTitle.textContent = 'Resume';
        var nameElement = document.createElement('p');
        nameElement.innerHTML = "<strong>Name:</strong> ".concat(name);
        var emailElement = document.createElement('p');
        emailElement.innerHTML = "<strong>Email:</strong> ".concat(email);
        var phoneElement = document.createElement('p');
        phoneElement.innerHTML = "<strong>Phone:</strong> ".concat(phone);
        var educationTitle = document.createElement('h3');
        educationTitle.textContent = 'Education';
        var educationElement = document.createElement('p');
        educationElement.textContent = education;
        var experienceTitle = document.createElement('h3');
        experienceTitle.textContent = 'Experience';
        var experienceElement = document.createElement('p');
        experienceElement.textContent = experience;
        var skillsTitle = document.createElement('h3');
        skillsTitle.textContent = 'Skills';
        var skillsElement = document.createElement('p');
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
    }
    else {
        console.error('The resume output element is missing');
    }
});
