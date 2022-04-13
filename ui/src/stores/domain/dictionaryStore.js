import { applySnapshot, getSnapshot, types } from "mobx-state-tree";
import { aspectLevelsModel, PatternListModel } from '../models'

const dictionaryStore = types
.model({
    _aspectLevels: types.optional(types.array(aspectLevelsModel), []),
    _attributes: types.optional(PatternListModel, []),
    _measureUnits: types.optional(PatternListModel, []),
    _lifecycleStatuses: types.optional(PatternListModel, []),
})
.actions(self => {
    const apiV = 'http://localhost:5000/'

    const setAspectLevels = obj => {
        applySnapshot(self._aspectLevels, obj)
    }

    const setAttributes = obj => {
        applySnapshot(self._attributes, obj)
    }

    const setMeasureUnits = obj => {
        applySnapshot(self._measureUnits, obj)
    }

    const setLifecycleStatuses = obj => {
        applySnapshot(self._lifecycleStatuses, obj)
    }

    const getAspectLevels = async () => {
        try {
            const res = await fetch(`${apiV}api/aspect-levels`).then(res => res.json())
    
            setAspectLevels(res)
        } catch (e) {
            console.log(e)
        }
    }

    const getAttributes = async () => {
        try {
            const res = await fetch(`${apiV}api/attributes`).then(res => res.json())
    
            setAttributes(res)
        } catch (e) {
            console.log(e)
        }
    }

    const getMeasureUnits = async () => {
        try {
            const res = await fetch(`${apiV}api/measure-units`).then(res => res.json())
    
            setMeasureUnits(res)
        } catch (e) {
            console.log(e)
        }
    }

    const getLifecycleStatuses = async () => {
        try {
            const res = await fetch(`${apiV}api/lifecycle-statuses`).then(res => res.json())
    
            setLifecycleStatuses(res)
        } catch (e) {
            console.log(e)
        }
    }


    return {
        getAspectLevels,
        getAttributes,
        getMeasureUnits,
        getLifecycleStatuses,
    }
})
.views(self => ({
    // eslint-disable-next-line getter-return
    get aspectLevels() {
        getSnapshot(self._aspectLevels)
    },
    // eslint-disable-next-line getter-return
    get attributes() {
        getSnapshot(self._attributes)
    },
    // eslint-disable-next-line getter-return
    get measureUnits() {
        getSnapshot(self._measureUnits)
    },
    // eslint-disable-next-line getter-return
    get lifecycleStatuses() {
        getSnapshot(self._lifecycleStatuses)
    },
}))

export default dictionaryStore
