import avatars from con2.js;

//funktion som sorterar avatarer efter ålder.
function sortAvatars() {
    avatars.age.sort(function (a, b) {
        return a - b;
    });
}

export default sortAvatars;