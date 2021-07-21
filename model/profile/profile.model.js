export function getUserProfileByUserId(userId) {
    return {
        username: "Ikanny",
        major: "Computer engineering",
        age: 20
    };
}

export function putUserProfile(userProfile) {
    return {
        userId: 1,
        ...userProfile
    };
}