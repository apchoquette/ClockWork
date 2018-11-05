export default (tasks,filter) => {
    return tasks.filter(((task)=> {
        const match = task.stage.includes(filter)
        return match
    }))

}