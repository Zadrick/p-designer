import { types } from 'mobx-state-tree';

const LibraryModel = types.model('LibraryModel', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    lifecycleStatusId: types.optional(types.number, 1),
})

export default LibraryModel