import { types } from 'mobx-state-tree';

const patternModel = types.model('criteria', {
    Id: types.optional(types.integer, 0),
    Name: types.optional(types.string, ''),
})

const PatternListModel = types.optional(types.array(patternModel), [])

export default PatternListModel