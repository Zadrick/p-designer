import { applySnapshot, getSnapshot, types } from "mobx-state-tree";
import { componentListModel } from '../models'

const componentStore = types
.model({
    _component: types.optional(componentListModel, {}),
    _projectComponents: types.optional(types.array(componentListModel), [])
})
.actions(self => {
    const apiV = 'http://localhost:5000/'

    const setComponent = obj => {
        applySnapshot(self._component, obj)
    }

    const setProjectComponents = obj => {
        applySnapshot(self._projectComponents, obj)
    }

    const getComponent = async id => {
        try {
            const res = await fetch(`${apiV}api/component?id=${id}`).then(res => res.json())
    
            setComponent(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const postComponent = async obj => {
        try {
            const res = await fetch(`${apiV}api/component`, {
              method: 'POST',
              body: JSON.stringify(obj),
              headers: {'Content-Type': 'application/json',}
            }).then(res => res.json())

            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    const putComponent = obj => {
        try {
            fetch(`${apiV}api/component`, {
              method: 'PUT',
              body: JSON.stringify(obj),
              headers: {'Content-Type': 'application/json',}
            })
        } catch (e) {
            console.log(e)
        }
    }

    const deleteComponent = id => {
        try {
            fetch(`${apiV}api/component/remove?id=${id}`, {
              method: 'DELETE',
            })
          } catch (e) {
            console.log(e)
          }
    }

    const getProjectComponents = async prjectId => {
        try {
            const res = await fetch(`${apiV}api/project/components?projectId=${prjectId}&page=1&pageSize=120`).then(res => res.json())
    
            setProjectComponents(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const postProjectComponent = (componentId, projectId) => {
        try {
            fetch(`${apiV}api/project/component?projectId=${projectId}&componentId=${componentId}`, {
              method: 'POST',
            })
        } catch (e) {
            console.log(e)
        }
    }

    const deleteProjectComponent = (componentId, projectId) => {
        try {
            fetch(`${apiV}api/project/component?projectId=${projectId}&componentId=${componentId}`, {
              method: 'DELETE',
            })
          } catch (e) {
            console.log(e)
          }
    }

    return {
        getComponent,
        postComponent,
        putComponent,
        deleteComponent,
        getProjectComponents,
        postProjectComponent,
        deleteProjectComponent,
    }
})
.views(self => ({
    get component() {
        return getSnapshot(self._component)
    },
    get projectComponents() {
        return getSnapshot(self._projectComponents)
    },
}))

export default componentStore