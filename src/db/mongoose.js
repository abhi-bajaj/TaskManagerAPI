const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

// const task = new Task({ description: 'Do dishes    ' })
// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch(error => {
//     console.log(error)
//   })
