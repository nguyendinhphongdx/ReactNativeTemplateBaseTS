type mapping = {
  title: string;
  description: string;
  basic: React.Component;
  components: {
    component: any;
    title: string;
    description: string;
  }[];
};

export const mapping: any = {
  Actionsheet: {
    title: 'Actionsheet',
    description: '',
    doclink: 'https://docs.nativebase.io/actionSheet',
    basic: require('../../components/NativeBaseComponents/Actionsheet'),
    components: [],
  },
  Alert: {
    title: 'Alert',
    description: '',
    doclink: 'https://docs.nativebase.io/alert',
    basic: require('../../components/NativeBaseComponents/Alert'),
    components: [],
  },
  AlertDialog: {
    title: 'AlertDialog',
    description: '',
    doclink: 'https://docs.nativebase.io/alertDialog',
    basic: require('../../components/NativeBaseComponents/AlertDialog'),
    components: [],
  },
  Avatar: {
    title: 'Avatar',
    description: '',
    doclink: 'https://docs.nativebase.io/avatar',
    basic: require('../../components/NativeBaseComponents/Avatar'),
    components: [],
  },
  Badge: {
    title: 'Badge',
    description: '',
    doclink: 'https://docs.nativebase.io/badge',
    basic: require('../../components/NativeBaseComponents/Badge'),
    components: [],
  },
  Button: {
    title: 'Button',
    description: 'Primitive Element',
    doclink: 'https://docs.nativebase.io/button',
    basic: require('../../components/NativeBaseComponents/Button'),
    components: [],
  },
  Box: {
    title: 'Box',
    description: '',
    doclink: 'https://docs.nativebase.io/box',
    basic: require('../../components/NativeBaseComponents/Box'),
    components: [],
  },
  Center: {
    title: 'Center',
    description: '',
    doclink: 'https://docs.nativebase.io/center',
    basic: require('../../components/NativeBaseComponents/Center'),
    components: [],
  },
  CheckBox: {
    title: 'CheckBox',
    description: 'Primitive Element',
    doclink: 'https://docs.nativebase.io/checkBox',
    basic: require('../../components/NativeBaseComponents/CheckBox'),
    components: [],
  },
  Column: {
    title: 'Column',
    description: 'Renders your data vertically',
    doclink: 'https://docs.nativebase.io/VStack',
    basic: require('../../components/NativeBaseComponents/Column'),
    components: [],
  },
  Divider: {
    title: 'Divider',
    description: '',
    doclink: 'https://docs.nativebase.io/divider',
    basic: require('../../components/NativeBaseComponents/Divider'),
    components: [],
  },
  Fab: {
    title: 'Fab',
    description: '',
    doclink: 'https://docs.nativebase.io/FAB',
    basic: require('../../components/NativeBaseComponents/Fab'),
    components: [],
  },
  Flex: {
    title: 'Flex',
    description: "Box with display='Flex'",
    doclink: 'https://docs.nativebase.io/flex',
    basic: require('../../components/NativeBaseComponents/Flex'),
    components: [],
  },
  FlatList: {
    title: 'FlatList',
    description: '',
    doclink: 'https://docs.nativebase.io/flatList',
    basic: require('../../components/NativeBaseComponents/FlatList'),
    components: [],
  },
  FormControl: {
    title: 'FormControl',
    description: '',
    doclink: 'https://docs.nativebase.io/formControl',
    basic: require('../../components/NativeBaseComponents/FormControl'),
    components: [],
  },
  Heading: {
    title: 'Heading',
    description: 'It shows the Title',
    doclink: 'https://docs.nativebase.io/heading',
    basic: require('../../components/NativeBaseComponents/Heading'),
    components: [],
  },
  HStack: {
    title: 'HStack',
    description: 'Rows structure',
    doclink: 'https://docs.nativebase.io/hStack',
    basic: require('../../components/NativeBaseComponents/HStack'),
    components: [],
  },
  Icon: {
    title: 'Icon',
    description: 'Show Icon in NativeBase',
    doclink: 'https://docs.nativebase.io/icon',
    basic: require('../../components/NativeBaseComponents/Icon'),
    components: [],
  },
  IconButton: {
    title: 'IconButton',
    description: '',
    doclink: 'https://docs.nativebase.io/iconButton',
    basic: require('../../components/NativeBaseComponents/IconButton'),
    components: [],
  },
  Image: {
    title: 'Image',
    description: 'Show image in NativeBase',
    doclink: 'https://docs.nativebase.io/image',
    basic: require('../../components/NativeBaseComponents/Image'),
    components: [],
  },
  Input: {
    title: 'Input',
    description: '',
    doclink: 'https://docs.nativebase.io/input',
    basic: require('../../components/NativeBaseComponents/Input'),
    components: [],
  },
  KeyboardAvoidingView: {
    title: 'KeyboardAvoidingView',
    description: '',
    doclink: 'https://docs.nativebase.io/keyboardAvoidingView',
    basic: require('../../components/NativeBaseComponents/KeyboardAvoidingView'),
    components: [],
  },
  Link: {
    title: 'Link',
    description: 'Used to navigate',
    doclink: 'https://docs.nativebase.io/link',
    basic: require('../../components/NativeBaseComponents/Link'),
    components: [],
  },
  // List: {
  // 	title: "List",
  // 	description: "",
  // doclink: 'https://docs.nativebase.io/list',
  // 	// basic: require("../components/NativeBaseComponents/List"),
  // 	components: [
  // 		{
  // 			component: require("../nb/components/primitives/List/Basic"),
  // 			title: "Basic",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/OrderedList"),
  // 			title: "Ordered list",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/UnorderedList"),
  // 			title: "Unordered list",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/ListWithIcon"),
  // 			title: "ListWithIcon",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/PressableList"),
  // 			title: "Pressable list",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/StylingList"),
  // 			title: "Styling list",
  // 			description: "",
  // 		},
  // 		{
  // 			component: require("../nb/components/primitives/List/VirtualizedList"),
  // 			title: "Virtualized list",
  // 			description: "",
  // 		},
  // 	],
  // },
  Menu: {
    title: 'Menu',
    description: '',
    doclink: 'https://docs.nativebase.io/menu',
    basic: require('../../components/NativeBaseComponents/Menu'),
    components: [],
  },
  Modal: {
    title: 'Modal',
    description: '',
    doclink: 'https://docs.nativebase.io/modal',
    basic: require('../../components/NativeBaseComponents/Modal'),
    components: [],
  },
  Popover: {
    title: 'Popover',
    description: '',
    doclink: 'https://docs.nativebase.io/popOver',
    basic: require('../../components/NativeBaseComponents/Popover'),
    components: [],
  },
  Pressable: {
    title: 'Pressable',
    description: '',
    doclink: 'https://docs.nativebase.io/pressable',
    basic: require('../../components/NativeBaseComponents/Pressable'),
    components: [],
  },
  Progress: {
    title: 'Progress',
    description: '',
    doclink: 'https://docs.nativebase.io/progress',
    basic: require('../../components/NativeBaseComponents/Progress'),
    components: [],
  },
  Radio: {
    title: 'Radio',
    description: '',
    doclink: 'https://docs.nativebase.io/radio',
    basic: require('../../components/NativeBaseComponents/Radio'),
    components: [],
  },
  ScrollView: {
    title: 'ScrollView',
    description: '',
    doclink: 'https://docs.nativebase.io/scrollview',
    basic: require('../../components/NativeBaseComponents/ScrollView'),
    components: [],
  },
  SectionList: {
    title: 'SectionList',
    description: '',
    doclink: 'https://docs.nativebase.io/sectionList',
    basic: require('../../components/NativeBaseComponents/SectionList'),
    components: [],
  },
  Select: {
    title: 'Select',
    description: '',
    doclink: 'https://docs.nativebase.io/select',
    basic: require('../../components/NativeBaseComponents/Select'),
    components: [],
  },
  Slider: {
    title: 'Slider',
    description: '',
    doclink: 'https://docs.nativebase.io/slider',
    basic: require('../../components/NativeBaseComponents/Slider'),
    components: [],
  },
  Spinner: {
    title: 'Spinner',
    description: '',
    doclink: 'https://docs.nativebase.io/spinner',
    basic: require('../../components/NativeBaseComponents/Spinner'),
    components: [],
  },
  Stack: {
    title: 'Stack',
    description: '',
    doclink: 'https://docs.nativebase.io/stack',
    basic: require('../../components/NativeBaseComponents/Stack'),
    components: [],
  },
  StatusBar: {
    title: 'StatusBar',
    description: '',
    doclink: 'https://docs.nativebase.io/statusBar',
    basic: require('../../components/NativeBaseComponents/StatusBar'),
    components: [],
  },
  Switch: {
    title: 'Switch',
    description: '',
    doclink: 'https://docs.nativebase.io/switch',
    basic: require('../../components/NativeBaseComponents/Switch'),
    components: [],
  },
  Tabs: {
    title: 'Tabs',
    description: '',
    doclink: 'https://docs.nativebase.io/tabs',
    basic: require('../../components/NativeBaseComponents/Tabs'),
    components: [],
  },
  Text: {
    title: 'Text',
    description: '',
    doclink: 'https://docs.nativebase.io/text',
    basic: require('../../components/NativeBaseComponents/Text'),
    components: [],
  },
  TextArea: {
    title: 'TextArea',
    description: '',
    doclink: 'https://docs.nativebase.io/textArea',
    basic: require('../../components/NativeBaseComponents/TextArea'),
    components: [],
  },
  Toast: {
    title: 'Toast',
    description: '',
    doclink: 'https://docs.nativebase.io/toast',
    basic: require('../../components/NativeBaseComponents/Toast'),
    components: [],
  },
  Tooltip: {
    title: 'Tooltip',
    description: '',
    doclink: 'https://docs.nativebase.io/tooltip',
    basic: require('../../components/NativeBaseComponents/ToolTip'),
    components: [],
  },
  Transitions: {
    title: 'Transitions',
    description: '',
    doclink: 'https://docs.nativebase.io/transition',
    basic: require('../../components/NativeBaseComponents/Transitions'),
    components: [],
  },
  View: {
    title: 'View',
    description: '',
    doclink: 'https://docs.nativebase.io/view',
    basic: require('../../components/NativeBaseComponents/View'),
    components: [],
  },
  VStack: {
    title: 'VStack',
    description: '',
    doclink: 'https://docs.nativebase.io/VStack',
    basic: require('../../components/NativeBaseComponents/VStack'),
    components: [],
  },
  ZStack: {
    title: 'ZStack',
    description: '',
    doclink: 'https://docs.nativebase.io/ZStack',
    basic: require('../../components/NativeBaseComponents/ZStack'),
    components: [],
  },
};
