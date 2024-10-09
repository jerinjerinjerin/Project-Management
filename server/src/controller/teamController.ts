import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await prisma.team.findMany();

    const teamWithUsernames = await Promise.all(
      teams.map(async (team: any) => {
        // Check if productOwnerUserId is not null before fetching productOwner details
        const productOwner = team.productOwnerUserId
          ? await prisma.user.findUnique({
              where: { userId: team.productOwnerUserId },
              select: { username: true },
            })
          : null;

        // Check if projectManagerUserId is not null before fetching projectManager details
        const projectManager = team.projectManagerUserId
          ? await prisma.user.findUnique({
              where: { userId: team.projectManagerUserId },
              select: { username: true },
            })
          : null;

        return {
          ...team,
          productOwnerUsername: productOwner?.username || null,
          projectManagerUsername: projectManager?.username || null,
        };
      })
    );

    res.json(teamWithUsernames);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching Teams: ${error.message}` });
  }
};
