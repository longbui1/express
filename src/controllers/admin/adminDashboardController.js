const index = (req, res) => {
  res.render('admin/adminDashboard')
}
//admin signOut
const adminSignOut = async (req, res) => {
  res.cookie('adminToken', '', { maxAge: 1 })
  res.redirect('/')
}


module.exports = {
  index,
  adminSignOut
}