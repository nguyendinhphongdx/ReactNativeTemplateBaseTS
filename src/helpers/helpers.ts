import { theme } from "../theme/theme";
import { logger } from "react-native-logs";
class Helpers{
   log = logger.createLogger();
 
    divideLevelWarning = (number: number) =>{
        if(number >0&& number <30) return  theme.colors.low;
        if(number >30&& number <70) return theme.colors.medium;
        return theme.colors.hight;
        
     }
    waited = (time:number) =>{
        const myPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
          }, time);
        })
        return myPromise;
      };
    debug(){
      this.log.debug(arguments);
    }
    infor(message:string){
      this.log.infor(message);
    }
    warn(message:string){
      this.log.warn(message);
    }
    error(message:string){
      this.log.error(message);
    }
}

export default new Helpers;