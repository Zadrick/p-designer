import { applySnapshot, getSnapshot, types } from "mobx-state-tree";
import { componentTypeModel, PatternListModel } from '../models'

const componentTypeStore = types
.model({
    _componentType: types.optional(componentTypeModel, {}),
    _componentTypes: types.optional(PatternListModel, []),
    _addType: types.optional(PatternListModel, []),
    _deleteType: types.optional(types.array(types.number), [])
})
.actions(self => {
    const apiV = 'http://localhost:5000/'

    const setComponentType = obj => {
      applySnapshot(self._componentType, obj)
    }

    const setComponentTypes = obj => {
      applySnapshot(self._componentTypes, obj)
    }

    const createType = obj => {
      applySnapshot(self._addType, [...self._addType, obj])
      applySnapshot(self._componentTypes, [...self._componentTypes, obj])
    }

    const deleteNewType = name => {
      applySnapshot(self._addType, self._addType.filter(item => item.name !== name))
      applySnapshot(self._componentTypes, self._componentTypes.filter(item => item.name !== name))
    }

    const deleteOldType = id => {
      applySnapshot(self._componentTypes, self._componentTypes.filter(item => item.id !== id))
      applySnapshot(self._deleteType, [...self._deleteType, id])
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
            const res = await fetch(`${apiV}api/componentTypes?libraryId=${id}&page=1&pageSize=120`).then(res => res.json())
            
            console.log(res.data);
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
        createType,
        deleteNewType,
        deleteOldType,
    }
})
.views(self => ({
    get componentType() {
        return getSnapshot(self._componentType)
    },
    get componentTypes() {
        return getSnapshot(self._componentTypes)
    },
}))
.views(self => ({
    get patternList() {
        return getSnapshot(self._patternList)
    },
    get criteriaList() {
      return getSnapshot(self._criteriaList)
    },
    get projectList() {
      return getSnapshot(self._projectList)
    },
    get pattern() {
      return getSnapshot(self._pattern)
    },
    get criteriaDetails() {
      return getSnapshot(self._criteriaDetails)
    },
    get createdCharacteristics() {
      return getSnapshot(self._createdCharacteristics)
    },
    get updatedCharacteristics() {
      return getSnapshot(self._updatedCharacteristics)
    },
    get deletedCharacteristics() {
      return getSnapshot(self._deletedCharacteristics)
    },
    get createdProjects() {
      return getSnapshot(self._createdProjects)
    },
    get deletedProjects() {
      return getSnapshot(self._deletedProjects)
    },
    get projectsDetails() {
      return getSnapshot(self._projectsDetails)
    }
  }))

export default componentTypeStore