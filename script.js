// Function to handle image selection
let selectedImage = null;

function selectImage(image) {
    selectedImage = image;
    document.querySelectorAll('.img-thumbnail').forEach(img => img.classList.remove('selected'));
    event.target.classList.add('selected');
}

// Function to recommend a challenge
function recommendChallenge(answers, image) {
    const totalScore = answers.reduce((sum, value) => sum + parseInt(value), 0);

    // Logic to determine the challenge
    if (totalScore >= 15 || image === 'stormy') {
        return 'emotional'; // Emotional Challenge
    } else if (totalScore >= 10 || image === 'crowded') {
        return 'social'; // Social Challenge
    } else if (totalScore >= 5 || image === 'calm') {
        return 'physical'; // Physical Challenge
    } else if (totalScore >= 3) {
        return 'financial'; // Financial Challenge
    } else if (totalScore >= 1) {
        return 'intellectual'; // Intellectual Challenge
    } else {
        return 'spiritual'; // Spiritual Challenge
    }
}

// Handle form submission for the challenge quiz
document.getElementById('challengeQuiz').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get answers
    const answers = [
        document.getElementById('question1').value,
        document.getElementById('question2').value,
        document.getElementById('question3').value,
    ];

    // Recommend challenge
    const challenge = recommendChallenge(answers, selectedImage);

    // Redirect to the recommended challenge page
    window.location.href = `../pages/${challenge}.html`;
});

// Function to handle challenge selection (for Section 2)
function selectChallenge(page) {
    window.location.href = page;
}

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form data
    if (!firstName || !lastName || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Simulate form submission
    alert('Account created successfully!');
    // Redirect to another page or perform further actions
});