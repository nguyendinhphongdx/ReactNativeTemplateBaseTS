import { theme } from "../../theme/theme";

const devicesStatus = [
  {label: 'Connected', y: 35, color: theme.colors.hight},
  {label: 'Disconnected', y: 40, color: theme.colors.medium},
];
const unauthorizedAccess = [
  {x: 'Web', y: 500,  colorScale: theme.colors.hight},
  {x: 'SSh', y: 70, colorScale: theme.colors.medium},
  {x: 'Database', y: 200, colorScale: theme.colors.low},
  {x: 'Server', y: 800, colorScale: theme.colors.primary},
]
const violateByTime = [
  {x: '01/2022', y: 500},
  {x: '02/2022', y: 100},
  {x: '03/2022', y: 700},
  {x: '04/2022', y: 400},
  {x: '05/2022', y: 900},
]
export {devicesStatus,unauthorizedAccess,violateByTime};