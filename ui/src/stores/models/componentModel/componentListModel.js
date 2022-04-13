import { types } from "mobx-state-tree";

const componentListModel = types.model('LibraryModel', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    componentTypeId: types.optional(types.integer, 0),
    lifecycleStatusId: types.optional(types.integer, 0),
})

export default componentListModel