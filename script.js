function greet(firstName, lastName) {
    console.log(`Welcome Monkey ${firstName} ${lastName}`);
}

function choose(choice) {
    const para = document.getElementById("para");
    const paratruth = document.getElementById("paratruth");
    let truth = [
        "Who is your crush?",
        "What is your favorite food?",
        "What is your favorite color?",
        "What is your favorite movie?",
        "Who was/is your first boy/girlfriend?",
        "What is the weirdest thing you've ever eaten?",
        "What is the most interesting thing you have ever done?",
        "What's your plan for surviving a zombie/alien invasion?",
        "What is your favorite book?",
        "What is your favorite song?",
        "What is your favorite TV show?",
        "What's the dumbest thing you've done recently?",
        "Would you like to be immortal?",
        "If you had one wish, and you cannot wish for more wishes, what would you wish for?",
    ];

    let easy_dare = [
        "Slap your face, hard enough to split an atom",
        "Be a chicken",
        "Be a monkey",
        "Send a pic of your pet",
        "Send a pic of where you are",
        "Wear socks on your hands for the next 3 rounds.",
        "Make a funny face and keep it that way until your next turn.",
        "Slap the first person in your DM's in the face",
        "Kill yourself"
    ];

    let medium_dare = [
        "Propose to someone in the group",
        "Go to any media platform, then Tell the 3rd person in your DMs that you love them",
        "Let the group look through your phone for 30 seconds.",
        "Imitate your least favorite celebrity.",
        "Eat a piece of paper",
        "Spam the fifth person in your DMs for 20 seconds of keyboard spam",
        "Act like a chicken until your next turn",
        "Show the last five people you texted and what the messages said.",
    ];

    let hard_dare = [
        "Jump off a cliff",
        "Say 'I love you' or 'I have always had a crush on you' to any girl/boy in the group",
        "Do 10 pushups and shout 'I love [a player's name]!' after each one.",
        "Try to juggle 3 things of the group's choice.",
        "Pretend to be a food item of your choice.",
        "Show the group your search history for the past three days",
        "Commit murder",
        "Commit Arson"
    ];

    let question;
    if (choice === "truth") {
        location.href = "truth.html";
    } else if (choice === "dare") {
        location.href = "dare.html";
    } else if (choice === "random") {
        if (Math.random() < 0.5) {
            location.href = "truth.html";
        } else {
            location.href = "dare.html";
        }
    } else if (choice === "easy") {
        question = easy_dare[Math.floor(Math.random() * easy_dare.length)];
        // console.log(question);
        para.textContent = question;
    } else if (choice === "medium") {
        question = medium_dare[Math.floor(Math.random() * medium_dare.length)];
        // console.log(question);
        para.textContent = question;
    } else if (choice === "hard") {
        question = hard_dare[Math.floor(Math.random() * hard_dare.length)];
        // console.log(question);
        para.textContent = question;
        
    } else if (choice === "truthgo") {
        question = truth[Math.floor(Math.random() * truth.length)];
        paratruth.textContent = question;
    }
}

function handleInput() {
    const userInput = document.getElementById("userInput").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    greet(firstName, lastName);
    console.log(userInput); // Print the current input to the console

    const start = document.getElementById("start");
    start.addEventListener("mouseleave", function () {
        start.textContent = "Start";
        start.style.backgroundColor = "lightblue";
    });

    if (userInput === "Hi") {
        console.log("User said exactly: " + userInput);
    } else {
        console.log("User did not say the expected phrase.");
    }
}
function Signup() {
    // This array is to store the data of the users and in the log in function we are going to check if they exist here
    const users = [
        {firstname: "Ethan", lastname: "Fan", password: "Ethandontknowwhattochoose", username: "heheha", ssn: "123 456 789", ccn: "1234 5678 9012 3456"},
        {firstname: "Fozhan", lastname: "Baba", password: "Foojboo", username: "foojboo", ssn: "123 456 789", ccn: "1234 5678 9012 3456"},
    ];
    const firstname = document.getElementById("signUpFirstName").value;
    const lastname = document.getElementById("signUpLastName").value;
    const username = document.getElementById("signUpUsername").value;
    const social = document.getElementById("signUpSocialSecurity").value;
    const credit = document.getElementById("signUpCreditCard").value;

}