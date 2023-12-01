import { service } from './service';

export const getNewList = () => {
    return service({
        url: '/news?populate=image',
        method: 'get'
    })
}

export const getBackground = () => {
    return service({
        url: '/background?populate=image',
        method: 'get'
    })
}

export const getConfiguration = () => {
    return service({
        url: '/configuration',
        method: 'get'
    })
}

export const getNotice = () => {
    return service({
        url: '/notice',
        method: 'get'
    })
}

export const getGroup = () => {
    return service({
        url: '/groups?populate=image',
        method: 'get'
    })
}
export const getMessage =()=>{
    return service({
        url: '/message',
        method: 'get'
    })
}
export const getBackgroundVideo =()=>{
    return service({
        url: '/background?populate=background',
        method: 'get'
    })
}