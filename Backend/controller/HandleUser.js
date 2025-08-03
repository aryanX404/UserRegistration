const User = require('../model/User');

async function handleLoginUser(req, res) {
    const {email, password} = req.body;
    console.log(req.body);
    const userExist = await User.findOne({email});
    console.log(userExist);
    if(!userExist){
        return res.status(400).json({
            message:"User does not exists",
            class: "danger message"
        })
    }else if (password != userExist.password){
        return res.status(400).json({
            message:"Incorrect Password",
            class: "danger message"
        })
    }

    return res.status(200).json({
        message:"Logged in Successfully",
        class:"success message"
    })

}

async function handleSignUpUser(req, res){
    const {name, email, password, confirmPassword} = req.body;
    console.log(req.body);
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({
            message:"All fields are required",
            class: "danger message"
        })
    }
    try{
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({
                message:"User already exists",
                class: "danger message"
            })
        }
        if(password != confirmPassword){
            return res.status(400).json({
                message:"Passwords do not match",
                class: "danger message"
            })
        }

        // Create new user
        const user = new User({name, email, password});
        await user.save();
        return res.status(200).json({
            message:"User created successfully",
            class: "success message",
            user: user
        })
    }catch (error){
        console.error('User creation error: ', error);
        return res.status(500).json({
            message:"Internal server error",
            class: "danger message",
            err:error.message
        })
    }
}

module.exports = {handleLoginUser, handleSignUpUser}