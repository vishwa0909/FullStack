const sql = require('../models/db.js');

const User = function(user){
    this.username = user.username;
    this.password = user.password;
};

User.create = (newUser,result) => {
    sql.query('insert into users set ?',newUser,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("Created User : ",{id:res.insertedId,...newUser});
        return (null,{id:res.insertedId,...newUser});
    })
};

User.findById = (userId,result) => {
    sql.query(`select * from users where Id = ${userId}`,(err,res) =>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log('Found User:',res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:'not_found'},null);
    })
};

User.getAll = result =>{
    sql.query('select * from users',(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log('Users : ',res);
        result(null,res);
    })
};

/*User.updateById = (id,user,result) =>{
    sql.query('update users set email = ?, name = ?, active = ? where id = ?',
    [user.email,user.name,user.active,id],(err,res) =>{
        if(err){
            console.log(err);
            result(null,res);
            return;
        }
        if(res.affectedRows == 0){
            result({kind:'Not_Found'},null);
            return;
        }
        console.log('Updated User : ',{id:id,...user});
        result(null,{id:id,...user});
    });
};*/

User.remove = (id,result) =>{
    sql.query('delete from users where id = ?',id,(err,res)=>{
        if(err){
            console.log(err);
            result(null,res);
            return;
        }
        if(res.affectedRows == 0){
            result({kind:'Not_Found'},null);
            return;
        }
        console.log('Deleted Users with Id : ',id);
        result(null,res);
    });
};


User.removeAll = result =>{
    sql.query('delete from users',(err,res)=>{
        if(err){
            console.log(err);
            result(null,res);
            return;
        }
        console.log('Deleted ${res.affectedRows} Users')
        result(null,res);
    });
};


module.exports = User;