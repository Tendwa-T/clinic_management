import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const response = await axios.post('/login', {
                       idNo : credentials.idNo,
                       password : credentials.password, 
                    });
                    if (response.status === 201) {
                        return {
                            id: response.data.id,
                            userName: response.data.userName
                        };
                    }
                } catch (error) {
                    console.error(error.message);
                }
                return null;
            },
        }),

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
};

export default NextAuth(authOptions);