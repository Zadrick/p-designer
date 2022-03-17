import { types } from 'mobx-state-tree';

// const Aspect = types.model('aspect', {

// })

const OnePatternModel = types.model('onePatternModel', {
    Id: types.optional(types.integer, 0),
    Name: types.optional(types.string, ''),
    ProjectValueMin: types.optional(types.number, 0),
    ProjectValueMax: types.optional(types.number, 0),
    AspectId: types.optional(types.integer, 0),
    LifecycleStatus: types.optional(types.number, 0),
    CharacteristicId: types.optional(types.number, 0),
    ProjectValueTarget: types.optional(types.number, 0),
})



export default OnePatternModel