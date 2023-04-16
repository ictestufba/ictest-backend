import express from 'express'
import { PrismaClient } from '@prisma/client'

export const app = express()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Rodrigo Cândido',
    email: 'rodrigocan@gmail.com',
  },
})
