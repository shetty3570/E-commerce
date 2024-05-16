const user = require('../modules/user');
const bcryptjs = require('bcryptjs');
const jwt = require ('jsonwebtoken')

const Login = async (req, res) => {
    try {
        const body = req.body;
        const findUser = await user.findOne({ email: body.email });
        
        if (!findUser) {
            return res.status(401).json({ errorMessage: 'User not found' });
        }

        const comparePassword = await bcryptjs.compare(body.password, findUser.password);
        
        if (!comparePassword) {
            return res.status(401).json({ errorMessage: 'Invalid Password' });
        }
        //<!-- we are creating token using jsonwebtoken -->
    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    //<!-- we are sending the token to the frontend in form of cookie-->
    res.cookie('auth-token', token, {
        //<!-- cookie exipre time -->
        httpOnly: true,   //used for http only.
        secure: false,    //if you are using https then uh must make it true.
        maxAge: 86400000, //expire time in milliseconds
    })


        res.send({ message: 'Success', data: findUser });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ errorMessage: 'Internal Server Error' });
    }
};

const Register = async (req, res) => {
    try {
        const body = req.body;
        if (!body.password || !body.email || !body.username) {
            return res.status(400).json({ errorMessage: 'Missing required fields' });
        }
        const hashpassword = await bcryptjs.hash(body.password, 10);

        
        const saveData = await user.create({
            username: body.username,
            email: body.email,
            password: hashpassword
        });

        res.send({ message: 'Success', data: saveData });

        




    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({ errorMessage: 'Internal Server Error' });
    }
};


const Logout = async (req, res) => {
    res.cookie("auth-token", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
        maxAge: 0,  
    })

    res.status(200).json({message: 'Logging out'})
}

module.exports = {
    Login,
    Register
};