import {getUserProfileByUserId, putUserProfile} from "../../model/profile/profile.model";

export default function handler(req, res) {
    if (req.method === "GET") {
        const {userId} = req.query;
        const userProfile = getUserProfileByUserId(userId);
        if (!userProfile) {
            res.status(404).json({
                message: "not found"
            });
            return;
        }

        res.status(200).json(userProfile);
    } else if(req.method === "POST") {
        const createdUserProfile = putUserProfile(req.body);
        res.status(200).json(createdUserProfile);
    } else {
        res.status(405).json({
            message: "not allowed"
        });
    }
}