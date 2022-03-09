import {NameScreen} from '../../config';
import wordApp from '../../utils/word';

const dataFunctions = [
  {
    id: 1,
    title: wordApp.functions.netWork,
    icon: require('../../assets/icons/png/network.png'),
    navigation: NameScreen.NetWorkScreen,
  },
  {
    id: 2,
    title: wordApp.functions.server,
    icon: require('../../assets/icons/png/network2.png'),
    navigation: NameScreen.HostingScreen,
  },
  {
    id: 3,

    title: wordApp.functions.Application,
    icon: require('../../assets/icons/png/application.png'),
    navigation: NameScreen.ApplicationScreen,
  },
  {
    id: 6,

    title: wordApp.functions.endpoint,
    icon: require('../../assets/icons/png/database.png'),
    navigation: NameScreen.EndpointScreen,
  },
];
export {dataFunctions};
