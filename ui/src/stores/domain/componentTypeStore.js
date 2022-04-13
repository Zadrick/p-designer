import { applySnapshot, getSnapshot, types } from "mobx-state-tree";
import { componentTypeModel, PatternListModel } from '../models'

const componentTypeStore = types
.model({
    _componentType: types.optional(componentTypeModel, {}),
    _componentTypes: types.optional(PatternListModel, [])
})
.actions(self => {
    const apiV = 'http://localhost:5000/'

    const setComponentType = obj => {
        applySnapshot(self._componentType, obj)
    }

    const setComponentTypes = obj => {
        applySnapshot(self._componentTypes, obj)
    }

    const getComponentType = async id => {
        try {
            const res = await fetch(`${apiV}api/componentType?id=${id}`).then(res => res.json())
    
            setComponentType(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const postComponentType = async obj => {
        try {
            const res = await fetch(`${apiV}api/componentType`, {
              method: 'POST',
              body: JSON.stringify(obj),
              headers: {'Content-Type': 'application/json',}
            }).then(res => res.json())

            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    const putComponentType = obj => {
        try {
            fetch(`${apiV}api/componentType`, {
              method: 'PUT',
              body: JSON.stringify(obj),
              headers: {'Content-Type': 'application/json',}
            })
        } catch (e) {
            console.log(e)
        }
    }

    const deleteComponentType = id => {
        try {
            fetch(`${apiV}api/componentType?id=${id}`, {
              method: 'DELETE',
            })
          } catch (e) {
            console.log(e)
          }
    }

    const getComponentTypes = async id => {
        try {
            const res = await fetch(`${apiV}api/componentType?libraryId=${id}&page=1&pageSize=120`).then(res => res.json())
    
            setComponentTypes(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    

    return {
        getComponentType,
        getComponentTypes,
        postComponentType,
        putComponentType,
        deleteComponentType,
    }
})
.views(self => ({
    // eslint-disable-next-line getter-return
    get componentType() {
        getSnapshot(self._componentType)
    },
    // eslint-disable-next-line getter-return
    get componentTypes() {
        getSnapshot(self._componentTypes)
    },
}))

export default componentTypeStore