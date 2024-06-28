export const register = async (req, res) => {
    res.status(200).json({message:"register user"})
}

export const authUser = async (req, res) => {
    res.status(200).json({message:"auth user"})
}
export const logOut = async (req, res) => {
    res.status(200).json({message:"logOut user"})
}

export const getUserProfil = async (req, res) => {
    res.status(200).json({message:" user profil"})
}

export const updateUserProfil = async (req, res) => {
    res.status(200).json({message:"update user"})
}