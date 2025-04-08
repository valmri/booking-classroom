export function verifyRole (req:any, res:any, next:any ) {
  if (!req.user || req.user.role !== 2) {
    return res.status(403).json({ message: "Accès refusé : rôle insuffisant" });
  }
  next();
}