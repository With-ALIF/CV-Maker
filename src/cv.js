let experiences = [];
let educations = [];
let skills = [];
let languages = [];
let references = [];

document.addEventListener('DOMContentLoaded', function () {
    initializeEventListeners();
    updatePreview();
});

function initializeEventListeners() {
    document.getElementById('photoInput').addEventListener('change', handlePhotoUpload);
    document.getElementById('fullName').addEventListener('input', updatePreview);
    document.getElementById('careerObjective').addEventListener('input', updatePreview);
    document.getElementById('email').addEventListener('input', updatePreview);
    document.getElementById('phone').addEventListener('input', updatePreview);
    document.getElementById('address').addEventListener('input', updatePreview);

    const govtFields = ['fatherName', 'motherName', 'dob', 'nid', 'religion', 'maritalStatus', 'gender', 'permanentAddress'];
    govtFields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
            element.addEventListener('input', updatePreview);
            element.addEventListener('change', updatePreview);
        }
    });
}

function toggleGovtSection() {
    const jobType = document.getElementById('jobType').value;
    const govtSection = document.getElementById('govtSection');
    const cvGovtSection = document.getElementById('cvGovtSection');

    if (jobType === 'govt') {
        govtSection.style.display = 'block';
        cvGovtSection.style.display = 'block';
    } else {
        govtSection.style.display = 'none';
        cvGovtSection.style.display = 'none';
    }

    updatePreview();
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const photoPreview = document.getElementById('photoPreview');
            photoPreview.src = e.target.result;
            photoPreview.classList.add('active');
            photoPreview.style.display = 'block';

            const cvPhoto = document.getElementById('cvPhoto');
            cvPhoto.src = e.target.result;
            cvPhoto.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function addExperience() {
    const title = document.getElementById('expTitle').value.trim();
    const company = document.getElementById('expCompany').value.trim();
    const duration = document.getElementById('expDuration').value.trim();
    const description = document.getElementById('expDescription').value.trim();

    if (!title || !company || !duration) {
        alert('Please fill in Job Title, Organization, and Duration fields');
        return;
    }

    const experience = {
        id: Date.now(),
        title,
        company,
        duration,
        description
    };

    experiences.push(experience);
    document.getElementById('expTitle').value = '';
    document.getElementById('expCompany').value = '';
    document.getElementById('expDuration').value = '';
    document.getElementById('expDescription').value = '';

    updateExperienceList();
    updatePreview();
}

function updateExperienceList() {
    const list = document.getElementById('experienceList');
    list.innerHTML = '';

    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experience-item';
        div.innerHTML = `
            <button class="remove-btn" onclick="removeExperience(${exp.id})">×</button>
            <strong>${exp.title}</strong> at ${exp.company}<br>
            <span style="color: #888; font-size: 13px;">${exp.duration}</span><br>
            <span style="color: #555; font-size: 13px;">${exp.description}</span>
        `;
        list.appendChild(div);
    });
}

function removeExperience(id) {
    experiences = experiences.filter(exp => exp.id !== id);
    updateExperienceList();
    updatePreview();
}

function addEducation() {
    const degree = document.getElementById('eduDegree').value.trim();
    const institution = document.getElementById('eduInstitution').value.trim();
    const year = document.getElementById('eduYear').value.trim();
    const result = document.getElementById('eduResult').value.trim();

    if (!degree || !institution || !year) {
        alert('Please fill in Degree, Institution, and Year fields');
        return;
    }

    const education = {
        id: Date.now(),
        degree,
        institution,
        year,
        result
    };

    educations.push(education);
    document.getElementById('eduDegree').value = '';
    document.getElementById('eduInstitution').value = '';
    document.getElementById('eduYear').value = '';
    document.getElementById('eduResult').value = '';

    updateEducationList();
    updatePreview();
}

function updateEducationList() {
    const list = document.getElementById('educationList');
    list.innerHTML = '';

    educations.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'education-item';
        div.innerHTML = `
            <button class="remove-btn" onclick="removeEducation(${edu.id})">×</button>
            <strong>${edu.degree}</strong><br>
            ${edu.institution}<br>
            <span style="color: #888; font-size: 13px;">Year: ${edu.year}</span><br>
            <span style="color: #555; font-size: 13px;">Result: ${edu.result}</span>
        `;
        list.appendChild(div);
    });
}

function removeEducation(id) {
    educations = educations.filter(edu => edu.id !== id);
    updateEducationList();
    updatePreview();
}

function addSkill() {
    const skillName = document.getElementById('skillName').value.trim();
    if (!skillName) {
        alert('Please enter a skill');
        return;
    }

    const skill = {
        id: Date.now(),
        name: skillName
    };

    skills.push(skill);
    document.getElementById('skillName').value = '';

    updateSkillsList();
    updatePreview();
}

