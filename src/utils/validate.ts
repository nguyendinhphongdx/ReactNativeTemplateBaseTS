class Validate {
    validateLogin = (username: string, password: string) =>{
        try {
            if(username != 'bkav' && password != 'Bkav@2022'){
                return "Username or Password is incorrect !";
            }
            return true;
        } catch (error) {
        }
        
    }
}
export default new Validate;