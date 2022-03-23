import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { OnePatternModel, PatternListModel, criteriaModel } from '../models'

const PatternStore = types
  .model({
    _patternList: types.optional(PatternListModel, []),
    _pattern: types.optional(OnePatternModel, {}),
    _createdCharacteristics: types.optional(types.array(criteriaModel), []),
    _updatedCharacteristics: types.optional(types.array(criteriaModel), []),
    _deletedCharacteristics:  types.optional(types.array(types.number, 0), []),
    _createdProjects: types.optional(types.array(criteriaModel), []),
    _deletedProjects: types.optional(types.array(types.number, 0), []),

  })
  .actions(self => {
    const apiV = 'https://localhost:44378/'

    const setPatternList = newPatternList => {
        applySnapshot(self._patternList, newPatternList)
    }

    const setPattren = newPattern => {
      applySnapshot(self._pattern, newPattern)
    }

    const setCreatedCharacteristics = obj => {
      applySnapshot(self._createdCharacteristics, [...self._createdCharacteristics, obj])
      
    }

    const setDeletedCharacteristics = id => {
      applySnapshot(self._deletedCharacteristics, [...self._deletedCharacteristics, id])
    }

    const setUpdatedCharacteristics = obj => {
      applySnapshot(self._updatedCharacteristics, [...self._updatedCharacteristics, obj])
    }
    
    const setCreatedProjects = () => {

    }

    const setDeletedProjects = id => {
      applySnapshot(self._deletedProjects, [...self._deletedProjects, id])
    }

    const getPatternList = async () => {
      try {
        const res = await fetch(`${apiV}api/patterns`).then(res => res.json())

        setPattren(res)
      } catch (e) {
        console.log(e)
      }
    }

    const getPattern = async id => {
      try {
        const res = await fetch(`${apiV}api/pattern?id=${id}`).then(res => res.json())

        setPatternList(res)
      } catch (e) {
        console.log(e)
      }
    }

    const postPattern = async name => {
      try {
        const res = await fetch(`${apiV}api/pattern`, {
          method: 'POST',
          body: JSON.stringify({name: name}),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())

        setPatternList(res)
      } catch (e) {
        console.log(e)
      }
    }

    const putPattern = async obj => {
      try {
        const res = await fetch(`${apiV}api/pattern`, {
          method: 'PUT',
          body: JSON.stringify(obj),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())

        setPatternList(res)
      } catch (e) {
        console.log(e)
      }
    }

    const removePattern = async id => {
      try {
        const res = await fetch(`${apiV}api/pattern/remove?id=${id}`, {
          method: 'DELETE',
        }).then(res => res.json())

        setPatternList(res)
      } catch (e) {
        console.log(e)
      }
    }





    return {
        getPatternList,
        getPattern,
        putPattern,
        postPattern,
        setDeletedProjects,
        setDeletedCharacteristics,
        setCreatedCharacteristics,
    }

  })
  .views(self => ({
    get patternList() {
        return getSnapshot(self._patternList)
    }
  }))

export default PatternStore