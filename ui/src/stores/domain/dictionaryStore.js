import { applySnapshot, getSnapshot, types } from "mobx-state-tree";
import { aspectLevelsModel } from '../models'

const dictionaryStore = types
.model({
    _aspectLevels: types.optional(types.array(aspectLevelsModel), [])
})
.actions(self => {
    const apiV = 'http://localhost:5000/'

    const setAspectLevels = obj => {
        applySnapshot(self._aspectLevels, obj)
    }

    const getAspectLevels = async () => {
        try {
            const res = await fetch(`${apiV}api/aspect-levels`).then(res => res.json())
    
            setAspectLevels(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getAspectLevels,
    }
})
.views(self => ({
    get aspectLevels() {
        getSnapshot(self._aspectLevels)
    },
}))

export default dictionaryStore
