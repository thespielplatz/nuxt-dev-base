import { readFileSync } from 'node:fs'
import path from 'node:path'
import consola from 'consola'
import { addConsolaPrefix } from './addConsolaPrefix'

export default (): {
  legalNotice: string,
  privacyPolicy: string,
} => {
  return {
    legalNotice: loadFile('legal-notice.html', 'Legal notice'),
    privacyPolicy: loadFile('privacy-policy.html', 'Privacy policy'),
  }
}

const loadFile = (fileName: string, context: string) => {
  const filePath = path.resolve(process.cwd(), 'data', fileName)
  try {
    const fileContent = readFileSync(filePath, 'utf-8')
    consola.info(addConsolaPrefix(`${context} loaded from:`), filePath)
    return fileContent
  } catch {
    consola.warn(addConsolaPrefix(`Could not load ${context} from:`), filePath)
    return ''
  }
}
