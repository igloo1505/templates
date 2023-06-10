import { createEdgeRouter, createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "#/db/db";
import { getImageStream } from "#/utils/imageHandler";


interface RequestContext {
    params: {
        imageId: string
    }
}


const handler = createRouter()

handler.get(async (req: NextApiRequest | any, res: NextApiResponse | any) => {
    try {
        const imageId = req.query?.imageId
        const img = await prisma.image.findFirst({
            where: {
                id: parseInt(imageId)
            }
        })
        if (!img) {
            return res.status(404).json({ success: false })
        }
        const stream = await getImageStream(img.path)
        if (!stream) {
            return res.status(404).json({ success: false })
        }
        stream.pipe(res)
    } catch (err) {
        console.error(err)
        return res.json({ success: false })
    }
})



export default handler.handler()

export const config = {
    api: {
        bodyParser: false,
    },
};
// export const runtime = "nodejs"
