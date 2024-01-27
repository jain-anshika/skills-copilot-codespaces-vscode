function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000
    };
    member.showSkills = function () {
        member.skills.forEach(function (skill) {
            console.log(skill);
        });
    };
    return member;
}
