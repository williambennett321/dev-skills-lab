const skills = [
  {text: "C++", _id: 1 },
  {text: "Python", _id: 2},
  {text: "Stressed", _id: 3},
]


const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find( skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No todo was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New todos wouldn't be done
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skills => skills._id == parseInt(id))
    const deletedSkills = skills.splice(idx, 1)
    if (!deletedSkills.length ) throw new Error ('No todo was deleted')
    return callback(null, deletedSkills[0])
  } catch(error) {
    return callback(error, null)
  }
}



export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}