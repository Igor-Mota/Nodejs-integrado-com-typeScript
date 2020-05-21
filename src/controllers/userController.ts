import {Request, Response} from "express";
import EmailService from "../services/emailService";
const users = [
    {name:"igor", email:"igormota999@gmail.com"}
];
export default {
    index(req: Request, res: Response){
        return res.send(users);
    },
    async creatUser(req:Request, res:Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
                name:"igor", 
                email:"igorMota99@hotmail.com"
            },
            message:{
                subject:"ben vindo ao sistema", 
                body: "Seja bem vindo"
            }
        });

        return res.send("foi");
    }
}