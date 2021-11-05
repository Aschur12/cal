getContacts =(req,res)=>{
    return res.status(201).json({
        success: true,
        message: 'contacts show',
    });
};
module.exports = {getContacts};