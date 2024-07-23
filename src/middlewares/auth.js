import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    console.log(req.headers?.authorization?.split(' '));
    console.log(req.headers?.authorization?.split(' ')[1]);
    if(req.headers?.authorization?.split(' ')[1]){
        const token = req.headers?.authorization?.split(' ')[1];
        try{
            const decodedToken = jwt.verify(token, 'iambatman');
            console.log(decodedToken);
        }
        catch(err){
            console.log(err)
            return res.status(401).json({status: false, error: 'Unauthorized'});
        }
        
        next();
    }
    return res.status(401).json({status: false, error: 'Unauthorized', message:'tokem is needed'});
}

export {auth}