export const renderProfile = async (req, res, next) => {
    res.send(req.userId);
};