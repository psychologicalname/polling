import prisma from '@/prisma/db'

export default async function handler(req, res) {
      if(req.method === 'POST') {
        const {body} = req;
        
        const user = await prisma.user.findUnique({
          
        })
      }
      else {
        res.json({message: 'Method not supported!'})
      }
}