const Joi = require('@hapi/joi')

const adminSignInValidation = (data) => {
    const schema = Joi.object({
        user_name: Joi.string().min(3).required().messages({
            "string.empty": `Username missing`,
            "string.min": `Use {#limit} characters or more for your username`,
            "any.required": `Username" is a required field`
        }),
        password: Joi.string().min(6).required().messages({
            "string.empty": `Password missing`,
            "string.min": `Use {#limit} characters or more for your Password`,
            "any.required": `Password is a required field`
        }),
    })
    return schema.validate(data)
}

module.exports = { adminSignInValidation }