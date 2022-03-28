import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { OnePatternModel, PatternListModel, criteriaModel, projects } from '../models'

const PatternStore = types
  .model({
    _patternList: types.optional(PatternListModel, []),
    _pattern: types.optional(OnePatternModel, {}),
    _createdCharacteristics: types.optional(types.array(criteriaModel), []),
    _updatedCharacteristics: types.optional(types.array(criteriaModel), []),
    _deletedCharacteristics:  types.optional(types.array(types.number, 0), []),
    _createdProjects: types.optional(PatternListModel, []),
    _deletedProjects: types.optional(types.array(types.number, 0), []),
    _criteriaDetails: types.optional(criteriaModel, {}),
    _projectsDetails: types.optional(projects, {}),
    isUpdate: types.optional(types.boolean, false),
    activePattern: types.optional(types.number, 1),
    patternLifecycle: types.optional(types.number, 1)
  })
  .actions(self => {
      const apiV = 'https://localhost:44378/'

    const setIsUpdate = boll => {
      applySnapshot(self.isUpdate, boll)
    }

    const setProjectsDetails = obj => {
      applySnapshot(self._projectsDetails, obj)
    }

    const setPatternLifecycle = id => {
      applySnapshot(self.patternLifecycle, id)
    }
    
    const setActivePettern = id => {
      self.activePattern = id
    }

    const setPatternList = newPatternList => {
        applySnapshot(self._patternList, newPatternList)
    }

    const setPattern = newPattern => {
      applySnapshot(self._pattern, newPattern)
    }

    const renamePattern = newName => {
      applySnapshot(self._pattern, {...self.pattern, name: newName})
    }

    const setCriteriaDetails = obj => {
      applySnapshot(self._criteriaDetails, obj)
    }

    const setCreatedCharacteristics = obj => {
      applySnapshot(self._criteriaDetails, obj)
      applySnapshot(self._createdCharacteristics, [...getSnapshot(self._createdCharacteristics), obj])
      applySnapshot(self._pattern, {...self._pattern, characteristics: [...getSnapshot(self._pattern.characteristics), obj]})
    }

    const setDeletedOldCharacteristics = obj => {
      if (self._criteriaDetails.id === obj.id) {
        setCriteriaDetails({})
      }
      applySnapshot(self._deletedCharacteristics, [...self._deletedCharacteristics, obj.id])
      applySnapshot(self._pattern, {...self._pattern, 
        characteristics: self._pattern.characteristics.filter(item => item.id !== obj.id)})
    }

    const setDeletedNewCharacteristics = obj => {
      if (self._criteriaDetails.name === obj.name) {
        setCriteriaDetails({})
      }
      applySnapshot(self._pattern, {...self._pattern, 
        characteristics: self._pattern.characteristics.filter(item => item.name !== obj.name)})
      applySnapshot(self._createdCharacteristics, getSnapshot(self._createdCharacteristics).filter(item => item.name !== obj.name))
    }

    const setUpdatedOldCharacteristics = obj => {
      applySnapshot(self._pattern, {...self._pattern, 
        characteristics: self._pattern.characteristics.filter(item => item.id !== obj.id)})
      applySnapshot(self._pattern, {...self._pattern, characteristics: [...getSnapshot(self._pattern.characteristics), obj]})
      applySnapshot(self._updatedCharacteristics, [...self._updatedCharacteristics, obj])
    }

    const setUpdatedNewCharacteristics = (oldObj, newObj) => {
      setDeletedNewCharacteristics(oldObj)
      setCreatedCharacteristics(newObj)
    }
    
    const setCreatedProjects = obj => {
      applySnapshot(self._createdProjects, [...getSnapshot(self._createdProjects), obj])
      applySnapshot(self._pattern, {...self._pattern, projects: [...getSnapshot(self._pattern.projects), obj]})
    }

    const setDeletedNewProjects = obj => {
      applySnapshot(self._pattern, {...self._pattern, projects: self._pattern.projects.filter(item => item.name !== obj.name)})
    }

    const setDeletedOldProjects = obj => {
      console.log(obj);
      applySnapshot(self._deletedProjects, [...self._deletedProjects, obj.id])
      applySnapshot(self._pattern, {...self._pattern, projects: self._pattern.projects.filter(item => item.id !== obj.id)})
    }

    const getPatternList = async () => {
      try {
        const res = await fetch(`${apiV}api/patterns?page=1&pageSize=120`).then(res => res.json())

        setPatternList(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    const getPattern = async id => {
      try {
        const res = await fetch(`${apiV}api/pattern?id=${id}`).then(res => res.json())

        setPattern(res)
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
      getPatternList()
    }

    const putPattern = async () => {
      const obj = {
        id: self._pattern.id,
        name: self._pattern.name,
        lifecycleStatusId: self.patternLifecycle,
        projectValueMin: self._pattern.projectValueMin,
        projectValueMax: self._pattern.projectValueMax,
        projectValueTarget: self._pattern.projectValueTarget,
        createdProjects: self._createdProjects,
        deletedProjects: self._deletedProjects,
        createdCharacteristics: self._createdCharacteristics,
        updatedCharacteristics: self._updatedCharacteristics,
        deletedCharacteristics: self._deletedCharacteristics,
      }
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
        setDeletedNewProjects,
        setDeletedOldProjects,
        setDeletedNewCharacteristics,
        setDeletedOldCharacteristics,
        setUpdatedNewCharacteristics,
        setUpdatedOldCharacteristics,
        setCreatedCharacteristics,
        setProjectsDetails,
        setPatternLifecycle,
        setCreatedProjects,
        setCriteriaDetails,
        setActivePettern,
        removePattern,
        renamePattern,
        setIsUpdate,
    }

  })
  .views(self => ({
    get patternList() {
        return getSnapshot(self._patternList)
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
    get projectsDetails() {
      return getSnapshot(self._projectsDetails)
    }
  }))

export default PatternStore