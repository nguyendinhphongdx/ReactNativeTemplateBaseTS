import Ionicons from 'react-native-vector-icons/Ionicons';

export const sliderData = [
  {
    title: 'First Game',
    image: require('../assets/images/homescreen/game-1.jpeg'),
  },
  {
    title: 'Second Game',
    image: require('../assets/images/homescreen/game-2.jpeg'),
  },
  {
    title: 'Third Game',
    image: require('../assets/images/homescreen/game-3.png'),
  },
];

export const paidGames = [
  {
    poster: require('../assets/images/spiderman.webp'),
    title: 'Spider-Man',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$25.99',
    id: '1',
  },
  {
    poster: require('../assets/images/battlefield-2042.webp'),
    title: 'Battlefield 2042',
    subtitle: 'EA',
    isFree: 'No',
    price: '$19.99',
    id: '2',
  },
  {
    poster: require('../assets/images/miles-morales.webp'),
    title: 'Spider-Man: Miles Morales',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$29.99',
    id: '3',
  },
  {
    poster: require('../assets/images/halo-infinite.jpeg'),
    title: 'Halo Infinite',
    subtitle: 'Xbox Game',
    isFree: 'No',
    price: '$24.99',
    id: '4',
  },
  {
    poster: require('../assets/images/FarCry6.png'),
    title: 'Far Cry 6',
    subtitle: 'Ubisoft',
    isFree: 'No',
    price: '$15.99',
    id: '5',
  },
  {
    poster: require('../assets/images/god-of-war.jpeg'),
    title: 'God of War: Ragnarok',
    subtitle: 'Sony',
    isFree: 'No',
    price: '$25.99',
    id: '6',
  },
];

export const freeGames = [
  {
    poster: require('../assets/images/Altos-Odyssey.jpeg'),
    title: 'Altos Odyssey',
    subtitle: 'Noodlecake Studios',
    isFree: 'Yes',
    id: '1',
  },
  {
    poster: require('../assets/images/asphalt-9.jpeg'),
    title: 'Asphalt 9',
    subtitle: 'Gameloft',
    isFree: 'Yes',
    id: '2',
  },
  {
    poster: require('../assets/images/genshin-impact.jpeg'),
    title: 'Genshin Impact',
    subtitle: 'miHoYo',
    isFree: 'Yes',
    id: '3',
  },
  {
    poster: require('../assets/images/fortnite.webp'),
    title: 'Fortnite',
    subtitle: 'Epic Games',
    isFree: 'Yes',
    id: '4',
  },
  {
    poster: require('../assets/images/pokemon-unite.jpeg'),
    title: 'Pokémon Unite',
    subtitle: 'The Pokémon Company',
    isFree: 'Yes',
    id: '5',
  },
  {
    poster: require('../assets/images/diablo-4.jpeg'),
    title: 'Diablo 4',
    subtitle: 'Blizzard Entertainment',
    isFree: 'No',
    id: '6',
  },
];
export interface TypesWarning {
  id: number;
  alert: string;
  status: string;
  description?:string;
  time: number;
  number: number;
  priority: boolean;
  info?: any;
}
export const listWarnings: Array<TypesWarning> = [
  {
    id: 0,
    alert: 'Ket nối máy chủ mã độc',
    number: 45,
    status: 'Chờ xử lý',
    description:'info Installing /Users/dinhphong/Library/Developer/Xcode/DerivedData/ReactNativeApp-gdvslehrovxazuaijsllqvmgzaql/Build/Products/Debug-iphonesimulator/ReactNativeApp.app',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 1,
    alert: 'Tấn công DDos',
    number: 14,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 2,
    alert: 'Tấn công rà quyét',
    number: 124,
    status: 'Đã xử lý',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 3,
    alert: 'Window Logon Success',
    number: 20,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
    info: {
      detail: {
        Icon: 'A',
        Status: 'string',
        Date: 1,
        Action: 'string',
        Type: 'string',
        Asset: 'string',
      },
    },
  },
  {
    id: 4,
    alert: 'Window Logon Success',
    number: 450,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: false,
  },
  {
    id: 10,
    alert: 'Window Logon Success',
    number: 20,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
  },
  {
    id: 5,
    alert: 'Window Logon Success',
    number: 40,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
  },
  {
    id: 6,
    alert: 'Window Logon Success',
    number: 50,
    status: 'Đang xác minh',
    time: new Date().getTime(),
    priority: true,
  },
  {
    id: 7,
    alert: 'Địa chỉ IP không xác định',
    number: 200,
    status: 'Chờ xử lý',
    time: new Date().getTime(),
    priority: false,
  },
];

