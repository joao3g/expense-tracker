import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Group from '../models/group.model.js';

const SECRET_KEY = process.env["SECRET_KEY"];
if (!SECRET_KEY) throw new Error("Invalid SECRET_KEY!");

const login = async (login: string, password: string) => {
    try {
        const userData = await User.getForAuthByLogin(login);
        if (!userData) throw new Error("User not found!");
        if (!userData.group) throw new Error("User group not found!");

        const groupUsersCount = await Group.countUsersByGroup(userData.group.id);

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) throw new Error("Incorrect password!");

        const userInfo = {
            login,
            name: userData.name,
            email: userData.email,
            group: {
                title: userData.group.title,
                totalMembers: groupUsersCount
            }
        }

        return {
            token: jwt.sign(
                userInfo,
                SECRET_KEY,
                { expiresIn: '1Yr' }
            ),
            user: userInfo
        };
    } catch (error) {
        console.error("[login(service)]: ", error);
        throw error;
    }
}

export default { login };