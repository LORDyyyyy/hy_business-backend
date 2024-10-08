import { Request, Response } from "express";

export function logout(req: Request, res: Response): any {
  res.clearCookie("token");

  return res.status(200).json({ message: "Logged out successfully." });
}
