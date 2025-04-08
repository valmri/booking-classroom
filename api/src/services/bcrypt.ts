import bcrypt from "bcrypt"

export async function crypt(mot_de_passe: string){
    const saltRounds: number = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(mot_de_passe, salt);
    return hashedPassword;
}