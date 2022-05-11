const form = document.querySelector("form");

form.addEventListener("submit", function() {

    const User = {
        firstName: form[0].value,
        lastName: form[1].value,
        number: form[2].value,
        email: form[3].value,

        github: form[4].value,
        linkedin: form[5].value,
        codechef: form[6].value,
        hackerrank: form[7].value,

        collegeDuration: form[8].value,
        collegeDegree: form[9].value,
        collegeName: form[10].value,
        collegeGrade: form[11].value,

        s1Duration: form[12].value,
        s1Name: form[13].value,
        s1Board: form[14].value,
        s1Grade: form[15].value,

        s2Duration: form[16].value,
        s2Name: form[17].value,
        s2Board: form[18].value,
        s2Grade: form[19].value

    }

localStorage.setItem("firstName", User.firstName);
localStorage.setItem("lastName", User.lastName);
localStorage.setItem("number", User.number);
localStorage.setItem("email", User.email);

localStorage.setItem("github", User.github);
localStorage.setItem("linkedin", User.linkedin);
localStorage.setItem("codechef", User.codechef);
localStorage.setItem("hackerrank", User.hackerrank);

localStorage.setItem("collegeDuration", User.collegeDuration);
localStorage.setItem("collegeDegree", User.collegeDegree);
localStorage.setItem("collegeName", User.collegeName);
localStorage.setItem("collegeGrade", User.collegeGrade);

localStorage.setItem("s1Duration", User.s1Duration);
localStorage.setItem("s1Name", User.s1Name);
localStorage.setItem("s1Board", User.s1Board);
localStorage.setItem("s1Grade", User.s1Grade);

localStorage.setItem("s2Duration", User.s2Duration);
localStorage.setItem("s2Name", User.s2Name);
localStorage.setItem("s2Board", User.s2Board);
localStorage.setItem("s2Grade", User.s2Grade);

	// alert(User.name+", "+User.number+", "+User.email);
})

