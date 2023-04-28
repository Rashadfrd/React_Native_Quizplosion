import { MaterialIcons, AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export const tools = [
    {
        id:1,
        icon:<MaterialIcons name="topic" size={30} color="#1c1a5e" />,
        text:'10+ mövzu'
    },
    {
        id:2,
        icon:<FontAwesome5 name="think-peaks" size={30} color="#1c1a5e" />,
        text:'3+ səviyyə'
    },
    {
        id:3,
        icon:<AntDesign name="questioncircleo" size={30} color="#1c1a5e" />,
        text:'1000+ sual'
    },
    {
        id:4,
        icon:<FontAwesome name="hand-stop-o" size={30} color="#1c1a5e" />,
        text:'Final Boss'
    },
]


export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }