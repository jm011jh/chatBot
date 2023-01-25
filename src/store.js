import {create} from 'zustand'

const useStore = create((set) => ({
    asideProp : false,
    asideOn : ()=> set(({asideProp: true})),
    asideOff : ()=> set(({asideProp: false})),
}))

export default useStore