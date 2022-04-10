import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { OnePatternModel, PatternListModel, criteriaModel, projects } from '../models'

const PatternStore = types
  .model({
    _patternList: types.optional(PatternListModel, []),
    _pattern: types.optional(OnePatternModel, {}),
    _criteriaList: types.optional(types.array(criteriaModel), []),
    _projectList: types.optional(types.array(projects), []),
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
    const apiV = 'http://localhost:5000/'

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
      applySnapshot(self._criteriaList, [...self._criteriaList, obj])
    }

    const setDeletedOldCharacteristics = obj => {
      if (self._criteriaDetails.id === obj.id) {
        setCriteriaDetails({})
      }
      applySnapshot(self._deletedCharacteristics, [...self._deletedCharacteristics, obj.id])
      applySnapshot(self._criteriaList, [...self._criteriaList.filter(item => item.id !== obj.id)])
    }

    const setDeletedNewCharacteristics = obj => {
      if (self._criteriaDetails.name === obj.name) {
        setCriteriaDetails({})
      }
      applySnapshot(self._criteriaList, [...self._criteriaList.filter(item => item.name !== obj.name)])
      applySnapshot(self._createdCharacteristics, getSnapshot(self._createdCharacteristics).filter(item => item.name !== obj.name))
    }

    const setUpdatedOldCharacteristics = obj => {
      applySnapshot(self._criteriaList, [...self._criteriaList.filter(item => item.id !== obj.id)])
      applySnapshot(self._criteriaList, [...self._criteriaList, obj])
      applySnapshot(self._updatedCharacteristics, [...self._updatedCharacteristics, obj])
    }

    const setUpdatedNewCharacteristics = (oldObj, newObj) => {
      setDeletedNewCharacteristics(oldObj)
      setCreatedCharacteristics(newObj)
    }
    
    const setCreatedProjects = obj => {
      applySnapshot(self._createdProjects, [...getSnapshot(self._createdProjects), obj])
      applySnapshot(self._projectList, [...self._projectList, obj])
    }

    const setDeletedNewProjects = obj => {
      applySnapshot(self._projectList, [...self._projectList.filter(item => item.name !== obj.name)])
    }

    const setDeletedOldProjects = obj => {
      applySnapshot(self._deletedProjects, [...self._deletedProjects, obj.id])
      applySnapshot(self._projectList, [...self._projectList.filter(item => item.id !== obj.id)])
    }

    const setCriteriaList = obj => {
      applySnapshot(self._criteriaList, obj)
    }

    const setProjectList = obj => {
      applySnapshot(self._projectList, obj)
    }

    const getCritetia = async () => {
      try {
        const res = await fetch(`${apiV}api/criteria`).then(res => res.json())

        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }

    const postCritetia = async obj => {
      try {
        const id = await fetch(`${apiV}api/criteria`, {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())

        console.log(id)
      } catch (e) {
        console.log(e)
      }
    }

    const putCritetia = obj => {
      try {
        fetch(`${apiV}api/criteria`, {
          method: 'PUT',
          body: JSON.stringify(obj),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())
      } catch (e) {
        console.log(e)
      }
    }

    const deleteCritetia = async id => {
      try {
        fetch(`${apiV}api/criteria?id=${id}`, {
          method: 'DELETE',
        })
      } catch (e) {
        console.log(e)
      }
    }

    const getCriterias = async patternId => {
      try {
        const res = await fetch(`${apiV}api/criterias?patternId=${patternId}&page=1&pageSize=120`).then(res => res.json())

        setCriteriaList(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    const getProjectsAll = async () => {
      try {
        const res = await fetch(`${apiV}api/projects?page=1&pageSize=120`).then(res => res.json())

        console.log(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    const getProjectsPattern = async patternId => {
      try {
        const res = await fetch(`${apiV}api/pattern/projects?patternId=${patternId}&page=1&pageSize=120`).then(res => res.json())

        setProjectList(res.data)
      } catch (e) {
        console.log(e)
      }
    }

    const getProject = async () => {
      try {
        const res = await fetch(`${apiV}api/project`).then(res => res.json())

        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }

    const postProject = async obj => {
      try {
        const res = await fetch(`${apiV}api/project`, {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())

        setPatternList(res)
      } catch (e) {
        console.log(e)
      }
    }

    const putProject = obj => {
      try {
        fetch(`${apiV}api/project`, {
          method: 'PUT',
          body: JSON.stringify(obj),
          headers: {'Content-Type': 'application/json',}
        }).then(res => res.json())
      } catch (e) {
        console.log(e)
      }
    }

    const deleteProject = id => {
      try {
        fetch(`${apiV}api/project/remove?id=${id}`, {
          method: 'DELETE',
        })
      } catch (e) {
        console.log(e)
      }
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
        aspects: []
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
        putCritetia,
        getCritetia,
        putProject,
        postProject,
        deleteProject,
        getProject,
        getCriterias,
        deleteCritetia,
        getProjectsPattern,
        getProjectsAll,
        postCritetia,
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

export default PatternStore