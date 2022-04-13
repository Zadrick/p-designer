import { types } from "mobx-state-tree";

const componentTypeModel = types.model('componentTypeModel', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    libraryId: types.optional(types.integer, 0),
})

export default componentTypeModel