import { z } from 'zod'
import { createError, defineEventHandler, getValidatedQuery, setHeader } from 'h3'
import { loadFileContentsFromData } from '../../utils/loadFileContentsFromData'

const inputSchema = z.object({
  file: z.enum(['legal-notice', 'privacy-policy']),
})

export default defineEventHandler(async (event): Promise<string> => {
  const input = await getValidatedQuery(event, query => inputSchema.parse(query))
  const fileContent = loadFileContentsFromData(`${input.file}.html`)

  if (fileContent == null) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Legal notice not set!',
    })
  }

  setHeader(event, 'Content-Type', 'text/html')
  return fileContent
})
