import { types } from 'mobx-state-tree';

const patternModel = types.model('criteria', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
})

const PatternListModel = types.optional(types.array(patternModel), [])

export default PatternListModel