function updateSkillsList() {
    const list = document.getElementById('skillsList');
    list.innerHTML = '';

    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-item';
        div.innerHTML = `
            <button class="remove-btn" onclick="removeSkill(${skill.id})">×</button>
            <strong>${skill.name}</strong>
        `;
        list.appendChild(div);
    });
}

function removeSkill(id) {
    skills = skills.filter(skill => skill.id !== id);
    updateSkillsList();
    updatePreview();
}

function addLanguage() {
    const languageName = document.getElementById('languageName').value.trim();
    const proficiency = document.getElementById('languageProficiency').value.trim();

    if (!languageName || !proficiency) {
        alert('Please enter a language and its proficiency level');
        return;
    }

    const language = {
        id: Date.now(),
        name: languageName,
        proficiency
    };

    languages.push(language);
    document.getElementById('languageName').value = '';
    document.getElementById('languageProficiency').value = '';

    updateLanguagesList();
    updatePreview();
}

function updateLanguagesList() {
    const list = document.getElementById('languagesList');
    list.innerHTML = '';

    languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'language-item';
        div.innerHTML = `
            <button class="remove-btn" onclick="removeLanguage(${lang.id})">×</button>
            <strong>${lang.name}</strong> - ${lang.proficiency}
        `;
        list.appendChild(div);
    });
}

function removeLanguage(id) {
    languages = languages.filter(lang => lang.id !== id);
    updateLanguagesList();
    updatePreview();
}

function addReference() {
    const name = document.getElementById('refName').value.trim();
    const designation = document.getElementById('refDesignation').value.trim();
    const organization = document.getElementById('refOrganization').value.trim();
    const email = document.getElementById('refEmail').value.trim();
    const phone = document.getElementById('refPhone').value.trim();

    if (!name || !designation || !organization) {
        alert('Please fill in Name, Designation, and Organization fields');
        return;
    }

    const reference = {
        id: Date.now(),
        name,
        designation,
        organization,
        email,
        phone
    };

    references.push(reference);
    document.getElementById('refName').value = '';
    document.getElementById('refDesignation').value = '';
    document.getElementById('refOrganization').value = '';
    document.getElementById('refEmail').value = '';
    document.getElementById('refPhone').value = '';

    updateReferencesList();
    updatePreview();
}

function updateReferencesList() {
    const list = document.getElementById('referencesList');
    list.innerHTML = '';

    references.forEach(ref => {
        const div = document.createElement('div');
        div.className = 'reference-item';
        div.innerHTML = `
            <button class="remove-btn" onclick="removeReference(${ref.id})">×</button>
            <strong>${ref.name}</strong><br>
            ${ref.designation}<br>
            ${ref.organization}<br>
            ${ref.email ? `Email: ${ref.email}<br>` : ''}
            ${ref.phone ? `Phone: ${ref.phone}` : ''}
        `;
        list.appendChild(div);
    });
}

function removeReference(id) {
    references = references.filter(ref => ref.id !== id);
    updateReferencesList();
    updatePreview();
}

