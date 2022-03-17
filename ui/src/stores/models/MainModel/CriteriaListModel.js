import { types } from 'mobx-state-tree';

const criteriaModel = types.model('criteria', {
    Id: types.optional(types.integer, 0),
    Name: types.optional(types.string, ''),
    MinValue: types.optional(types.number, 0),
    MaxValue: types.optional(types.number, 0),
    TargetValue: types.optional(types.number, 0),
    IsMinimization: types.optional(types.boolean, false),
    PropertyId: types.optional(types.number, 0),
})

const CriteriaListModel =  types.optional(types.array(criteriaModel), [])

export default CriteriaListModel