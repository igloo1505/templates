import { expressWrapper, createRouter } from "next-connect";
import { getImagesFromRequest, imageMiddleware } from "utils/imageHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { ImageTargetType } from "components/io/MultipleImageInput";
import { prisma } from "db/db";
import { Prisma } from '@prisma/client'


const handler = createRouter()
handler.use(expressWrapper(imageMiddleware.any()))


handler.post(async (req: NextApiRequest | any, res: NextApiResponse | any) => {
    try {
        let files = getImagesFromRequest(req);
        let images: Prisma.ImageCreateOrConnectWithoutProfileInput[] = files.map((j) => ({
            where: {
                url: j.url
            },
            create: {
                url: j.url,
                path: j.path
            }
        }))
        const { imageTargetType, targetId }: { imageTargetType: ImageTargetType, targetId: string } = req.body
        let updatedObject = null
        if (imageTargetType === "profile") {
            updatedObject = await prisma.profile.update({
                where: {
                    userName: targetId
                },
                data: {
                    images: {
                        connectOrCreate: images,
                    },
                },
                include: {
                    images: true
                }
            })
        }

        res.json({
            success: true,
            updatedProfile: imageTargetType ? updatedObject : null
        });
    } catch (error) {
        console.error(error)
        return res.json({ success: false })
    }
});


export default handler.handler()

export const config = {
    api: {
        bodyParser: false,
    },
};
