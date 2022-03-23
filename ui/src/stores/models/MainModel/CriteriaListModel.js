import { types } from 'mobx-state-tree';

const criteriaModel = types.model('criteria', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    minValue: types.optional(types.number, 0),
    maxValue: types.optional(types.number, 0),
    targetValue: types.optional(types.number, 0),
    isMinimization: types.optional(types.boolean, false),
})

export default criteriaModel