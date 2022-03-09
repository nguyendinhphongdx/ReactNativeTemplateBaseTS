import { theme } from "../theme/theme";
import wordApp from "../utils/word";

const groupPieChartModel = [
    {
        title: wordApp.hight,
        value: 50,
        color: theme.colors.hight
    },
    {
        title: wordApp.medium,
        value: 110,
        color: theme.colors.medium
    },
    {
        title: wordApp.low,
        value: 60,
        color: theme.colors.low
    }
]
export {groupPieChartModel}