function updatePreview() {
    const fullName = document.getElementById('fullName').value.trim();
    const objective = document.getElementById('careerObjective').value.trim();

    document.getElementById('cvName').textContent = fullName || 'Your Name';
    document.getElementById('cvObjective').textContent = objective;
    document.getElementById('cvObjective').style.display = objective ? 'block' : 'none';

    document.getElementById('cvEmail').textContent = document.getElementById('email').value || '';
    document.getElementById('cvPhone').textContent = document.getElementById('phone').value || '';
    document.getElementById('cvAddress').textContent = document.getElementById('address').value || '';

    const jobType = document.getElementById('jobType').value;
    const cvGovtSection = document.getElementById('cvGovtSection');

    if (jobType === 'govt') {
        cvGovtSection.style.display = 'block';

        const fatherName = document.getElementById('fatherName');
        const motherName = document.getElementById('motherName');
        const dob = document.getElementById('dob');
        const nid = document.getElementById('nid');
        const religion = document.getElementById('religion');
        const maritalStatus = document.getElementById('maritalStatus');
        const gender = document.getElementById('gender');
        const bloodGroup = document.getElementById('bloodGroup');
        const permanentAddress = document.getElementById('permanentAddress');

        document.getElementById('cvFatherName').textContent = fatherName ? fatherName.value : '';
        document.getElementById('cvMotherName').textContent = motherName ? motherName.value : '';
        document.getElementById('cvDob').textContent = dob ? dob.value : '';
        document.getElementById('cvNid').textContent = nid ? nid.value : '';
        document.getElementById('cvReligion').textContent = religion ? religion.value : '';
        document.getElementById('cvMaritalStatus').textContent = maritalStatus ? maritalStatus.value : '';
        document.getElementById('cvGender').textContent = gender ? gender.value : '';
        document.getElementById('cvBloodGroup').textContent = bloodGroup ? bloodGroup.value : '';
        document.getElementById('cvPermanentAddress').textContent = permanentAddress ? permanentAddress.value : '';
    } else {
        cvGovtSection.style.display = 'none';
    }

    const expSection = document.getElementById('cvExperienceSection');
    const expList = document.getElementById('cvExperienceList');

    if (experiences.length > 0) {
        expSection.style.display = 'block';
        expList.innerHTML = '';

        experiences.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'cv-experience-item';
            div.innerHTML = `
                <h3>${exp.title}</h3>
                <div class="company">${exp.company}</div>
                <div class="duration">${exp.duration}</div>
                ${exp.description ? `<div class="description">${exp.description}</div>` : ''}
            `;
            expList.appendChild(div);
        });
    } else {
        expSection.style.display = 'none';
    }

    const eduSection = document.getElementById('cvEducationSection');
    const eduList = document.getElementById('cvEducationList');

    if (educations.length > 0) {
        eduSection.style.display = 'block';
        eduList.innerHTML = '';
        educations.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'cv-education-item';
            div.innerHTML = `
                <h3>${edu.degree}</h3>
                <div class="institution">${edu.institution}</div>
                <div class="year">${edu.year}</div>
                ${edu.result ? `<div class="result">Result: ${edu.result}</div>` : ''}
            `;
            eduList.appendChild(div);
        });
    } else {
        eduSection.style.display = 'none';
    }

    const skillsSection = document.getElementById('cvSkillsSection');
    const skillsList = document.getElementById('cvSkillsList');
    const languagesContainer = document.getElementById('cvLanguagesContainer');
    const languagesList = document.getElementById('cvLanguages');

    if (skills.length > 0 || languages.length > 0) {
        skillsSection.style.display = 'block';

        if (skills.length > 0) {
            skillsList.innerHTML = '';
            skills.forEach(skill => {
                const span = document.createElement('span');
                span.className = 'cv-skill-tag';
                span.textContent = skill.name;
                skillsList.appendChild(span);
            });
        } else {
            skillsList.innerHTML = '';
        }

        if (languages.length > 0) {
            languagesContainer.style.display = 'block';
            languagesList.innerHTML = '';

            languages.forEach(lang => {
                const div = document.createElement('div');
                div.className = 'cv-language-item';
                div.innerHTML = `<strong>${lang.name}:</strong> ${lang.proficiency}`;
                languagesList.appendChild(div);
            });
        } else {
            languagesContainer.style.display = 'none';
        }
    } else {
        skillsSection.style.display = 'none';
    }

    const refSection = document.getElementById('cvReferencesSection');
    const refList = document.getElementById('cvReferencesList');

    if (references.length > 0) {
        refSection.style.display = 'block';
        refList.innerHTML = '';

        references.forEach(ref => {
            const div = document.createElement('div');
            div.className = 'cv-reference-item';
            div.innerHTML = `
                <h3>${ref.name}</h3>
                <div class="designation">${ref.designation}</div>
                <div class="organization">${ref.organization}</div>
                <div class="contact">
                    ${ref.email ? `Email: ${ref.email}<br>` : ''}
                    ${ref.phone ? `Phone: ${ref.phone}` : ''}
                </div>
            `;
            refList.appendChild(div);
        });
    } else {
        refSection.style.display = 'none';
    }
}

function addHobby() {
    const hobbyInput = document.getElementById("hobbyName");
    const hobby = hobbyInput.value.trim();
    if (hobby === "") return;

    const list = document.getElementById("cvHobbiesList");
    const section = document.getElementById("cvHobbiesSection");

    const li = document.createElement("li");
    li.textContent = hobby;
    list.appendChild(li);

    section.style.display = "block";
    hobbyInput.value = "";
}


async function downloadPDF() {
    const fullName = document.getElementById('fullName').value.trim();
    if (!fullName) {
        alert('Please enter your name first!');
        return;
    }

    if (typeof html2canvas === 'undefined') {
        alert('html2canvas library not loaded!');
        return;
    }

    if (typeof jspdf === 'undefined' && typeof window.jspdf === 'undefined') {
        alert('jsPDF library not loaded!');
        return;
    }

    console.log('Starting PDF generation with html2canvas + jsPDF...');

    try {
        const element = document.getElementById('cv-content');

        if (!element) {
            alert('CV content not found!');
            return;
        }
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '⏳ Generating PDF...';
        btn.disabled = true;
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: element.scrollWidth,
            height: element.scrollHeight
        });

        console.log('Canvas created:', canvas.width, 'x', canvas.height);

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL('image/jpeg', 1.0);

        console.log('Image data created');
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`CV_${fullName.replace(/\s+/g, '_')}.pdf`);

        console.log('PDF saved successfully!');

        btn.innerHTML = originalText;
        btn.disabled = false;

    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error generating PDF: ' + error.message);

        const btn = event.target;
        btn.innerHTML = '📥 Download PDF';
        btn.disabled = false;
    }
}