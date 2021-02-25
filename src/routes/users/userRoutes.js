const express=require('express')
const router=express.Router()

const userController=require('../../controllers/users/userController')

router.get('/',userController.index)
router.post('/',userController.postUser)
router.get('/:userId',userController.searchUser)
router.patch('/:userId',userController.updateUser)
router.delete('/:userId',userController.deleteUser)

module.exports=router