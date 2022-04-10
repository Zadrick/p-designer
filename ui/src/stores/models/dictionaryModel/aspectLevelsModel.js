import { types } from "mobx-state-tree";

const aspectLevelsModel = types.model('LibraryModel', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    value: types.optional(types.boolean, true)
})

export default aspectLevelsModel