import avatars from con2.js; // varifrån imprteras detta?

function sortAvatars() {
    avatars.age.sort(function (a, b) {
        return a - b;
    });
}

export default sortAvatars;