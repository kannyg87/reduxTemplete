// action creatrer returen an object

export const increment = (n) => {
    return{
        type: "INCREMNET",
        data: n
        }
    }

// this is not named export. when we import into our component import { incremnet} from './path, in case of named export export default incremnet import incremnet from './path