import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import consola from 'consola'
import { addConsolaPrefix } from './addConsolaPrefix'

export default (): { legalNotice: string } => {
  const legalNoticePath = join(process.cwd(), 'data', 'legal-notice.html')

  let legalNotice: string | undefined
  try {
    legalNotice = readFileSync(legalNoticePath, 'utf-8')
  } catch {
    consola.info(addConsolaPrefix('Could not load legal notice from:'), legalNoticePath)
    return createEmptyResult()
  }

  consola.info(addConsolaPrefix('Legal notice loaded from from:'), legalNoticePath)
  return {
    legalNotice: legalNotice,
  }
}

const createEmptyResult = () => {
  return {
    legalNotice: '',
  }
}
