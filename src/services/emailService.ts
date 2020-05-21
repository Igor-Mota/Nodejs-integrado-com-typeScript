interface IMailTo{
    name:String;
    email:String;
}
interface IMailMessage{
    subject:String;
    body: String;
    attachament?:String[] 
}

interface IMessageDto{
    to: IMailTo;
    message: IMailMessage;
}
class EmailService {
    sendMail({to , message}: IMessageDto){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }

}
export default EmailService;