import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'
import { libraryProjectModel, criteriaModel, LibraryModel } from '../models'

const LibraryStore = types
.model({
    _libraryList: types.optional(types.array(criteriaModel), []),
    _library: types.optional(LibraryModel, {}),
    _libraryProject: types.optional(types.array(libraryProjectModel), []),
    activeLibrary: types.optional(types.number, 0)
})
.actions(self => {
    const apiV = 'https://localhost:44326/'

    const setActiveLibrary = id => {
        self.activeLibrary = id
    }

    const setLibraries = obj => {
        applySnapshot(self._libraryList, obj)
    }

    const setLibray = obj => {
        applySnapshot(self._library, obj)
    }

    const setLibraryProject = obj => {
        applySnapshot(self._libraryProject, obj)
    }


    const getLibraries = async () => {
        try {
            const res = await fetch(`${apiV}api/libraries?page=1&pageSize=120`).then(res => res.json())
    
            setLibraries(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getLibray = async id => {
        try {
            const res = await fetch(`${apiV}api/library?id=${id}`).then(res => res.json())
    
            setLibray(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const postLibrary = async name => {
        try {
            const res = await fetch(`${apiV}api/library`, {
              method: 'POST',
              body: JSON.stringify({name: name}),
              headers: {'Content-Type': 'application/json',}
            }).then(res => res.json())

            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    const putLibrary = obj => {
        try {
            fetch(`${apiV}api/library`, {
              method: 'PUT',
              body: JSON.stringify(obj),
              headers: {'Content-Type': 'application/json',}
            })
        } catch (e) {
            console.log(e)
        }
    }

    const deleteLibrary = id => {
        try {
            fetch(`${apiV}api/library/remove?id=${id}`, {
              method: 'DELETE',
            })
          } catch (e) {
            console.log(e)
          }
    }

    const getLibraryProjects = async id => {
        try {
            const res = await fetch(`${apiV}api/library/projects?libraryId=${id}&page=1&pageSize=120`).then(res => res.json())
    
            setLibraryProject(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return {
        getLibraries,
        getLibray,
        postLibrary,
        putLibrary,
        deleteLibrary,
        getLibraryProjects,
        setActiveLibrary,
    }
})
.views(self => ({
    get libraryList() {
        return getSnapshot(self._libraryList)
    },
    get library() {
        return getSnapshot(self._library)
    },
    get libraryProject() {
        return getSnapshot(self._libraryProject)
    },
}))

export default LibraryStore