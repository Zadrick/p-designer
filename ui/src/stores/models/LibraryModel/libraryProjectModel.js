import { types } from 'mobx-state-tree';

const libraryProjectModel = types.model('libraryProjectModel', {
    id: types.optional(types.integer, 0),
    patternId: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    rating: types.optional(types.number, 0),
})

export default libraryProjectModel