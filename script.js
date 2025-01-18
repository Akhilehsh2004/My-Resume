function toggleExperience() {
    const experienceText = document.getElementById('experience-text');

    if (experienceText.classList.contains('hidden')) {
        experienceText.classList.remove('hidden');

    }
    else {
        experienceText.classList.add('hidden');
    
    }
}