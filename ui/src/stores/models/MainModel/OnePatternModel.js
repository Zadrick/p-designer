import { types } from 'mobx-state-tree';

const criteriaModel = types.model('criteria', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    minValue: types.optional(types.number, 0),
    maxValue: types.optional(types.number, 0),
    targetValue: types.optional(types.number, 0),
    isMinimization: types.optional(types.boolean, false),
})

const projects = types.model('project', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    patternName: types.optional(types.string, ''),
    value: types.optional(types.number, 0),
})


const OnePatternModel = types.model('onePatternModel', {
    id: types.optional(types.integer, 0),
    name: types.optional(types.string, ''),
    lifecycleStatusId: types.optional(types.integer, 0),
    projectValueMin: types.optional(types.number, 0),
    projectValueMax: types.optional(types.number, 0),
    projectValueTarget: types.optional(types.number, 0),
    projects: types.array(projects, []),
    characteristics: types.array(criteriaModel, []),
})



export default OnePatternModel