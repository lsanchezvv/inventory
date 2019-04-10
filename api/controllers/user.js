// This is a controller.

function getUser (req, res) {
  // variables defined in the Swagger document can be referenced using
  // req.swagger.params.{parameter_name}
  const id = req.swagger.params.id.value
  console.log(id)
  res.json({
    id,
    username: 'jwalton'
  })
}

function putUser (req, res) {
  res.json({ ok: true });
}

module.exports = {
  getUser,
  putUser
}
